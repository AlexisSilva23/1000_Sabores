// @vitest-environment jsdom

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Contacto from './contacto.jsx'; 

describe('Componente Contacto', () => {
    it('renderiza la vista de Contacto sin errores', () => {
        render(<Contacto />);
        expect(document.body).toBeInTheDocument();
    });
});