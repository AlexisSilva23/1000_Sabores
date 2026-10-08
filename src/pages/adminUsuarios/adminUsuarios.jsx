import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './adminUsuarios.css';

const pedidos = [
  { id: '#PED-1001', codigo: 'TC001', producto: 'Torta Cuadrada de Chocolate', cliente: 'María González', estado: 'Entregado', monto: '$45.000' },
  { id: '#PED-1002', codigo: 'TT002', producto: 'Torta Circular de Manjar', cliente: 'Carlos Pérez', estado: 'Pendiente', monto: '$42.000' },
  { id: '#PED-1003', codigo: 'PI001', producto: 'Mousse de Chocolate', cliente: 'Andrea Silva', estado: 'Cancelado', monto: '$5.000' },
  { id: '#PED-1004', codigo: 'PSA001', producto: 'Torta sin azúcar de Naranja', cliente: 'Juan Morales', estado: 'En Preparación', monto: '$48.000' },
  { id: '#PED-1005', codigo: 'TC002', producto: 'Torta Cuadrada de Frutas', cliente: 'Camila Tapia', estado: 'Entregado', monto: '$50.000' },
  { id: '#PED-1006', codigo: 'TT001', producto: 'Torta Circular de Vainilla', cliente: 'Roberto Arenas', estado: 'Pendiente', monto: '$40.000' },
  { id: '#PED-1007', codigo: 'PI002', producto: 'Tiramisu Clasico', cliente: 'Valentina Castro', estado: 'En Preparación', monto: '$5.500' },
  { id: '#PED-1008', codigo: 'PT001', producto: 'Empanada de Manzana', cliente: 'Diego Rojas', estado: 'Entregado', monto: '$3.000' },
];

function AdminUsuarios() {
  useEffect(() => {
    document.title = 'Panel de ADMINISTRADOR';
  }, []);

  return (
    <div className="container-fluid min-vh-100 marco_principal p-0">
      <div className="row no-gutters min-vh-100">

        <div className="col-md-3 col-lg-2 linea_vertical_menu bg-white p-3 d-flex flex-column justify-content-between">
          <div>
            <div className="h5 font-weight-bold mb-0">Mil Sabores</div>
            <hr className="linea-menu" />
            <div className="nav flex-column nav-pills">
              <Link className="nav-link text-dark" to="/admin">Panel</Link>
              <Link className="nav-link active" to="/admin/usuarios">Pedidos</Link>
              <Link className="nav-link text-dark" to="/admin/inventario">Inventario</Link>
            </div>
          </div>

          <div>
            <hr className="linea-menu" />
            <div className="nav flex-column nav-pills">
              <a className="nav-link text-dark py-1" href="#">Configuración</a>
              <a className="nav-link text-dark py-1" href="#">Perfil</a>
              <a className="nav-link text-dark py-1" href="#">Search</a>
              <a className="nav-link text-dark py-1" href="#">Ayuda</a>
            </div>
            <hr className="linea-menu" />
            <div className="font-weight-bold small text-dark pl-2">Perfil</div>
          </div>
        </div>

        <div className="col-md-9 col-lg-10 d-flex flex-column p-0 bg-light">

          <div className="p-4 llinea_horizontal_panel bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h1 className="h3 font-weight-bold mb-0 mr-3">PEDIDOS</h1>
                <button className="btn btn-dark btn-sm rounded-0 font-weight-bold">NUEVO PEDIDO</button>
              </div>
              <span className="h4 mb-0">🔔</span>
            </div>
          </div>

          <div className="p-4 flex-fill d-flex flex-column justify-content-between">
            <div>
              <div className="mb-3">
                <a href="#" className="text-dark font-weight-bold text-decoration-none dropdown-toggle small">
                  Todos los Pedidos
                </a>
              </div>

              <div className="table-responsive border border-dark bg-white">
                <table className="table table-sm table-striped mb-0 text-center align-middle">
                  <thead className="thead-light border-bottom border-dark">
                    <tr>
                      <th scope="col" className="border-right border-dark py-2">ID Pedido ↕</th>
                      <th scope="col" className="border-right border-dark py-2">Cód. Producto ↕</th>
                      <th scope="col" className="border-right border-dark py-2">Pastel / Producto ↕</th>
                      <th scope="col" className="border-right border-dark py-2">Cliente ↕</th>
                      <th scope="col" className="border-right border-dark py-2">Estado ↕</th>
                      <th scope="col" className="py-2">Monto ↕</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pedidos.map((p) => (
                      <tr key={p.id}>
                        <td className="border-right border-dark">{p.id}</td>
                        <td className="border-right border-dark"><code>{p.codigo}</code></td>
                        <td className="border-right border-dark">{p.producto}</td>
                        <td className="border-right border-dark">{p.cliente}</td>
                        <td className="border-right border-dark">{p.estado}</td>
                        <td>{p.monto}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <nav className="mt-4">
              <ul className="pagination pagination-sm justify-content-center mb-0">
                <li className="page-item"><a className="page-link text-dark border-dark rounded-0" href="#">«</a></li>
                <li className="page-item"><a className="page-link text-dark border-dark rounded-0" href="#">‹</a></li>
                <li className="page-item active"><a className="page-link bg-primary text-white border-dark rounded-0" href="#">1</a></li>
                <li className="page-item"><a className="page-link text-dark border-dark rounded-0" href="#">2</a></li>
                <li className="page-item"><a className="page-link text-dark border-dark rounded-0" href="#">3</a></li>
                <li className="page-item"><a className="page-link text-dark border-dark rounded-0" href="#">›</a></li>
                <li className="page-item"><a className="page-link text-dark border-dark rounded-0" href="#">»</a></li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminUsuarios;