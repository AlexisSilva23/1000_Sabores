import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { productos } from "../../data/stockProductos";
import TarjetaProducto from "../../components/tarjeta-producto/tarjetaProducto";
import estilos from "./inicio.module.css";

const secciones = [
  {
    titulo: "Curiosidades de la pastelería #1",
    texto:
      "Descubra cómo participamos en el Récord Guinness en 1995 por la torta más grande del mundo, lo que posicionó nuestra pastelería entre las mejores del mundo.",
    ruta: "/blogs",
    boton: "Ir a blogs",
  },
  {
    titulo: "Curiosidades de la pastelería #2",
    texto:
      "Conozca el origen de nuestra reconocida torta de chocolate y por qué nuestros clientes siguen eligiéndola a pesar de llevar 50 años en el menú.",
    ruta: "/blogs",
    boton: "Ir a blogs",
  },
  {
    titulo: "Sobre nosotros",
    texto:
      "Llevamos 50 años en este rubro. Han habido muchos cambios, pero nuestra identidad sigue intacta: cada producto se hace con especial atención para nuestros consumidores, lo que nos distingue de la competencia y nos llevó a ser reconocidos mundialmente.",
    ruta: "/nosotros",
    boton: "Conoce más sobre nosotros",
  },
];


function Inicio() {
  const mostrarProductos = productos.slice(0, 4);

  return (
    <main className="container py-4">
      <div className="card mb-5">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6">
            <img
              src="/img/img_pasteleria.png"
              className={`img-fluid ${estilos.imagenPortada}`}
              alt="Pastelería Mil Sabores"
            />
          </div>

          <div className="col-lg-6">
            <div className="card-body">
              <h5 className="card-title">Bienvenido a Mil Sabores</h5>
              <p className="card-text">
                Descubre una amplia variedad de productos de alta calidad y sabores únicos.
                Nuestra tienda online posee una extensa variedad de productos que seguramente serán de su agrado.
              </p>
              <div className={estilos.botones}>
                <Link to="/productos" className="btn btn-outline-success">Ver Productos</Link>
                <Link to="/contacto" className="btn btn-outline-success">¡Contáctanos!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className={estilos.tituloSeccion}>Productos destacados</h2>
      <div className="row mb-5">
        {mostrarProductos.map((producto) => (
          <TarjetaProducto key={producto.codigo} producto={producto} />
        ))}
      </div>

      <div className="row">
        {secciones.map((s) => (
          <div key={s.titulo} className="col-md-4 mb-4">
            <Card className={estilos.tarjetaInfo}>
              <Card.Body className={estilos.cuerpoInfo}>
                <Card.Title>{s.titulo}</Card.Title>
                <Card.Text>{s.texto}</Card.Text>
                <Link to={s.ruta} className="btn btn-outline-success mt-auto">
                  {s.boton}
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Inicio;