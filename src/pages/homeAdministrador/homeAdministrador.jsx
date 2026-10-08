import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homeAdministrador.css';

function HomeAdministrador() {
  useEffect(() => {
    document.title = 'Panel de ADMINISTRADOR';
    console.log('Panel de administración cargado correctamente.');
  }, []);

  return (
    <div className="container-fluid min-vh-100 marco_principal">
      <div className="row min-vh-100">
        <div className="col-md-3 col-lg-2 linea-vertical-menu bg-white p-3 d-flex flex-column justify-content-between">
          <div>
            <div className="h5 font-weight-bold">Mil Sabores</div>

            <hr className="linea-menu" />
            <div className="nav flex-column nav-pills">
              <Link className="nav-link active" to="/admin">Panel</Link>
              <Link className="nav-link text-dark" to="/admin/usuarios">Orden</Link>
              <Link className="nav-link text-dark" to="/admin/inventario">Inventario</Link>
            </div>
          </div>

          <div>
            <hr className="linea-menu" />
            <div className="nav flex-column nav-pills">
              <a className="nav-link text-dark py-1" href="#">Configuracion</a>
              <a className="nav-link text-dark py-1" href="#">Perfil</a>
              <a className="nav-link text-dark py-1" href="#">Search</a>
              <a className="nav-link text-dark py-1" href="#">Ayuda</a>
            </div>

            <hr className="linea-menu" />

            <div className="font-weight-bold small text-dark pl-2">Perfil</div>
          </div>
        </div>

        <div className="col-md-9 col-lg-10 p-0 d-flex flex-column">
          <div className="card border-0 rounded-0 flex-fill linea-horizontal-panel bg-transparent">
            <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center pt-4 px-4">
              <h1 className="h3 font-weight-bold mb-0">¡HOLA ADMINISTRADOR!</h1>
              <span className="h5 mb-0">🔔</span>
            </div>
            <div className="card-body"></div>
          </div>

          <div className="card border-0 rounded-0 flex-fill bg-transparent">
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdministrador;