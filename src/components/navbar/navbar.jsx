import { Link, NavLink } from "react-router-dom";
import "./navbar.module.css"
import estilos from "./navbar.module.css";

function Navbar() {
  const link = ({ isActive }) => "nav-link" + (isActive ? " active" : "");

  return (
    <header>
      <nav className="navbar navbar-expand-sm miClase">
        <div className="container-fluid">
            
          <Link className="navbar-brand" to="/">
            <img src="/img/logo.png" alt="Mil Sabores" className={estilos.logo} />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item"><NavLink className={link} to="/" end>Inicio</NavLink></li>
              <li className="nav-item"><NavLink className={link} to="/productos">Productos</NavLink></li>
              <li className="nav-item"><NavLink className={link} to="/nosotros">Nosotros</NavLink></li>
              <li className="nav-item"><NavLink className={link} to="/blogs">Blog</NavLink></li>
              <li className="nav-item"><NavLink className={link} to="/contacto">Contacto</NavLink></li>
              <li className="nav-item">
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;