// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test, vi } from "vitest";
import Checkout from "./checkout.jsx";

vi.mock('../../context/cartContext', () => {
    return {
        useCart: () => {
            return {
                items: [{ codigo: 'P1', cantidad: 1 }],
                totalPrecio: 15000,
                clearCart: () => { }
            };
        }
    };
});

vi.mock('../../context/authContext', () => {
    return {
        useAuth: () => {
            return {
                usuario: { nombre: 'Juan', apellidos: 'Pérez', email: 'juan@test.com' }
            };
        }
    };
});

vi.mock('../../context/productosContext', () => {
    return {
        useProductos: () => {
            return {
                productos: [{ codigo: 'P1', nombre: 'Torta Tres Leches', precio: 15000 }],
                descontarStock: () => { }
            };
        }
    };
});

vi.mock('../../data/regiones', () => {
    return {
        regiones: [{ nombre: 'Metropolitana', comunas: ['Santiago'] }]
    };
});

vi.mock('../../data/pedidos', () => {
    return {
        crearPedido: () => {
            return { numero: 123 };
        }
    };
});

test('Renderiza la vista de Checkout correctamente', () => {
    render(
        <MemoryRouter>
            <Checkout />
        </MemoryRouter>
    );

    const titulo = screen.getByText("Checkout");
    expect(titulo).toBeDefined();

    const botonPagar = screen.getByRole('button', { name: /Pagar ahora/i });
    expect(botonPagar).toBeDefined();
});