import type { ReactNode } from 'react';
import { PanelIntro } from './PanelIntro';

interface TabIntroProps {
  children?: ReactNode;
  eyebrow: string;
  lead: string;
  title: string;
}

export function TabIntro({ children, eyebrow, lead, title }: TabIntroProps) {
  return (
    <div className="tab-intro-copy">
      <PanelIntro eyebrow={eyebrow} title={title}>
        {lead}
      </PanelIntro>
      {children}
    </div>
  );
}
