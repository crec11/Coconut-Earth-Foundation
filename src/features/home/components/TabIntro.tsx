import type { ReactNode } from 'react';
import { PanelIntro } from './PanelIntro';
import type { HomeTabId } from '../homeTabs';

interface TabIntroProps {
  children?: ReactNode;
  eyebrow: string;
  lead: string;
  nextAction: string;
  nextDescription: string;
  nextEyebrow: string;
  nextTab: HomeTabId;
  onSelectTab: (tab: HomeTabId) => void;
  title: string;
}

export function TabIntro({
  children,
  eyebrow,
  lead,
  nextAction,
  nextDescription,
  nextEyebrow,
  nextTab,
  onSelectTab,
  title,
}: TabIntroProps) {
  return (
    <div className="tab-intro-layout">
      <div className="tab-intro-copy">
        <PanelIntro eyebrow={eyebrow} title={title}>
          {lead}
        </PanelIntro>
        {children}
      </div>
      <aside aria-label="Continue exploring" className="tab-navigation-card">
        <span className="note-mark" aria-hidden="true">
          CE
        </span>
        <p className="eyebrow">{nextEyebrow}</p>
        <p>{nextDescription}</p>
        <button className="text-button" type="button" onClick={() => onSelectTab(nextTab)}>
          {nextAction} <span aria-hidden="true">→</span>
        </button>
      </aside>
    </div>
  );
}
