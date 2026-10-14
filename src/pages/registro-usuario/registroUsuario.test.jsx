// @vitest-environment jsdom

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { BrowserRouter } from 'react-router-dom';
import RegistroUsuario from './registroUsuario.jsx'; 

describe('Componente RegistroUsuario', () => {
    it('renderiza la vista de RegistroUsuario sin errores', () => {
        render(
            <BrowserRouter>
                <RegistroUsuario />
            </BrowserRouter>
        );
        expect(document.body).toBeInTheDocument();
    });
});