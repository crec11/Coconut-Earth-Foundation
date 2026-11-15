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
  return (
    <aside aria-label="Continue exploring" className="tab-navigation-card">
      <p className="eyebrow">{nextEyebrow}</p>
      <p>{nextDescription}</p>
      <button className="text-button" type="button" onClick={() => onSelectTab(nextTab)}>
        {nextAction} <span aria-hidden="true">→</span>
      </button>
    </aside>
  );
}
