// @vitest-environment jsdom

import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Nosotros from "./nosotros.jsx"
import { expect, test, vi } from "vitest"

vi.mock('../../context/authContext', () => ({
    useAuth: () => ({ usuario: null, logout: () => {} })
}));

test('Renderiza el título principal de la vista Nosotros', () => {
    render(
        <MemoryRouter>
            <Nosotros />
        </MemoryRouter>
    )
    
    const tituloPrincipal = screen.getByText(/Nuestra Historia/i);
    
    expect(tituloPrincipal).toBeDefined();
})