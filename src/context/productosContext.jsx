import { createContext, useContext, useEffect, useState } from "react";
import { productos as iniciales } from "../data/stockProductos";

const ProductosContext = createContext();
export const useProductos = () => useContext(ProductosContext);

const clave = "productos";

const cargar = () => {
  try {
    const guardados = JSON.parse(localStorage.getItem(clave));
    if (Array.isArray(guardados) && guardados.length) return guardados;
  } catch { }
  return iniciales.map((p) => ({ ...p, limite: p.limite ?? Math.max(p.stock, 20) }));
};

export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState(cargar);

  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(productos));
  }, [productos]);

  const crearProducto = (producto) => {
    if (productos.some((p) => p.codigo === producto.codigo)) {
      return { ok: false, error: "Ya existe un producto con ese código" };
    }
    setProductos((prev) => [...prev, producto]);
    return { ok: true };
  };

  const editarProducto = (codigo, cambios) =>
    setProductos((prev) => prev.map((p) => (p.codigo === codigo ? { ...p, ...cambios } : p)));

  const eliminarProducto = (codigo) =>
    setProductos((prev) => prev.filter((p) => p.codigo !== codigo));

  const descontarStock = (lineas) =>
    setProductos((prev) =>
      prev.map((p) => {
        const linea = lineas.find((l) => l.codigo === p.codigo);
        return linea ? { ...p, stock: Math.max(0, p.stock - linea.cantidad) } : p;
      })
    );

  return (
    <ProductosContext.Provider
      value={{ productos, crearProducto, editarProducto, eliminarProducto, descontarStock }}
    >
      {children}
    </ProductosContext.Provider>
  );
}