import { createContext, useContext, useEffect, useState } from "react";
import { useProductos } from "./productosContext";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  
  const { productos } = useProductos();

  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem("carrito")) || []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(items));
  }, [items]);

  const addItem = (codigo, cantidad = 1) => {
    const producto = productos.find((p) => p.codigo === codigo);
    if (!producto) return { ok: false, error: "Producto no encontrado" };

    const enCarrito = items.find((i) => i.codigo === codigo)?.cantidad || 0;
    if (enCarrito + cantidad > producto.stock) {
      return { ok: false, error: `Solo quedan ${producto.stock - enCarrito} unidades disponibles` };
    }

    setItems((prev) =>
      prev.some((i) => i.codigo === codigo)
        ? prev.map((i) => (i.codigo === codigo ? { ...i, cantidad: i.cantidad + cantidad } : i))
        : [...prev, { codigo, cantidad }]
    );
    return { ok: true };
  };

  const updateQty = (codigo, cantidad) => {
    const producto = productos.find((p) => p.codigo === codigo);
    if (cantidad > producto.stock) {
      return { ok: false, error: `Solo tenemos ${producto.stock} unidades disponibles` };
    }
    setItems((prev) =>
      cantidad < 1
        ? prev.filter((i) => i.codigo !== codigo)
        : prev.map((i) => (i.codigo === codigo ? { ...i, cantidad } : i))
    );
    return { ok: true };
  };

  const removeItem = (codigo) => setItems((prev) => prev.filter((i) => i.codigo !== codigo));
  const clearCart = () => setItems([]);

  const totalItems = items.reduce((s, i) => s + i.cantidad, 0);
  const totalPrecio = items.reduce((s, i) => {
    const p = productos.find((x) => x.codigo === i.codigo);
    return s + (p ? p.precio * i.cantidad : 0);
  }, 0);

  return (
    <CartContext.Provider value={{ items, addItem, updateQty, removeItem, clearCart, totalItems, totalPrecio }}>
      {children}
    </CartContext.Provider>
  );
}
