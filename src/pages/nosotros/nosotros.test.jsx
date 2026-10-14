// @vitest-environment jsdom

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest'; // 
import Nosotros from './nosotros.jsx'; 

describe('Componente Nosotros', () => {
    it('renderiza la vista de Nosotros sin errores', () => {
        render(<Nosotros />);
        expect(document.body).toBeInTheDocument();
    });
});