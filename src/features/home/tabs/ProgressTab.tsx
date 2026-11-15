import { Disclosure } from '../components/Disclosure';
import { TabIntro } from '../components/TabIntro';
import type { HomeTabId } from '../homeTabs';

const progressItems = [
  {
    status: 'In development',
    title: 'Thailand eco-factory',
    description:
      "The factory forms part of the Foundation's self-funded mission. Its current operating arrangements and readiness for production require confirmation.",
  },
  {
    status: 'In progress',
    title: 'Gas handling and recovery',
    description:
      'Construction and testing are reported to be underway. The current commissioning status and independent emissions results require confirmation.',
  },
  {
    status: 'Proposed',
    title: 'California research and restoration',
    description:
      'Plans for a greenhouse, nursery, soil studies, and restoration remain proposals that depend on site feasibility, approvals, and program budgets.',
  },
];

interface ProgressTabProps {
  onSelectTab: (tab: HomeTabId) => void;
}

export function ProgressTab({ onSelectTab }: ProgressTabProps) {
  return (
    <>
      <TabIntro
        eyebrow="Current activity and plans"
        lead="Construction and testing are reported to be underway in Thailand, while California greenhouse, nursery, and restoration work remains proposed. The status labels distinguish reported activity from future plans."
        nextAction="Explore impact measures"
        nextDescription="The impact section outlines proposed measures and the verification needed to support future claims."
        nextEyebrow="Next: Impact"
        nextTab="impact"
        onSelectTab={onSelectTab}
        title="The program includes reported activity and proposals that have not yet begun."
      />
      <div className="progress-grid">
        {progressItems.map((item) => (
          <article className="progress-card" key={item.title}>
            <span className="status-pill">{item.status}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <Disclosure summary="California site status needs confirmation">
        <p>
          Descriptions of the California site's ownership and lease status differ. Confirmation of
          the site's current status and terms is required before any public statement or funding
          decision relies on the property.
        </p>
        <p>
          The proposed site could accommodate a greenhouse of about 2,000 square feet, nursery and
          soil studies, restoration trials, meetings, and research coordination. Its feasibility,
          water supply, access, permitted uses, operating costs, and required approvals still need
          to be established.
        </p>
      </Disclosure>
    </>
  );
}
