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

  it('places the creator credit at the bottom of the footer', () => {
    render(<HomePage />);

    const footer = screen.getByRole('contentinfo');
    expect(footer.lastElementChild?.textContent).toBe('Website created by Chris Crellin.');
  });

  it('switches sections using click and arrow-key navigation', () => {
    render(<HomePage />);

    const overviewTab = screen.getByRole('tab', { name: 'Overview' });
    expect(overviewTab.getAttribute('aria-controls')).toBe(
      screen.getByRole('tabpanel').getAttribute('id'),
    );

    fireEvent.click(screen.getByRole('tab', { name: 'Our approach' }));

    expect(screen.getByRole('heading', { name: 'Recover. Demonstrate. Replicate.' })).toBeDefined();

    const approachTab = screen.getByRole('tab', { name: 'Our approach' });
    fireEvent.keyDown(approachTab, { key: 'ArrowRight' });
    const progressTab = screen.getByRole('tab', { name: 'Progress' });

    expect(progressTab.getAttribute('aria-selected')).toBe('true');
    expect(document.activeElement).toBe(progressTab);
    expect(
      screen.getByRole('heading', {
        name: 'See what is underway—and what is still planned.',
      }),
    ).toBeDefined();
    expect(
      screen.getByText(/The Thailand factory is part of this self-funded mission/),
    ).toBeDefined();

    fireEvent.keyDown(progressTab, { key: 'ArrowRight' });
    expect(screen.getByText(/We focus on practical measures, not promised outcomes/)).toBeDefined();
  });

  it('supports Home and End keyboard shortcuts in the tab list', () => {
    render(<HomePage />);

    const overviewTab = screen.getByRole('tab', { name: 'Overview' });
    fireEvent.keyDown(overviewTab, { key: 'End' });

    const dueDiligenceTab = screen.getByRole('tab', { name: 'Due diligence' });
    expect(dueDiligenceTab.getAttribute('aria-selected')).toBe('true');
    expect(document.activeElement).toBe(dueDiligenceTab);

    fireEvent.keyDown(dueDiligenceTab, { key: 'Home' });
    expect(overviewTab.getAttribute('aria-selected')).toBe('true');
    expect(document.activeElement).toBe(overviewTab);
  });

  it('reveals operational detail progressively within a tab', () => {
    render(<HomePage />);

    fireEvent.click(screen.getByRole('tab', { name: 'Our approach' }));
    fireEvent.click(screen.getByText('Community collection pilot'));

    expect(screen.getByText(/prioritizes fallen or discarded coconuts/)).toBeDefined();
    expect(
      screen.getByText(/published acceptance rules, weighing records, receipts/),
    ).toBeDefined();
  });

  it('shows the factory concept image with its illustrative status', () => {
    render(<HomePage />);

    fireEvent.click(screen.getByRole('tab', { name: 'Our approach' }));
    fireEvent.click(screen.getByText('Factory production concept'));

    expect(
      screen.getByRole('img', { name: /Illustrative layout of a small coconut-shell charcoal/ }),
    ).toBeDefined();
    expect(screen.getByText(/not a photograph of an operating facility/)).toBeDefined();
  });

  it('shows each founder in a separate photo profile', () => {
    render(<HomePage />);

    fireEvent.click(screen.getByText('Meet the founding team'));

    const captainPhoto = screen.getByRole('img', { name: /Captain Britt Reynolds/ });
    const skipperPhoto = screen.getByRole('img', { name: /Skipper Eric James Leitzke/ });

    expect(captainPhoto.closest('article')).not.toBe(skipperPhoto.closest('article'));
    expect(screen.getByRole('heading', { name: 'Captain Britt Reynolds' })).toBeDefined();
    expect(screen.getByRole('heading', { name: 'Skipper Eric James Leitzke' })).toBeDefined();
    expect(screen.getByText(/This is a self-funded mission/)).toBeDefined();
  });

  it('shows health and donation caveats with source links', () => {
    render(<HomePage />);

    fireEvent.click(screen.getByRole('tab', { name: 'Due diligence' }));
    fireEvent.click(screen.getByText('Public-health context and sources'));

    expect(screen.getByText(/not evidence of Coconut Earth Foundation outcomes/)).toBeDefined();
    expect(
      screen
        .getByRole('link', { name: /World Health Organization: Household air pollution/ })
        .getAttribute('href'),
    ).toBe('https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health');
    expect(
      screen.getByText(/Tax-exempt status and donation deductibility have not been confirmed/),
    ).toBeDefined();
  });
});
