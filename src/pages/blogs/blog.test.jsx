// @vitest-environment jsdom

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Blog from './blog.jsx'; 

describe('Componente Blog', () => {
    it('renderiza la vista de Blog sin errores', () => {
        render(<Blog />);
        expect(document.body).toBeInTheDocument();
    });
});