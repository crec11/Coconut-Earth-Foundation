import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { HomePage } from '../HomePage';

afterEach(cleanup);

describe('HomePage', () => {
  it('renders the application heading', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { level: 1, name: 'CEF' })).toBeDefined();
  });
});
