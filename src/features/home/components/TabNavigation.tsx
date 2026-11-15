import type { HomeTabId } from '../homeTabs';

interface TabNavigationProps {
  nextAction: string;
  nextDescription: string;
  nextEyebrow: string;
  nextTab: HomeTabId;
  onSelectTab: (tab: HomeTabId) => void;
}

export function TabNavigation({
  nextAction,
  nextDescription,
  nextEyebrow,
  nextTab,
  onSelectTab,
}: TabNavigationProps) {
  function handleNextClick() {
    onSelectTab(nextTab);
    document
      .getElementById('information-title')
      ?.parentElement?.scrollIntoView?.({ behavior: 'smooth', block: 'start' });
  }

  return (
    <aside aria-label="Continue exploring" className="tab-navigation-card">
      <p className="eyebrow">{nextEyebrow}</p>
      <p>{nextDescription}</p>
      <button className="text-button" type="button" onClick={handleNextClick}>
        {nextAction} <span aria-hidden="true">→</span>
      </button>
    </aside>
  );
}
