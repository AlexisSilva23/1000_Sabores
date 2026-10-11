import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productos } from "../../data/stockProductos";
import { useCart } from "../../context/cartContext";
import { ArrowLeft, Cart3, CartPlus } from "react-bootstrap-icons";
import Alerta from "../../components/alert/alert";


function DetalleProducto() {
    const { codigo } = useParams();
    const { addItem } = useCart();
    const [cantidad, setCantidad] = useState(1);
    const [mensaje, setMensaje] = useState(null);
    const producto = productos.find((p) => p.codigo === codigo);

    if (!producto) {
        return (
            <div className="container text-center mt-5">
                <div className="alert alert-danger" role="alert">
                    <h4>Producto no encontrado</h4>
                    <p>El producto con el código {codigo} no existe.</p>
                </div>
            </div>
        );
    }

    const agotado = producto.stock === 0;
    const agregar = () => {
        const resultado = addItem(producto.codigo, cantidad);
        if (resultado.ok) {
            setMensaje({ texto: `${cantidad} x "${producto.nombre}" añadido al carrito`, tipo: "success" });
        } else {
            setMensaje({ texto: resultado.error, tipo: "danger" });
        }
    };

    const cambiarCantidad = (e) => {
        const valor = parseInt(e.target.value);
        if (valor >= 1 && valor <= producto.stock) {
            setCantidad(valor);
        }
    };

    return (
        <main className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
                </div>

                <div className="col-md-6">
                    <h1>{producto.nombre}</h1>

                    <div className="my-4">
                        <span className="display-6">
                            ${producto.precio.toLocaleString("es-CL")}
                        </span>
                    </div>

                    <div className="mb-4">
                        <h5>Descripcion</h5>
                        <p>{producto.descripcion}</p>
                    </div>

                    <div className="mb-4 d-flex align-items-center gap-3">
                        <span className="fw-bold">Stock disponible:</span>
                        <span className={`badge ${agotado ? "bg-danger" : "bg-success"}`}>
                            {agotado ? "Agotado" : `${producto.stock} unidades`}
                        </span>
                    </div>

                    <div className="d-flex gap-3 align-items-center">
                        <input
                            type="number"
                            className="form-control text-center"
                            style={{ width: "150px" }}
                            value={cantidad}
                            min="1"
                            max={producto.stock}
                            disabled={agotado}
                            onChange={cambiarCantidad}
                        />
                        <button
                            className="btn btn-chocolate btn-lg flex-grow-1"
                            disabled={agotado}
                            onClick={agregar}
                        >
                            <CartPlus /> {agotado ? "Agotado" : "Añadir al Carrito"}
                        </button>
                    </div>

                    <Alerta mensaje={mensaje?.texto} tipo={mensaje?.tipo} onCerrar={() => setMensaje(null)} />

                    <hr className="my-4" />

                    <div className="d-flex gap-3">
                        <Link to="/productos" className="btn btn-online-primary">
                            <ArrowLeft />Volver a Productos
                        </Link>
                        <Link to="/carrito" className="btn btn-online-primary">
                            <Cart3 />Ver Carrito
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
export default DetalleProducto;