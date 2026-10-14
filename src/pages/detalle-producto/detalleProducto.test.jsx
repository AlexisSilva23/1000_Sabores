// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { expect, test, vi } from "vitest";
import DetalleProducto from "./detalleProducto.jsx";


vi.mock('../../context/productosContext', () => {
    return {
        useProductos: () => {
            return {
                productos: [{ codigo: 'P1', nombre: 'Torta Tres Leches', precio: 15000, stock: 10, imagen: 'foto.jpg' }]
            };
        }
    };
});

vi.mock('../../context/cartContext', () => {
    return {
        useCart: () => {
            return {
                addItem: () => { return { ok: true }; }
            };
        }
    };
});

test('Renderiza la vista del detalle del producto', () => {
    render(
        <MemoryRouter initialEntries={["/producto/P1"]}>
            <Routes>
                <Route path="/producto/:codigo" element={<DetalleProducto />} />
            </Routes>
        </MemoryRouter>
    );

    const nombreProducto = screen.getByText("Torta Tres Leches");
    expect(nombreProducto).toBeDefined();

    const botonAnadir = screen.getByRole('button', { name: /Añadir al Carrito/i });
    expect(botonAnadir).toBeDefined();
});