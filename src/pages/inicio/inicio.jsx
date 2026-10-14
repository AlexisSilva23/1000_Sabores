import { Link } from "react-router-dom";
import { productos } from "../../data/stockProductos";
import TarjetaProducto from "../../components/tarjeta-producto/tarjetaProducto";
import { Card } from "react-bootstrap";

function Inicio() {
  const mostrarProductos = productos.slice(0, 4)

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="card mb-3 w-100">
            <div className="row g-0 d-flex align-items-center justify-content-center">

              <div className="col-lg-6">
                <img src="../img/img_pasteleria.png" className="img-fluid rounded-start" alt="..." />
              </div>

              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <div className="card-body">
                  <h5 className="card-title">Bienvenido a Mil Sabores</h5>
                  <p className="card-text">
                    Descubre una amplia variedad de productos de alta calidad y sabores únicos.
                    Nuestra Tienda Online posee una extensa variedad de productos que seguramente seran de su agrado.
                  </p>
                  <Link to="/productos" className="btn btn-outline-primary">Ver Productos</Link>
                  <Link to="/contacto" className="btn btn-outline-primary">Contactanos!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {mostrarProductos.map((producto) => (
            <TarjetaProducto key={producto.codigo} producto={producto} />
          ))}
        </div>
      </div>

      <Card>
      <Card.Body>
        <Card.Title>Curiosidades de la pasteleria #1</Card.Title>
        <Card.Text>
          Descubra como participamos en el Record Guinness en 1995 por la torta mas grande
          del mundo, lo que posiciono nuestra pasteleria entre las mejores del mundo!
        </Card.Text>
        <Link to="/blogs" className="btn btn-outline-primary">Ir a blogs</Link>
      </Card.Body>
      </Card>

      <Card>
      <Card.Body>
        <Card.Title>Curiosidades de la pasteleria #2</Card.Title>
        <Card.Text>
          Conozca el origen de nuestra reconocida torta de chocolate y porque nuestros clientes
          siguen eligiendola a pesar de llevar 50 años en el menu!
        </Card.Text>
        <Link to="/blogs" className="btn btn-outline-primary">Ir a blogs</Link>
      </Card.Body>
      </Card>
      
      <Card>
      <Card.Body>
        <Card.Title>Sobre nosotros</Card.Title>
        <Card.Text>
          Llevamos 50 años en este rubro, en el que han habido muchos cambios, pero nuestra
          identidad sigue intacta, pues cada producto es hecho con especial atencion
          para nuestros consumidores, algo que caracteriza a "Mil Sabores" por sobre
          la competencia, y lo que nos llevo a ser reconocidos mundialmente!
        </Card.Text>
        <Link to="/nosotros" className="btn btn-outline-primary">Conoce mas sobre nosotros!</Link>
      </Card.Body>
      </Card>


      
    </>
  );
}

export default Inicio;