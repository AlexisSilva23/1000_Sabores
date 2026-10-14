import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import estilos from "./footer.module.css";
import { useAuth } from "../../context/authContext";

function Footer() {
  const { usuario } = useAuth();

  return (
    <footer className={estilos.footer}>

      <div className="container">

        <div className="row align-items-center">

          <div className="col-12 col-md-6 text-start mb-3 mb-md-0">

            <h5 className={estilos.titulo}>NUESTRAS REDES SOCIALES</h5>
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
              <Link to="/inicio-sesion" className="btn btn-outline-success">Iniciar Sesión</Link>
              <Link to="/registro-usuario" className="btn btn-outline-success">Registrarse</Link>
            </div>
            <hr/>
            <p>Si eres estudiante de DuocUC disfruta una torta gratis por tu cumpleaños!!!</p>
          </div>
        </div>

        {!usuario && (
          <div className="col-12 col-md-6">
            <div className={estilos.botonesFooter}>
              <Link to="/inicio-sesion" className="btn btn-outline-success">Iniciar Sesión</Link>
              <Link to="/registro-usuario" className="btn btn-outline-success">Registrarse</Link>
            </div>
          </div>
        )}

        <p className={estilos.copyright}>
          &copy; 2026 Mil Sabores. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;