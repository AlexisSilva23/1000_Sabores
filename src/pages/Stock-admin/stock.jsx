import { useState } from "react";
import { useProductos } from "../../context/productosContext";
import estilos from "./stock.module.css";

function nivelDe(porcentaje) {
  if (porcentaje === 0) return "agotado";
  if (porcentaje <= 25) return "bajo";
  if (porcentaje <= 60) return "medio";
  return "alto";
}

function Stock() {
  const { productos } = useProductos();
  const [busqueda, setBusqueda] = useState("");

  const totalStock = productos.reduce((suma, p) => suma + p.stock, 0);
  const totalLimite = productos.reduce((suma, p) => suma + p.limite, 0);

  const visibles = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="flex-fill">
      <div className={estilos.encabezado}>
        <h1 className="h3 mb-0">🧁 Stock de la pastelería</h1>
        <span className="h4 mb-0">🔔</span>
      </div>

      <div className="p-4">
        <div className={estilos.resumen}>
          <div className={estilos.resumenNumero}>{totalStock}</div>
          <div>
            productos en stock de {totalLimite} de capacidad
            <br />
            <small>{productos.length} tipos de productos</small>
          </div>
        </div>

        <input
          type="text"
          className={`form-control mb-4 ${estilos.buscador}`}
          placeholder="Buscar un producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <div className="row g-3">
          {visibles.map((p) => {
            const porcentaje = Math.min(100, (p.stock / p.limite) * 100);
            return (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={p.codigo}>
                <div className={estilos.tarjeta}>
                  <img src={p.imagen} alt={p.nombre} className={estilos.imagen} />
                  <div className={estilos.codigo}>{p.codigo}</div>
                  <div className={estilos.nombre}>{p.nombre}</div>
                  <progress
                    className={`${estilos.barra} ${estilos[nivelDe(porcentaje)]}`}
                    value={p.stock}
                    max={p.limite}
                  />
                  <div className={estilos.cantidad}>
                    {p.stock === 0 ? "Agotado" : `${p.stock} / ${p.limite} unidades`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {visibles.length === 0 && (
          <p className="text-center mt-4">No se encontró ningún producto 🥲</p>
        )}
      </div>
    </div>
  );
}

export default Stock;