import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { HomePage } from '../HomePage';

afterEach(cleanup);

describe('HomePage', () => {
  it('renders the mission and starts on the overview tab', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Protect forests. Share what works.' }),
    ).toBeDefined();
    expect(screen.getByRole('tab', { name: 'Overview' }).getAttribute('aria-selected')).toBe(
      'true',
    );
    expect(screen.getByText(/Reduce pressure on forests/)).toBeDefined();
  });

  it('switches sections using click and arrow-key navigation', () => {
    render(<HomePage />);

    fireEvent.click(screen.getByRole('tab', { name: 'Our approach' }));

    expect(screen.getByRole('heading', { name: 'Recover. Demonstrate. Replicate.' })).toBeDefined();

    const approachTab = screen.getByRole('tab', { name: 'Our approach' });
    fireEvent.keyDown(approachTab, { key: 'ArrowRight' });
    const progressTab = screen.getByRole('tab', { name: 'Progress' });

    expect(progressTab.getAttribute('aria-selected')).toBe('true');
    expect(document.activeElement).toBe(progressTab);
    expect(
      screen.getByRole('heading', { name: 'Founder-funded action is in motion.' }),
    ).toBeDefined();
  });
});
