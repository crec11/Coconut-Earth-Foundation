import { Disclosure } from '../components/Disclosure';
import { TabIntro } from '../components/TabIntro';
import type { HomeTabId } from '../homeTabs';

const impactMeasures = [
  'Shell recovery would be reported by weight and processing yield.',
  'Restoration reporting would track trees planted and their survival over time.',
  'Reports would document local participation, paid roles, and payments.',
  'Independent testing would be required to substantiate emissions and safety results.',
];

interface ImpactTabProps {
  onSelectTab: (tab: HomeTabId) => void;
}

export function ImpactTab({ onSelectTab }: ImpactTabProps) {
  return (
    <>
      <TabIntro
        eyebrow="How we will measure success"
        lead="The Foundation intends to report verified results rather than projected outcomes, with measures developed as the work advances."
        nextAction="Review funding priorities"
        nextDescription="The funding section explains how prospective contributions could support evidence and measured progress."
        nextEyebrow="Next: Support"
        nextTab="support"
        onSelectTab={onSelectTab}
        title="Results should be measurable and verifiable."
      />
      <ul className="measure-grid">
        {impactMeasures.map((measure, index) => (
          <li className="measure-card" key={measure}>
            <span className="measure-index">{String(index + 1).padStart(2, '0')}</span>
            <span>{measure}</span>
          </li>
        ))}
      </ul>
      <p className="impact-detail">
        Depending on the pilot design and available data, evaluation may also examine potential wood
        demand displaced, local employment, restored land, tree survival, and household exposure.
        These indicators would require defined baselines and appropriate verification.
      </p>
      <Disclosure summary="Independent evidence and reporting plan">
        <ul>
          <li>
            The supply-chain assessment would document shell origins and seasonality, competing
            uses, collection and transport methods, and processing yields.
          </li>
          <li>
            Operational monitoring would record conditions, energy use, emissions, and worker
            exposure from collection through finished fuel.
          </li>
          <li>
            Qualified independent partners would compare performance and lifecycle impacts with a
            documented baseline.
          </li>
          <li>
            Supporter reports would disclose methods, spending, participation, payments, yields,
            restoration results, limitations, and the rationale for decisions to continue or expand.
          </li>
        </ul>
      </Disclosure>
      <Disclosure summary="Restoration and research safeguards">
        <p>
          Proposed nursery and soil pilots could examine tree growth and survival, coconut genetics,
          and climate adaptation. The research findings and any successful adaptations have not yet
          been established.
        </p>
        <p>
          Any planting plan should be developed with willing local partners on suitable land. It
          should account for land rights, habitat, water needs, maintenance, and long-term tree
          survival before expansion is considered.
        </p>
      </Disclosure>
    </>
  );
}
