import { Disclosure } from '../components/Disclosure';
import { TabIntro } from '../components/TabIntro';
import type { HomeTabId } from '../homeTabs';

const impactMeasures = [
  'Shells recovered',
  'Trees restored',
  'Local participation',
  'Verified emissions and safety',
];

interface ImpactTabProps {
  onSelectTab: (tab: HomeTabId) => void;
}

export function ImpactTab({ onSelectTab }: ImpactTabProps) {
  return (
    <>
      <TabIntro
        eyebrow="How we will measure success"
        lead="We focus on practical measures, not promised outcomes. We will document results as the work advances."
        nextAction="Explore donor support"
        nextDescription="See where donor support can help build evidence and progress."
        nextEyebrow="Next: Support"
        nextTab="support"
        onSelectTab={onSelectTab}
        title="Progress should be verifiable."
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
        Evaluation can also track wood demand potentially displaced, jobs and community
        participation, tree survival, restored land, and household exposure outcomes.
      </p>
      <Disclosure summary="Independent evidence and reporting plan">
        <ul>
          <li>
            Trace shell origins, seasonality, competing uses, collection, transport, and processing
            yield.
          </li>
          <li>
            Record operating conditions, energy use, emissions, and worker exposure from collection
            through finished fuel.
          </li>
          <li>
            Compare performance and lifecycle impacts with a documented baseline through qualified
            independent partners.
          </li>
          <li>
            Report methods, spending, participation, payments, yields, restoration results,
            limitations, and the basis for decisions to continue or expand.
          </li>
        </ul>
      </Disclosure>
      <Disclosure summary="Restoration and research safeguards">
        <p>
          Proposed nursery and soil pilots could study tree growth and survival, coconut genetics,
          and climate adaptation. Research findings and successful adaptations are not yet
          established.
        </p>
        <p>
          Planting plans should be developed with willing local partners on suitable land, with land
          rights, habitat, water needs, maintenance, and long-term tree survival considered before
          expansion.
        </p>
      </Disclosure>
    </>
  );
}
