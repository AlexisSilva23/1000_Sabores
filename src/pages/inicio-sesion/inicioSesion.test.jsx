// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test, vi } from "vitest";
import InicioSesion from "./inicioSesion.jsx";

vi.mock('../../components/navbar/navbar', () => {
    return {
        default: () => <div>Navbar Simulado</div>
    };
});

test('Renderiza la vista de Inicio de Sesion correctamente', () => {
    render(
        <MemoryRouter>
            <InicioSesion />
        </MemoryRouter>
    );

    const titulo = screen.getByText("PASTELERIA MIL SABORES");
    expect(titulo).toBeDefined();
    const botonLogin = screen.getByRole('button', { name: /INICIAR SESION/i });
    expect(botonLogin).toBeDefined();
});