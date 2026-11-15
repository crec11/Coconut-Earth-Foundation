import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { HomePage } from '../HomePage';

afterEach(cleanup);

describe('HomePage', () => {
  it('renders the mission and starts on the overview tab', () => {
    render(<HomePage />);

    const heroHeading = screen.getByRole('heading', {
      level: 1,
      name: /Protect forests\. ?Share what works\./,
    });
    expect(heroHeading.querySelector('br')).not.toBeNull();
    expect(screen.getByRole('tab', { name: 'Overview' }).getAttribute('aria-selected')).toBe(
      'true',
    );
    expect(screen.getByText(/reduce pressure on forests/i)).toBeDefined();
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

    expect(
      screen.getByRole('heading', {
        name: 'The proposed model has three stages, with expansion based on results.',
      }),
    ).toBeDefined();

    const approachTab = screen.getByRole('tab', { name: 'Our approach' });
    fireEvent.keyDown(approachTab, { key: 'ArrowRight' });
    const progressTab = screen.getByRole('tab', { name: 'Progress' });

    expect(progressTab.getAttribute('aria-selected')).toBe('true');
    expect(document.activeElement).toBe(progressTab);
    expect(
      screen.getByRole('heading', {
        name: 'The program includes reported activity and proposals that have not yet begun.',
      }),
    ).toBeDefined();
    expect(
      screen.getByText(/The factory forms part of the Foundation's self-funded mission/),
    ).toBeDefined();

    fireEvent.keyDown(progressTab, { key: 'ArrowRight' });
    expect(
      screen.getByText(
        /The Foundation intends to report verified results rather than projected outcomes/,
      ),
    ).toBeDefined();
  });

  it('supports Home and End keyboard shortcuts in the tab list', () => {
    render(<HomePage />);

    const overviewTab = screen.getByRole('tab', { name: 'Overview' });
    fireEvent.keyDown(overviewTab, { key: 'End' });

    const downloadsTab = screen.getByRole('tab', { name: 'Downloads' });
    expect(downloadsTab.getAttribute('aria-selected')).toBe('true');
    expect(document.activeElement).toBe(downloadsTab);

    fireEvent.keyDown(downloadsTab, { key: 'Home' });
    expect(overviewTab.getAttribute('aria-selected')).toBe('true');
    expect(document.activeElement).toBe(overviewTab);
  });

  it('states that California property terms need confirmation before funding claims', () => {
    render(<HomePage />);

    fireEvent.click(screen.getByRole('tab', { name: 'Progress' }));
    fireEvent.click(screen.getByText('California site status needs confirmation'));

    expect(
      screen.getByText(
        /Confirmation of the site's current status and terms is required before any public statement or funding decision relies on the property/,
      ),
    ).toBeDefined();
  });

  it('shows a next-tab callout on each content tab and navigates to the next section', () => {
    render(<HomePage />);

    const tabFlow = [
      ['Overview', 'Our approach'],
      ['Our approach', 'Progress'],
      ['Progress', 'Impact'],
      ['Impact', 'Support'],
      ['Support', 'Due diligence'],
      ['Due diligence', 'Downloads'],
    ];

    for (const [currentTab, nextTab] of tabFlow) {
      fireEvent.click(screen.getByRole('tab', { name: currentTab }));

      const callout = screen.getByRole('complementary', { name: 'Continue exploring' });
      expect(within(callout).queryByText('CE')).toBeNull();
      fireEvent.click(within(callout).getByRole('button'));

      expect(screen.getByRole('tab', { name: nextTab }).getAttribute('aria-selected')).toBe('true');
    }
  });

  it('provides downloads for the one-pager and full slide deck', () => {
    render(<HomePage />);

    fireEvent.click(screen.getByRole('tab', { name: 'Downloads' }));

    expect(screen.queryByRole('complementary', { name: 'Continue exploring' })).toBeNull();

    const onePagerLink = screen.getByRole('link', { name: 'Download One-pager PDF' });
    const slideDeckLink = screen.getByRole('link', { name: 'Download Full slide deck PDF' });

    expect(onePagerLink.getAttribute('download')).toBe('coconut-earth-foundation-one-pager.pdf');
    expect(onePagerLink.getAttribute('href')).toBe(
      'https://github.com/crec11/Coconut-Earth-Foundation/raw/refs/heads/feature/break-out-into-features/docs/pdf/CEF_Donor_One_Page_Key_Points.pdf',
    );
    expect(slideDeckLink.getAttribute('download')).toBe(
      'coconut-earth-foundation-full-slide-deck.pdf',
    );
    expect(slideDeckLink.getAttribute('href')).toBe(
      'https://github.com/crec11/Coconut-Earth-Foundation/raw/refs/heads/feature/break-out-into-features/docs/pdf/CEF_Donor_Full_Presentation.pdf',
    );
  });

  it('reveals operational detail progressively within a tab', () => {
    render(<HomePage />);

    fireEvent.click(screen.getByRole('tab', { name: 'Our approach' }));
    fireEvent.click(screen.getByText('Community collection pilot'));

    expect(screen.getByText(/prioritize fallen or discarded coconuts/)).toBeDefined();
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
    expect(screen.getByText(/majority of incoming support/).textContent).toMatch(
      /^The mission is currently self-funded/,
    );
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
      screen.getByText(
        /Tax-exempt status and the deductibility of contributions have not been confirmed/,
      ),
    ).toBeDefined();
  });
});
