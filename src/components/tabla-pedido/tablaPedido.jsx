import estilos from "./tablaPedido.module.css";

function TablaPedido({ lineas, total, etiquetaTotal = "Total" }) {
  return (
    <>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {lineas.map((l) => (
              <tr key={l.codigo}>
                <td><img src={l.imagen} alt={l.nombre} className={estilos.miniatura} /></td>
                <td>{l.nombre}</td>
                <td>${l.precio.toLocaleString("es-CL")}</td>
                <td>{l.cantidad}</td>
                <td>${(l.precio * l.cantidad).toLocaleString("es-CL")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={estilos.total}>
        {etiquetaTotal}: ${total.toLocaleString("es-CL")}
      </div>
    </>
  );
}

export default TablaPedido;