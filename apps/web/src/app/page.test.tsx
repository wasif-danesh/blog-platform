import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page';

it('renders Blog header', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /blog/i })).toBeInTheDocument();
});
