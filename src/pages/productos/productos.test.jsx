// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test, vi } from "vitest";
import Productos from "./productos.jsx";
import '@testing-library/jest-dom/vitest';


vi.mock('../../context/productosContext', () => {
    return {
        useProductos: () => {
            return {
                productos: [
                    { codigo: 'P1', nombre: 'Torta de Chocolate', categoria: 'Tortas', precio: 15000, imagen: 'foto.jpg' }
                ]
            };
        }
    };
});

vi.mock('../../components/tarjeta-producto/tarjetaProducto', () => {
    return {
        default: () => <div>Tarjeta de producto simulada</div>
    };
});

test('Renderiza la vista de Productos correctamente', () => {
    render(
        <MemoryRouter>
            <Productos />
        </MemoryRouter>
    );

    const titulo = screen.getByText("Productos");
    expect(titulo).toBeDefined();

const elementosTodas = screen.getAllByText(/Todas/i);

expect(elementosTodas[0]).toBeInTheDocument();

    const botonTortas = screen.getByText("Tortas");
    expect(botonTortas).toBeDefined();

    const filtroPrecio = screen.getByText(/Precio máximo/i);
    expect(filtroPrecio).toBeDefined();
});