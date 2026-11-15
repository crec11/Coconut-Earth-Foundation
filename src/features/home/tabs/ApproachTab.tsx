import factoryProductionConcept from '../../../assets/factory-production-concept.jpg';
import { Disclosure } from '../components/Disclosure';
import { TabIntro } from '../components/TabIntro';
import { TabNavigation } from '../components/TabNavigation';
import type { HomeTabId } from '../homeTabs';

const approachSteps = [
  {
    number: '01',
    title: 'Recover',
    description:
      'The proposed recovery stage would work with local partners to collect and prepare discarded coconut shells, with fair payments and traceable records.',
  },
  {
    number: '02',
    title: 'Demonstrate',
    description:
      'The Thailand eco-factory is in development, including gas-handling and recovery systems that require further testing.',
  },
  {
    number: '03',
    title: 'Replicate',
    description:
      'Further locations would be considered only after safety, operating performance, and costs are documented, with each model adapted to local conditions.',
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
        lead="The Foundation intends to begin with local collection partnerships and expand only after operating, safety, and financial performance are documented."
        title="The proposed model has three stages, with expansion based on results."
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
          The proposed pilot would prioritize fallen or discarded coconuts, respect existing local
          uses, and record material origins. Whole coconuts, husks, fiber, and hard shells would be
          sorted separately and checked for moisture and quality.
        </p>
        <p>
          Local stations could use published acceptance rules, weighing records, receipts, and
          prompt payment. The pilot would compare island processing with a shared hub and assess
          equipment, staffing, electricity, maintenance, storage, and total transport costs. A
          proposed barge route would be compared with other freight options, with pickup timing
          based on actual volumes, port access, weather, and cost.
        </p>
      </Disclosure>
      <Disclosure summary="Factory production concept">
        <p>
          The proposed process would include receiving and storing shells, carbonizing them in a
          sealed retort, cooling and crushing, screening, mixing binder, pressing briquettes,
          controlled drying, quality checks, and packaging.
        </p>
        <p>
          Gas capture and reuse for process heat are objectives for testing, not verified outcomes.
          Final equipment, fire separation, dust protection, permits, and emissions controls require
          local engineering and testing.
        </p>
        <figure className="concept-figure">
          <img
            alt="Illustrative layout of a small coconut-shell charcoal production facility"
            loading="lazy"
            src={factoryProductionConcept}
          />
          <figcaption>
            This illustration is a proposed production layout, not a photograph of an operating
            facility. Final sizing, fire separation, dust protection, and permits require local
            engineering.
          </figcaption>
        </figure>
      </Disclosure>
      <Disclosure summary="When to expand">
        <p>
          Expansion should proceed only after a costed pilot establishes workable supply, community
          participation, receiving capacity, and operating results. Each location would need to be
          adapted to local needs, infrastructure, and regulations.
        </p>
      </Disclosure>
      <TabNavigation
        nextAction="View current progress"
        nextDescription="Review reported activity in Thailand and distinguish it from proposals that have not yet begun."
        nextEyebrow="Next: Progress"
        nextTab="progress"
        onSelectTab={onSelectTab}
      />
    </>
  );
}
