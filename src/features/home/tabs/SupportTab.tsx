import { Disclosure } from '../components/Disclosure';
import { TabIntro } from '../components/TabIntro';
import type { HomeTabId } from '../homeTabs';

const supportAreas = [
  {
    title: 'Independent science',
    description: 'Test fuel performance, factory emissions, and safe use.',
  },
  {
    title: 'Community partnerships',
    description: 'Support shell collection, fair local jobs, and education.',
  },
  {
    title: 'Forest and soil restoration',
    description: 'Run practical restoration pilots and track their results.',
  },
  {
    title: 'Open documentation',
    description: 'Share lessons so others can adapt and improve the approach.',
  },
];

interface SupportTabProps {
  onSelectTab: (tab: HomeTabId) => void;
}

export function SupportTab({ onSelectTab }: SupportTabProps) {
  return (
    <>
      <TabIntro
        eyebrow="Where donor support can help"
        lead="Support can help turn a promising model into a tested, transparent, and locally useful approach."
        nextAction="Review due diligence"
        nextDescription="Review health, safety, and giving considerations before contributing."
        nextEyebrow="Next: Due diligence"
        nextTab="due-diligence"
        onSelectTab={onSelectTab}
        title="Fund the work that builds trust."
      />
      <div className="support-grid">
        {supportAreas.map((area) => (
          <article className="support-card" key={area.title}>
            <span className="support-check" aria-hidden="true">
              +
            </span>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </article>
        ))}
      </div>
      <Disclosure summary="The first proposed donor program">
        <p>
          Begin with local consultation, a shell-supply and logistics assessment, a costed pilot
          plan, and an independent research design. Scope and budget each stage before funds are
          committed.
        </p>
      </Disclosure>
      <Disclosure summary="Later activities and separate campaigns">
        <p>
          Collection programs, training, environmental monitoring, and restoration work would follow
          review and approval of the first pilot. Headquarters projects and expedition vessels are
          separate initiatives with their own scopes, budgets, and approvals.
        </p>
        <p>
          A proposed charcoal-assistance program would first document community need, eligible
          households, budgets, distribution logistics, and recipient guidance. Cooking safety and
          ventilation must be assessed; charcoal should not be presented as clean cooking.
        </p>
        <p>
          An initial 90–120 foot vessel is proposed, with an indicative purchase target of
          $500,000–$1 million; a larger 150–200 foot vessel is a future concept. Any purchase would
          require an independent survey, confirmed mission need, qualified crew, safety review,
          insurance, and a separate operating budget. Expedition places are not guaranteed.
        </p>
      </Disclosure>
      <Disclosure summary="Governance and supporter reporting">
        <p>
          Proposed safeguards include written responsibilities, independent oversight, conflict
          reviews, approved budgets, restricted-gift records, and expenditure approvals. Confirm the
          organization&apos;s current governance and donation arrangements before contributing.
        </p>
        <p>
          Proposed supporter reports include shell weights, participant payments, paid local roles,
          processing yields, delivery reliability, research findings, restored area, and tree
          survival—along with limitations and next steps.
        </p>
      </Disclosure>
      <div className="partner-callout">
        <p className="eyebrow">An invitation to partner</p>
        <p>
          Ask Coconut Earth Foundation for a project-specific scope, budget, timeline, and reporting
          plan. The goal is to demonstrate a better model—and help others improve upon it.
        </p>
      </div>
    </>
  );
}
