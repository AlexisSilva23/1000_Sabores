// @vitest-environment jsdom
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import Contacto from "./contacto.jsx"; 

test('Probando el input de nombre en Contacto', () => {
    render(
        <MemoryRouter>
            <Contacto />
        </MemoryRouter>
    );

    const inputNombre = screen.getByLabelText(/Nombre/i);
    
    fireEvent.change(inputNombre, { target: { value: "Pedrito" } });
    
    expect(inputNombre.value).toBe("Pedrito");
});