import { Link } from "react-router-dom";

function TarjetaProducto({ producto }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">${producto.precio.toLocaleString("es-CL")}</p>
          <Link to={`/detalle-producto/${producto.codigo}`} className="btn btn-outline-primary">
            Ver Producto
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TarjetaProducto;