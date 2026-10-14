import { Link, NavLink } from "react-router-dom";
import estilos from "./navbar.module.css";
import { useAuth } from "../../context/authContext";

function Navbar() {
  const link = ({ isActive }) => `nav-link ${estilos.enlace} ${isActive ? estilos.activo : ""}`;
  const { usuario, logout } = useAuth();

  return (
    <header>
      <nav className={`navbar navbar-expand-sm ${estilos.navbar}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/img/logo.png" alt="Mil Sabores" className={estilos.logo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item"><NavLink className={link} to="/">Inicio</NavLink></li>
              <li className="nav-item"><NavLink className={link} to="/productos">Productos</NavLink></li>
              <li className="nav-item"><NavLink className={link} to="/nosotros">Nosotros</NavLink></li>
              <li className="nav-item"><NavLink className={link} to="/blogs">Blog</NavLink></li>
              <li className="nav-itel"><NavLink className={link} to="/contacto">Contacto</NavLink></li>
              <li className="nav-itel"><NavLink className={link} to="/carrito">Carrito</NavLink></li>
            </ul>
          </div>

          {usuario ? (
            <>
              <li className="nav-item"><span className="nav-link">Hola, {usuario.nombre}</span></li>
              <li className="nav-item">
                <button className={`btn nav-link ${estilos.enlace}`} onClick={logout}>Cerrar sesión</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item"><NavLink className={link} to="/inicio-sesion">Iniciar Sesión</NavLink></li>
              <li className="nav-item"><NavLink className={link} to="/registro-usuario">Registrarse</NavLink></li>
            </>
          )}

        </div>
      </nav>
    </header>
  );
}

export default Navbar;

/*


*/