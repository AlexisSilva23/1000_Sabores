import { useState } from "react";
import { useProductos } from "../../context/productosContext";
import TarjetaProducto from "../../components/tarjeta-producto/tarjetaProducto";
import estilos from "./productos.module.css";



function Productos() {
  const { productos } = useProductos();

  const categorias = [...new Set(productos.map((p) => p.categoria))];


  const [categoria, setCategoria] = useState("Todas");
  const [precioMax, setPrecioMax] = useState("");

  const filtrados = productos.filter(
    (p) =>
      (categoria === "Todas" || p.categoria === categoria) &&
      (precioMax === "" || p.precio <= Number(precioMax))
  );

  return (
    <main className="container my-5">
      <h1 className={estilos.titulo}>Productos</h1>

      <div className={estilos.categorias}>
        <button
          className={`${estilos.categoria} ${categoria === "Todas" ? estilos.activa : ""}`}
          onClick={() => setCategoria("Todas")}
        >
          <span className={estilos.nombreCategoria}>Todas</span>
        </button>

        {categorias.map((cat) => {
          const imagen = productos.find((p) => p.categoria === cat).imagen;
          return (
            <button
              key={cat}
              className={`${estilos.categoria} ${categoria === cat ? estilos.activa : ""}`}
              onClick={() => setCategoria(cat)}
            >
              <img src={imagen} alt={cat} className={estilos.imagenCategoria} />
              <span className={estilos.nombreCategoria}>{cat}</span>
            </button>
          );
        })}
      </div>

      <div className={estilos.barraFiltros}>
        <h2 className={estilos.subtitulo}>
          {categoria} <small>({filtrados.length})</small>
        </h2>

        <label className={estilos.filtroPrecio}>
          Precio máximo
          <input
            type="number"
            className="form-control"
            placeholder="Ej: 30000"
            min="0"
            value={precioMax}
            onChange={(e) => setPrecioMax(e.target.value)}
          />
        </label>
      </div>

      {filtrados.length === 0 ? (
        <p className={estilos.vacio}>No hay productos con esos filtros.</p>
      ) : (
        <div className="row">
          {filtrados.map((producto) => (
            <TarjetaProducto key={producto.codigo} producto={producto} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Productos;