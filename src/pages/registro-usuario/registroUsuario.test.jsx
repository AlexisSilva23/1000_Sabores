// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import RegistroUsuario from "./registroUsuario.jsx"
import { expect, test, vi } from "vitest"

vi.mock('../../context/authContext', () => {
    return {
        useAuth: () => {
            return { usuario: null, logout: () => { } };
        }
    };
});

test('Probando el input de nombre en Registro', () => {
    render(
        <MemoryRouter>
            <RegistroUsuario />
        </MemoryRouter>
    )

    const inputNombre = screen.getByPlaceholderText("Ej: Pedro Antonio");

    fireEvent.change(inputNombre, { target: { value: "Felipe" } });

    expect(inputNombre.value).toBe("Felipe");
})