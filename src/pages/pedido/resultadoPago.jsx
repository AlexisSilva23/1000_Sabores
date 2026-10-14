import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CheckCircle, XCircle } from "react-bootstrap-icons";
import { obtenerPedido } from "../../data/pedidos";
import TablaPedido from "../../components/tabla-pedido/tablaPedido";
import Alerta from "../../components/alert/alert";
import estilos from "./resultadoPago.module.css";

function ResultadoPago() {
  const { numero } = useParams();
  const [mensaje, setMensaje] = useState(null);
  const pedido = obtenerPedido(numero);

  if (!pedido) {
    return (
      <main className="container text-center my-5">
        <div className="alert alert-danger">No existe el pedido #{numero}.</div>
        <Link to="/productos" className="btn btn-outline-success">Ir a Productos</Link>
      </main>
    );
  }

  const exito = pedido.estado === "pagado";
  const { cliente, direccion } = pedido;

  return (
    <main className="container my-5">
      <section className={estilos.tarjeta}>
        <h1 className={exito ? estilos.tituloExito : estilos.tituloError}>
          {exito ? <CheckCircle /> : <XCircle />}{" "}
          {exito
            ? `Se ha realizado la compra. Nro #${pedido.numero}`
            : `No se pudo realizar el pago. Nro #${pedido.numero}`}
        </h1>

        <Alerta mensaje={mensaje} tipo="success" onCerrar={() => setMensaje(null)} />

        {!exito && (
          <div className="text-center my-3">
            <Link to="/checkout" className="btn btn-chocolate btn-lg">
              Volver a realizar el pago
            </Link>
          </div>
        )}

        <h2 className={estilos.seccion}>Cliente</h2>
        <p className={estilos.dato}>{cliente.nombre} {cliente.apellidos} · {cliente.correo}</p>

        <h2 className={estilos.seccion}>Dirección de entrega</h2>
        <p className={estilos.dato}>
          {direccion.calle}{direccion.depto && `, Depto ${direccion.depto}`}<br />
          {direccion.comuna}, {direccion.region}
          {direccion.indicaciones && <><br />Indicaciones: {direccion.indicaciones}</>}
        </p>

        <TablaPedido
          lineas={pedido.lineas}
          total={pedido.total}
          etiquetaTotal={exito ? "Total pagado" : "Total a pagar"}
        />

        {exito && (
          <div className={estilos.acciones}>
            <button className="btn btn-outline-danger" onClick={() => window.print()}>
              Imprimir boleta en PDF
            </button>
            <button className="btn btn-outline-success"
              onClick={() => setMensaje(`Boleta enviada a ${cliente.correo}`)}>
              Enviar boleta por email
            </button>
            <Link to="/productos" className="btn btn-chocolate">Seguir comprando</Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default ResultadoPago;