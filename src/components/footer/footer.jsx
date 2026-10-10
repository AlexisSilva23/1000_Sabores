import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import estilos from "./footer.module.css";

function Footer() {
  return (
    <footer className="bg-secondary text-light py-4">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-12 col-md-6 text-start mb-3 mb-md-0">

            <h5 className="mb-3">NUESTRAS REDES SOCIALES</h5>
            <div className={estilos.redesSociales}>
              <a href="#" target="_blank" rel="noopener noreferrer" title="Facebook">
                <Icon.Facebook size={28} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" title="Instagram">
                <Icon.Instagram size={28} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" title="TikTok">
                <Icon.Tiktok size={28} />
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6 text-md-end">
            <h5 className="mb-3">¿ERES NUEVO?</h5>
            <p>Únete y disfruta de las mejores ofertas</p>
            <div className={estilos.botonesFooter}>
              <Link to="/inicio-sesion" className="btn btn-outline-light">Iniciar Sesión</Link>
              <Link to="/registro-usuario" className="btn btn-outline-light">Registrarse</Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2026 Mil Sabores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;