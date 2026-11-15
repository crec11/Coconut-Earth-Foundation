import { useState } from 'react';
import { HomeFooter } from './components/HomeFooter';
import { HomeHeader } from './components/HomeHeader';
import { HomeHero } from './components/HomeHero';
import { HomeInformation } from './HomeInformation';
import { homeTabs } from './homeTabs';
import type { HomeTabId } from './homeTabs';
import './HomePage.css';

export function HomePage() {
  const [activeTab, setActiveTab] = useState<HomeTabId>(homeTabs[0].id);

  return (
    <div className="site-shell">
      <HomeHeader />
      <main id="home">
        <HomeHero onSupportClick={() => setActiveTab('support')} />
        <HomeInformation activeTab={activeTab} onSelectTab={setActiveTab} />
      </main>
      <HomeFooter onDueDiligenceClick={() => setActiveTab('due-diligence')} />
    </div>
  );
}
