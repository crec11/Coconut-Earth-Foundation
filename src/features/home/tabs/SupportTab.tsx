import { Disclosure } from '../components/Disclosure';
import { TabIntro } from '../components/TabIntro';
import { TabNavigation } from '../components/TabNavigation';
import type { HomeTabId } from '../homeTabs';

const supportAreas = [
  {
    title: 'Independent science',
    description:
      'Independent testing can assess fuel performance, factory emissions, and safe use before claims are made.',
  },
  {
    title: 'Community partnerships',
    description:
      'Funding could support shell-collection partnerships, fair local employment, and community education.',
  },
  {
    title: 'Forest and soil restoration',
    description:
      'Funding could support restoration pilots with measurable outcomes and follow-up monitoring.',
  },
  {
    title: 'Open documentation',
    description:
      'Open reporting could help communities and other operators assess and adapt the approach.',
  },
];

interface SupportTabProps {
  onSelectTab: (tab: HomeTabId) => void;
}

export function SupportTab({ onSelectTab }: SupportTabProps) {
  return (
    <>
      <TabIntro
        eyebrow="Potential funding priorities"
        lead="Funding could support pilot work, independent testing, and transparent reporting; expansion would depend on the results."
        title="Funding priorities are tied to evidence."
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
      <Disclosure summary="Proposed initial funding stage">
        <p>
          Initial funding could support local consultation, a shell-supply and logistics assessment,
          a costed pilot plan, and an independent research design. Each stage should have a defined
          scope and budget before funds are committed.
        </p>
      </Disclosure>
      <Disclosure summary="Later activities and separate campaigns">
        <p>
          Collection programs, training, environmental monitoring, and restoration work would
          proceed only after the first pilot has been reviewed and approved. Headquarters projects
          and expedition vessels are separate initiatives, each requiring its own scope, budget, and
          approvals.
        </p>
        <p>
          Any proposed charcoal-assistance program should first document community need, eligible
          households, budgets, distribution logistics, and recipient guidance. The program would
          need to assess cooking safety and ventilation; charcoal should not be presented as clean
          cooking.
        </p>
        <p>
          The current proposal identifies an initial 90–120-foot vessel with an indicative purchase
          target of $500,000–$1 million; a larger 150–200-foot vessel remains a future concept.
          These figures are proposals, not confirmed acquisition plans. Any purchase would require
          an independent survey, a documented mission need, a qualified crew, a safety review,
          insurance, and a separate operating budget. Expedition places are not guaranteed.
        </p>
      </Disclosure>
      <Disclosure summary="Governance and supporter reporting">
        <p>
          Proposed safeguards include written responsibilities, independent oversight, conflict
          reviews, approved budgets, restricted-contribution records, and expenditure approvals.
          Prospective funders should verify the Foundation&apos;s current governance and
          contribution arrangements before committing funds.
        </p>
        <p>
          Proposed supporter reports would document shell weights, participant payments, paid local
          roles, processing yields, delivery reliability, research findings, restored area, and tree
          survival, together with limitations and next steps.
        </p>
      </Disclosure>
      <div className="partner-callout">
        <p className="eyebrow">An invitation to partner</p>
        <p>
          Prospective funders can request a project-specific scope, budget, timeline, and reporting
          plan before making a commitment. The objective is to test a model and share evidence that
          may help others adapt or improve it.
        </p>
      </div>
      <TabNavigation
        nextAction="Review due diligence"
        nextDescription="Review the safety, evidence, and contribution considerations before committing funds."
        nextEyebrow="Next: Due diligence"
        nextTab="due-diligence"
        onSelectTab={onSelectTab}
      />
    </>
  );
}
