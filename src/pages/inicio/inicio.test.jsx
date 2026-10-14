// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test, vi } from "vitest";
import Inicio from "./inicio.jsx";

vi.mock('../../context/productosContext', () => {
    return {
        useProductos: () => {
            return {
                productos: [{ codigo: 'P1', nombre: 'Torta', precio: 15000, imagen: 'foto.jpg' }]
            };
        }
    };
});

vi.mock('../../components/tarjeta-producto/tarjetaProducto', () => {
    return {
        default: () => <div>Tarjeta de producto simulada</div>
    };
});

test('Renderiza la vista de Inicio correctamente', () => {
    render(
        <MemoryRouter>
            <Inicio />
        </MemoryRouter>
    );

    const tituloBienvenida = screen.getByText("Bienvenido a Mil Sabores");
    expect(tituloBienvenida).toBeDefined();

    const tituloNosotros = screen.getByText("Sobre nosotros");
    expect(tituloNosotros).toBeDefined();

    const botonProductos = screen.getByRole('link', { name: /Ver Productos/i });
    expect(botonProductos).toBeDefined();
});