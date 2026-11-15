import factoryProductionConcept from '../../../assets/factory-production-concept.jpg';
import { Disclosure } from '../components/Disclosure';
import { TabIntro } from '../components/TabIntro';
import type { HomeTabId } from '../homeTabs';

const approachSteps = [
  {
    number: '01',
    title: 'Recover',
    description:
      'Work with local partners to collect and prepare discarded coconut shells, with fair payments and traceable records.',
  },
  {
    number: '02',
    title: 'Demonstrate',
    description:
      'Develop the Thailand eco-factory model, including gas-handling and recovery systems now being built and tested.',
  },
  {
    number: '03',
    title: 'Replicate',
    description:
      'Measure safety and performance, then share useful results for local adaptation in other countries.',
  },
];

interface ApproachTabProps {
  onSelectTab: (tab: HomeTabId) => void;
}

export function ApproachTab({ onSelectTab }: ApproachTabProps) {
  return (
    <>
      <TabIntro
        eyebrow="How the work comes together"
        lead="The work starts with local partnerships and earns the right to scale through evidence, safety, and transparent learning."
        nextAction="View current progress"
        nextDescription="See what is underway in Thailand and which activities remain planned."
        nextEyebrow="Next: Progress"
        nextTab="progress"
        onSelectTab={onSelectTab}
        title="Recover. Demonstrate. Replicate."
      />
      <div className="step-grid">
        {approachSteps.map((step) => (
          <article className="step-card" key={step.number}>
            <p className="step-number">{step.number}</p>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
      <Disclosure summary="Community collection pilot">
        <p>
          The proposed pilot prioritizes fallen or discarded coconuts, respects existing local uses,
          and records where material comes from. Whole coconuts, husks, fiber, and hard shells would
          be sorted separately and checked for moisture and quality.
        </p>
        <p>
          Local stations could use published acceptance rules, weighing records, receipts, and
          prompt payment. The pilot would compare island processing with a shared hub and assess
          equipment, staffing, electricity, maintenance, storage, and full transport cost. A
          proposed barge route would be compared with other freight options; pickup timing would
          depend on actual volumes, port access, weather, and cost.
        </p>
      </Disclosure>
      <Disclosure summary="Factory production concept">
        <p>
          The proposed process covers receiving and storing shells, carbonizing them in a sealed
          retort, cooling and crushing, screening, mixing binder, pressing briquettes, controlled
          drying, quality checks, and packaging.
        </p>
        <p>
          Gas capture and reuse for process heat are goals to assess—not verified outcomes. Final
          equipment, fire separation, dust protection, permits, and emissions controls require local
          engineering and testing.
        </p>
        <figure className="concept-figure">
          <img
            alt="Illustrative layout of a small coconut-shell charcoal production facility"
            loading="lazy"
            src={factoryProductionConcept}
          />
          <figcaption>
            Illustrative production layout, not a photograph of an operating facility. Final sizing,
            fire separation, dust protection, and permits require local engineering.
          </figcaption>
        </figure>
      </Disclosure>
      <Disclosure summary="When to expand">
        <p>
          Add locations only after a costed pilot establishes workable supply, community
          participation, receiving capacity, and operating results. Adapt each location to local
          needs, infrastructure, and rules.
        </p>
      </Disclosure>
    </>
  );
}
