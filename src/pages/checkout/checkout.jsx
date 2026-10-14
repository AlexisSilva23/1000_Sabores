import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProductos } from "../../context/productosContext";
import { regiones } from "../../data/regiones";
import { crearPedido } from "../../data/pedidos";
import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/authContext";
import CampoFormulario from "../../components/campo-formulario/campoFormulario";
import TablaPedido from "../../components/tabla-pedido/tablaPedido";
import estilos from "./checkout.module.css";


function Checkout() {
  const { items, totalPrecio, clearCart } = useCart();
  const { usuario } = useAuth();
  const navigate = useNavigate();
  const { productos, descontarStock } = useProductos();
  const pagoRealizado = useRef(false);

  const [form, setForm] = useState({
    nombre: usuario?.nombre || "",
    apellidos: usuario?.apellidos || "",
    correo: usuario?.email || "",
    calle: "",
    depto: "",
    region: regiones[0].nombre,
    comuna: regiones[0].comunas[0],
    indicaciones: "",
  });

  const [errores, setErrores] = useState({});

  const lineas = items.map((item) => ({
    ...productos.find((p) => p.codigo === item.codigo),
    cantidad: item.cantidad,
  }))

  const comunasDeLaRegion = regiones.find((r) => r.nombre === form.region).comunas;

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const cambiarRegion = (e) => {
    const region = regiones.find((r) => r.nombre === e.target.value);
    setForm({ ...form, region: region.nombre, comuna: region.comunas[0] });
  };


  const validar = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre";
    if (!form.apellidos.trim()) e.apellidos = "Ingresa tus apellidos";
    if (!/^\S+@\S+\.\S+$/.test(form.correo)) e.correo = "Ingresa un correo válido";
    if (!form.calle.trim()) e.calle = "Ingresa la calle";
    return e;
  };

  const pagar = (e) => {
    e.preventDefault();
    const errs = validar();
    setErrores(errs);
    if (Object.keys(errs).length > 0) return;

    const pagoOk = Math.random() < 0.8;

    const pedido = crearPedido({
      cliente: { nombre: form.nombre, apellidos: form.apellidos, correo: form.correo },
      direccion: {
        calle: form.calle,
        depto: form.depto,
        region: form.region,
        comuna: form.comuna,
        indicaciones: form.indicaciones,
      },
      lineas,
      total: totalPrecio,
      estado: pagoOk ? "pagado" : "rechazado",
      estadoEnvio: pagoOk ? "Pendiente" : "Cancelado",
    });

    if (pagoOk) {
      descontarStock(lineas);
      clearCart();
    }
    navigate(`/pedido/${pedido.numero}`);
  };

  if (lineas.length === 0) {
    if (pagoRealizado.current) return null;   // está navegando, no mostrar nada
    return (
      <main className="container text-center my-5">
        <h2>Tu carrito está vacío</h2>
        <Link to="/productos" className="btn btn-chocolate mt-3">Ver Productos</Link>
      </main>
    );
  }

  return (
    <main className="container my-5">
      <form className={estilos.formulario} onSubmit={pagar} noValidate>
        <h1 className={estilos.titulo}>Checkout</h1>
        <p className="text-secondary">Revisa tu pedido y completa tus datos.</p>

        <TablaPedido lineas={lineas} total={totalPrecio} etiquetaTotal="Total a pagar" />

        <h2 className={estilos.seccion}>Información del cliente</h2>
        <div className="row">
          <div className="col-md-6">
            <CampoFormulario etiqueta="Nombre" nombre="nombre" requerido
              value={form.nombre} onChange={cambiar} error={errores.nombre} />
          </div>
          <div className="col-md-6">
            <CampoFormulario etiqueta="Apellidos" nombre="apellidos" requerido
              value={form.apellidos} onChange={cambiar} error={errores.apellidos} />
          </div>
        </div>
        <CampoFormulario etiqueta="Correo" nombre="correo" type="email" requerido
          value={form.correo} onChange={cambiar} error={errores.correo} />

        <h2 className={estilos.seccion}>Dirección de entrega</h2>
        <div className="row">
          <div className="col-md-8">
            <CampoFormulario etiqueta="Calle" nombre="calle" requerido
              value={form.calle} onChange={cambiar} error={errores.calle} />
          </div>
          <div className="col-md-4">
            <CampoFormulario etiqueta="Departamento (opcional)" nombre="depto"
              placeholder="Ej: 603" value={form.depto} onChange={cambiar} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <CampoFormulario etiqueta="Región" nombre="region" requerido>
              <select id="region" name="region" className="form-select"
                value={form.region} onChange={cambiarRegion}>
                {regiones.map((r) => <option key={r.nombre}>{r.nombre}</option>)}
              </select>
            </CampoFormulario>
          </div>
          <div className="col-md-6">
            <CampoFormulario etiqueta="Comuna" nombre="comuna" requerido>
              <select id="comuna" name="comuna" className="form-select"
                value={form.comuna} onChange={cambiar}>
                {comunasDeLaRegion.map((c) => <option key={c}>{c}</option>)}
              </select>
            </CampoFormulario>
          </div>
        </div>
        <CampoFormulario etiqueta="Indicaciones para la entrega (opcional)" nombre="indicaciones">
          <textarea id="indicaciones" name="indicaciones" className="form-control" rows="3"
            placeholder="Ej: entre calles, color del edificio, no tiene timbre"
            value={form.indicaciones} onChange={cambiar} />
        </CampoFormulario>

        <div className={estilos.acciones}>
          <Link to="/carrito" className="btn btn-outline-success">Volver al carrito</Link>
          <button type="submit" className="btn btn-chocolate btn-lg">
            Pagar ahora ${totalPrecio.toLocaleString("es-CL")}
          </button>
        </div>
      </form>
    </main>
  );
}

export default Checkout;


