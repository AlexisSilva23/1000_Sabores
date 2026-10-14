import { useState, useEffect } from 'react';
import styles from './homeAdmin.module.css';
import Stock from '../Stock-admin/stock';
import PedidosAdmin from '../pedidos-admin/pedidosAdmin';

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

          {seccion === 'pedidos' && <PedidosAdmin />}

          {seccion === 'stock' && <Stock />}

        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;