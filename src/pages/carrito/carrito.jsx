import { useState } from "react";
import { Link } from "react-router-dom";
import { Cart3, CartX, ArrowLeft, ListUl, Receipt, Trash, CreditCard, X } from "react-bootstrap-icons";
import { useProductos } from "../../context/productosContext";
import Alerta from "../../components/alert/alert";
import { useCart } from "../../context/cartContext";

function Carrito() {
  const { productos } = useProductos();
  const { items, updateQty, removeItem, clearCart, totalItems, totalPrecio } = useCart();
  const [mensaje, setMensaje] = useState(null);

  const lineas = items.map((item) => ({
    ...productos.find((p) => p.codigo === item.codigo),
    cantidad: item.cantidad,
  }));

  const cambiarCantidad = (codigo, nuevaCantidad) => {
    const r = updateQty(codigo, nuevaCantidad);
    if (!r.ok) setMensaje({ texto: r.error, tipo: "danger" });
  };

  const vaciar = () => {
    if (window.confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
      clearCart();
      setMensaje({ texto: "Carrito vaciado correctamente", tipo: "info" });
    }
  };


  return (
    <main className="container my-5">
      <h1 className="display-4 text-chocolate"><Cart3 /> Carrito de Compras</h1>
      <hr />

      <Alerta mensaje={mensaje?.texto} tipo={mensaje?.tipo} onCerrar={() => setMensaje(null)} />

      {lineas.length === 0 ? (
        <div className="text-center py-5">
          <CartX size={64} className="text-muted" />
          <h3 className="mt-3 text-chocolate">Tu carrito está vacío</h3>
          <p className="text-secondary">¡Explora nuestros productos y añade tus favoritos!</p>
          <Link to="/productos" className="btn btn-chocolate mt-3"><ArrowLeft /> Ver Productos</Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-chocolate"><ListUl /> Productos seleccionados</h5>

                {lineas.map((p) => (
                  <div key={p.codigo} className="row align-items-center py-3 border-bottom">
                    <div className="col-3 col-md-2">
                      <img src={p.imagen} alt={p.nombre} className="img-fluid rounded" />
                    </div>
                    <div className="col-9 col-md-4">
                      <h6 className="mb-1">{p.nombre}</h6>
                      <small className="text-muted">{p.categoria}</small>
                    </div>
                    <div className="col-4 col-md-2 text-center">
                      ${p.precio.toLocaleString("es-CL")}
                    </div>
                    <div className="col-4 col-md-2 d-flex align-items-center justify-content-center gap-2">
                      <button className="btn btn-sm btn-outline-secondary"
                        onClick={() => cambiarCantidad(p.codigo, p.cantidad - 1)}>−</button>
                      <span>{p.cantidad}</span>
                      <button className="btn btn-sm btn-outline-secondary"
                        onClick={() => cambiarCantidad(p.codigo, p.cantidad + 1)}>+</button>
                    </div>
                    <div className="col-4 col-md-2 text-end">
                      ${(p.precio * p.cantidad).toLocaleString("es-CL")}
                      <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => removeItem(p.codigo)}>
                        <X />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-chocolate"><Receipt /> Resumen de Compra</h5>
                <hr />
                <div className="d-flex justify-content-between">
                  <span>Productos ({totalItems})</span>
                  <span>${totalPrecio.toLocaleString("es-CL")}</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span>Envío</span>
                  <span className="text-success">Gratis</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fs-5">
                  <span>Total</span>
                  <strong>${totalPrecio.toLocaleString("es-CL")}</strong>
                </div>
                <hr />
                <div className="d-grid gap-2">
                  <button className="btn btn-outline-danger" onClick={vaciar}><Trash /> Vaciar Carrito</button>
                  <Link to="/checkout" className="btn btn-chocolate">
                    <CreditCard /> Finalizar compra
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Carrito;