import type { ReactNode } from 'react';
import { Tabs } from '../../components/ui/Tabs';
import { ApproachTab } from './tabs/ApproachTab';
import { DueDiligenceTab } from './tabs/DueDiligenceTab';
import { DownloadsTab } from './tabs/DownloadsTab';
import { ImpactTab } from './tabs/ImpactTab';
import { OverviewTab } from './tabs/OverviewTab';
import { ProgressTab } from './tabs/ProgressTab';
import { SupportTab } from './tabs/SupportTab';
import { homeTabs } from './homeTabs';
import type { HomeTabId } from './homeTabs';

interface HomeInformationProps {
  activeTab: HomeTabId;
  onSelectTab: (tab: HomeTabId) => void;
}

export function HomeInformation({ activeTab, onSelectTab }: HomeInformationProps) {
  const tabPanels: Record<HomeTabId, ReactNode> = {
    overview: <OverviewTab onSelectTab={onSelectTab} />,
    approach: <ApproachTab onSelectTab={onSelectTab} />,
    progress: <ProgressTab onSelectTab={onSelectTab} />,
    impact: <ImpactTab onSelectTab={onSelectTab} />,
    support: <SupportTab onSelectTab={onSelectTab} />,
    'due-diligence': <DueDiligenceTab onSelectTab={onSelectTab} />,
    downloads: <DownloadsTab />,
  };

  return (
    <section className="information" aria-labelledby="information-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Our mission</p>
          <h2 id="information-title">One mission, clearly told.</h2>
        </div>
        <p className="section-intro">
          Explore Coconut Earth Foundation&apos;s purpose, approach, progress, and opportunities to
          help.
        </p>
      </div>

      <Tabs
        ariaLabel="Mission and program information"
        items={homeTabs}
        onSelect={onSelectTab}
        selectedId={activeTab}
      >
        {tabPanels[activeTab]}
      </Tabs>
    </section>
  );
}
