import { useState } from "react";
import { listarPedidos, actualizarPedido } from "../../data/pedidos";
import estilos from "./pedidosAdmin.module.css";

const ESTADOS = ["Pendiente", "En Preparación", "Entregado", "Cancelado"];
const POR_PAGINA = 8;

function PedidosAdmin() {
  const [pedidos, setPedidos] = useState(listarPedidos);
  const [pagina, setPagina] = useState(1);

  const ordenados = [...pedidos].reverse(); 
  const totalPaginas = Math.max(1, Math.ceil(ordenados.length / POR_PAGINA));
  const visibles = ordenados.slice((pagina - 1) * POR_PAGINA, pagina * POR_PAGINA);

  const cambiarEstado = (numero, estadoEnvio) => {
    actualizarPedido(numero, { estadoEnvio });
    setPedidos(listarPedidos()); 
  };

  return (
    <div className="d-flex flex-column flex-fill bg-light">
      <div className={estilos.encabezado}>
        <h1 className="h3 mb-0">PEDIDOS</h1>
        <span className="h4 mb-0">🔔</span>
      </div>

      <div className="p-4">
        {pedidos.length === 0 ? (
          <p className="text-center">Aún no hay pedidos.</p>
        ) : (
          <div className={`table-responsive ${estilos.contenedorTabla}`}>
            <table className="table table-sm table-striped mb-0 text-center align-middle">
              <thead className="table-light">
                <tr>
                  <th>ID Pedido</th>
                  <th>Cód. Producto</th>
                  <th>Pastel / Producto</th>
                  <th>Cliente</th>
                  <th>Estado</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                {visibles.map((p) => (
                  <tr key={p.numero}>
                    <td>#{p.numero}</td>
                    <td>
                      {p.lineas.map((l) => <div key={l.codigo}><code>{l.codigo}</code></div>)}
                    </td>
                    <td>
                      {p.lineas.map((l) => <div key={l.codigo}>{l.nombre} x{l.cantidad}</div>)}
                    </td>
                    <td>{p.cliente.nombre} {p.cliente.apellidos}</td>
                    <td>
                      <select
                        className="form-select form-select-sm"
                        value={p.estadoEnvio ?? "Pendiente"}
                        onChange={(e) => cambiarEstado(p.numero, e.target.value)}
                      >
                        {ESTADOS.map((e) => <option key={e}>{e}</option>)}
                      </select>
                    </td>
                    <td>${p.total.toLocaleString("es-CL")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {totalPaginas > 1 && (
          <ul className="pagination pagination-sm justify-content-center mt-4">
            {Array.from({ length: totalPaginas }, (_, i) => (
              <li key={i} className={`page-item ${pagina === i + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => setPagina(i + 1)}>{i + 1}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PedidosAdmin;