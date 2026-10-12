import { useState, useEffect } from 'react';
import styles from './homeAdmin.module.css';
import Stock from '../Stock-admin/stock';

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

function HomeAdmin() {
  const [seccion, setSeccion] = useState('panel');

  useEffect(() => {
    document.title = 'Panel de ADMINISTRADOR';
    console.log('Panel de administración cargado correctamente.');
  }, []);

  return (
    <div className={`container-fluid min-vh-100 ${styles.marco_principal}`}>
      <div className="row min-vh-100">
        <div className={`col-md-3 col-lg-2 ${styles.linea_vertical_menu} bg-white p-3 d-flex flex-column justify-content-between`}>
          <div>
            <div className="h5 fw-bold">Mil Sabores</div>

            <hr className={styles.linea_menu} />
            <div className="nav flex-column nav-pills">
              <button
                type="button"
                className={`nav-link text-start ${seccion === 'panel' ? 'active' : 'text-dark'}`}
                onClick={() => setSeccion('panel')}
              >
                Panel
              </button>
              <button
                type="button"
                className={`nav-link text-start ${seccion === 'pedidos' ? 'active' : 'text-dark'}`}
                onClick={() => setSeccion('pedidos')}
              >
                Orden
              </button>
              <button
                type="button"
                className={`nav-link text-start ${seccion === 'stock' ? 'active' : 'text-dark'}`}
                onClick={() => setSeccion('stock')}
              >
                Inventario
              </button>
            </div>
          </div>

          <div>
            <hr className={styles.linea_menu} />
            <div className="nav flex-column nav-pills">
              <a className="nav-link text-dark py-1" href="#">Configuracion</a>
              <a className="nav-link text-dark py-1" href="#">Perfil</a>
              <a className="nav-link text-dark py-1" href="#">Search</a>
              <a className="nav-link text-dark py-1" href="#">Ayuda</a>
            </div>

            <hr className={styles.linea_menu} />

            <div className="fw-bold small text-dark ps-2">Perfil</div>
          </div>
        </div>

        <div className="col-md-9 col-lg-10 p-0 d-flex flex-column">

          {seccion === 'panel' && (
            <>
              <div className={`card border-0 rounded-0 flex-fill ${styles.linea_horizontal_panel} bg-transparent`}>
                <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center pt-4 px-4">
                  <h1 className="h3 fw-bold mb-0">¡HOLA ADMINISTRADOR!</h1>
                  <span className="h5 mb-0">🔔</span>
                </div>
                <div className="card-body"></div>
              </div>

              <div className="card border-0 rounded-0 flex-fill bg-transparent">
                <div className="card-body"></div>
              </div>
            </>
          )}

          {seccion === 'pedidos' && (
            <div className="d-flex flex-column flex-fill bg-light">
              <div className={`p-4 ${styles.linea_horizontal_panel} bg-white`}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <h1 className="h3 fw-bold mb-0 me-3">PEDIDOS</h1>
                    <button className="btn btn-dark btn-sm rounded-0 fw-bold">NUEVO PEDIDO</button>
                  </div>
                  <span className="h4 mb-0">🔔</span>
                </div>
              </div>

              <div className="p-4 flex-fill d-flex flex-column justify-content-between">
                <div>
                  <div className="mb-3">
                    <a href="#" className="text-dark fw-bold text-decoration-none dropdown-toggle small">
                      Todos los Pedidos
                    </a>
                  </div>

                  <div className="table-responsive border border-dark bg-white">
                    <table className="table table-sm table-striped mb-0 text-center align-middle">
                      <thead className="table-light border-bottom border-dark">
                        <tr>
                          <th scope="col" className="border-end border-dark py-2">ID Pedido ↕</th>
                          <th scope="col" className="border-end border-dark py-2">Cód. Producto ↕</th>
                          <th scope="col" className="border-end border-dark py-2">Pastel / Producto ↕</th>
                          <th scope="col" className="border-end border-dark py-2">Cliente ↕</th>
                          <th scope="col" className="border-end border-dark py-2">Estado ↕</th>
                          <th scope="col" className="py-2">Monto ↕</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pedidos.map((p) => (
                          <tr key={p.id}>
                            <td className="border-end border-dark">{p.id}</td>
                            <td className="border-end border-dark"><code>{p.codigo}</code></td>
                            <td className="border-end border-dark">{p.producto}</td>
                            <td className="border-end border-dark">{p.cliente}</td>
                            <td className="border-end border-dark">{p.estado}</td>
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
          )}

          {seccion === 'stock' && <Stock />}

        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;