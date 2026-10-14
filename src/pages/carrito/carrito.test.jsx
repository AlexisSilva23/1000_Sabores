// @vitest-environment jsdom
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test, vi } from "vitest";
import Carrito from "./carrito.jsx";

vi.mock('../../context/productosContext', () => ({
    useProductos: () => ({
        productos: [{ codigo: 'P1', nombre: 'Torta Tres Leches', categoria: 'Tortas', precio: 15000, imagen: 'foto.jpg' }]
    })
}));

vi.mock('../../context/cartContext', () => ({
    useCart: () => ({
        items: [{ codigo: 'P1', cantidad: 1 }],
        updateQty: () => ({ ok: true }),
        removeItem: () => { },
        clearCart: () => { },
        totalItems: 1,
        totalPrecio: 15000
    })
}));

test('Probando interacción con un pedido del carrito', () => {
    render(
        <MemoryRouter>
            <Carrito />
        </MemoryRouter>
    );

    const nombreProducto = screen.getByText("Torta Tres Leches");
    expect(nombreProducto).toBeDefined();

    const botonSumar = screen.getByText("+");
    fireEvent.click(botonSumar);

    const precios = screen.getAllByText("$15.000");
    expect(precios[0]).toBeDefined();
});