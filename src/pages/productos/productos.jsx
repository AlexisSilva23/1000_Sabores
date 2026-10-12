import {productos } from "../../data/stockProductos";
import TarjetaProducto from "../../components/tarjeta-producto/tarjetaProducto";

function Productos() {
    const mostrarProductos = productos.slice(0, 16);

        return (
            <>
                
                <div className="container mt-5">
                    <h1 className="text-center mb-4">Nuestros Productos</h1>
                    <div className="row">
                        {mostrarProductos.map((producto) => (
                            <TarjetaProducto key={producto.codigo} producto={producto} />
                        ))}
                    </div>
                </div>

            </>
        )
    }
export default Productos;