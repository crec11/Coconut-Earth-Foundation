import { useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import captainBrittPhoto from '../../assets/captain-britt.jpg';
import coconutCanopy from '../../assets/coconut-canopy.jpg';
import factoryProductionConcept from '../../assets/factory-production-concept.jpg';
import skipperEricPhoto from '../../assets/skipper-eric.jpg';
import './HomePage.css';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'approach', label: 'Our approach' },
  { id: 'progress', label: 'Progress' },
  { id: 'impact', label: 'Impact' },
  { id: 'support', label: 'Support' },
  { id: 'due-diligence', label: 'Due diligence' },
] as const;

type TabId = (typeof tabs)[number]['id'];

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

const impactMeasures = [
  'Shells recovered',
  'Trees restored',
  'Local participation',
  'Verified emissions and safety',
];

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

const progressItems = [
  {
    status: 'Reported by founders',
    title: 'Thailand eco-factory',
    description:
      'The founders report funding the Thailand factory initiative. Its operating model and current readiness should be confirmed as the program develops.',
  },
  {
    status: 'In progress',
    title: 'Gas handling and recovery',
    description:
      'Construction and testing are underway. Commissioning and independent emissions results are not presented as complete.',
  },
  {
    status: 'Proposed',
    title: 'California research and restoration',
    description:
      'Greenhouse, nursery, soil-study, and restoration plans remain subject to site feasibility, approvals, and program budgets.',
  },
];

function PanelIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: string;
}) {
  return (
    <div className="panel-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="panel-lead">{children}</p>
    </div>
  );
}

function Disclosure({ summary, children }: { summary: string; children: ReactNode }) {
  return (
    <details className="detail-disclosure">
      <summary>{summary}</summary>
      <div className="disclosure-content">{children}</div>
    </details>
  );
}

function TabPanelContent({
  activeTab,
  onSelectTab,
}: {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
}) {
  switch (activeTab) {
    case 'overview':
      return (
        <>
          <div className="overview-layout">
            <div>
              <PanelIntro eyebrow="Our mission" title="A practical mission, built to be shared.">
                Reduce pressure on forests by recovering discarded coconut shells, advancing soil
                and tree-restoration efforts, and sharing practical lessons communities and
                businesses can adapt around the world.
              </PanelIntro>
              <p className="purpose-copy">
                <strong>Our purpose.</strong> Demonstrate a responsible, measurable model in
                Thailand and make the useful lessons available for local adaptation elsewhere.
              </p>
            </div>
            <aside className="overview-note">
              <span className="note-mark" aria-hidden="true">
                CE
              </span>
              <p className="eyebrow">Starting in Thailand</p>
              <p>
                A self-funded initiative focused on practical recovery, careful testing, and
                responsible global replication.
              </p>
              <button className="text-button" type="button" onClick={() => onSelectTab('approach')}>
                See the three-step approach <span aria-hidden="true">→</span>
              </button>
            </aside>
          </div>
          <Disclosure summary="Meet the founding team">
            <div className="founder-grid">
              <article className="founder-card">
                <img
                  alt="Captain Britt Reynolds beside a coconut-shell charcoal product display"
                  loading="lazy"
                  src={captainBrittPhoto}
                />
                <div className="founder-copy">
                  <p className="eyebrow">Co-founder</p>
                  <h3>Captain Britt Reynolds</h3>
                  <p>
                    Brings international relationships and hands-on product experience to the
                    founding team.
                  </p>
                </div>
              </article>
              <article className="founder-card">
                <img
                  alt="Skipper Eric James Leitzke surfing"
                  loading="lazy"
                  src={skipperEricPhoto}
                />
                <div className="founder-copy">
                  <p className="eyebrow">Co-founder</p>
                  <h3>Skipper Eric James Leitzke</h3>
                  <p>Brings investment and operations experience to Coconut Earth Foundation.</p>
                </div>
              </article>
            </div>
            <p className="founder-note">
              The founders report self-funding the mission and intend the majority of incoming
              support to advance it under approved budgets.
            </p>
          </Disclosure>
        </>
      );
    case 'approach':
      return (
        <>
          <PanelIntro
            eyebrow="How the work comes together"
            title="Recover. Demonstrate. Replicate."
          >
            The work starts with local partnerships and earns the right to scale through evidence,
            safety, and transparent learning.
          </PanelIntro>
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
              The proposed pilot prioritizes fallen or discarded coconuts, respects existing local
              uses, and records where material comes from. Whole coconuts, husks, fiber, and hard
              shells would be sorted separately and checked for moisture and quality.
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
              retort, cooling and crushing, screening, mixing binder, pressing briquettes,
              controlled drying, quality checks, and packaging.
            </p>
            <p>
              Gas capture and reuse for process heat are goals to assess—not verified outcomes.
              Final equipment, fire separation, dust protection, permits, and emissions controls
              require local engineering and testing.
            </p>
            <figure className="concept-figure">
              <img
                alt="Illustrative layout of a small coconut-shell charcoal production facility"
                loading="lazy"
                src={factoryProductionConcept}
              />
              <figcaption>
                Illustrative production layout, not a photograph of an operating facility. Final
                sizing, fire separation, dust protection, and permits require local engineering.
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
    case 'progress':
      return (
        <>
          <PanelIntro
            eyebrow="Current activity and plans"
            title="Separate what is reported from what is proposed."
          >
            Some work is founder-reported or in progress; other activities are still proposed.
            Status labels help distinguish them.
          </PanelIntro>
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
              Ownership and lease descriptions for the California base differ. Confirm current
              property status and terms before making a public or donor-facing property or funding
              claim.
            </p>
            <p>
              Proposed site uses include a greenhouse of about 2,000 square feet, nursery and soil
              studies, restoration trials, meetings, and research coordination. Feasibility, water,
              access, permitted uses, operating costs, and approvals need confirmation.
            </p>
          </Disclosure>
        </>
      );
    case 'impact':
      return (
        <>
          <PanelIntro eyebrow="How we will measure success" title="Progress should be verifiable.">
            The brief identifies practical measures, not promised outcomes. Results should be
            documented as the work advances.
          </PanelIntro>
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
                Trace shell origins, seasonality, competing uses, collection, transport, and
                processing yield.
              </li>
              <li>
                Record operating conditions, energy use, emissions, and worker exposure from
                collection through finished fuel.
              </li>
              <li>
                Compare performance and lifecycle impacts with a documented baseline through
                qualified independent partners.
              </li>
              <li>
                Report methods, spending, participation, payments, yields, restoration results,
                limitations, and the basis for decisions to continue or expand.
              </li>
            </ul>
          </Disclosure>
          <Disclosure summary="Restoration and research safeguards">
            <p>
              Proposed nursery and soil pilots could study tree growth and survival, coconut
              genetics, and climate adaptation. No experiments or successful adaptations are
              presented as complete.
            </p>
            <p>
              Planting plans should be developed with willing local partners on suitable land, with
              land rights, habitat, water needs, maintenance, and long-term tree survival considered
              before expansion.
            </p>
          </Disclosure>
        </>
      );
    case 'support':
      return (
        <>
          <PanelIntro
            eyebrow="Where donor support can help"
            title="Fund the work that builds trust."
          >
            Support can help turn a promising model into a tested, transparent, and locally useful
            approach.
          </PanelIntro>
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
              Collection programs, training, environmental monitoring, and restoration work would
              follow review and approval of the first pilot. Headquarters projects and expedition
              vessels are separate initiatives with their own scopes, budgets, and approvals.
            </p>
            <p>
              A proposed charcoal-assistance program would first document community need, eligible
              households, budgets, distribution logistics, and recipient guidance. Cooking safety
              and ventilation must be assessed; charcoal should not be presented as clean cooking.
            </p>
            <p>
              An initial 90–120 foot vessel is proposed, with an indicative purchase target of
              $500,000–$1 million; a larger 150–200 foot vessel is a future concept. Any purchase
              would require an independent survey, confirmed mission need, qualified crew, safety
              review, insurance, and a separate operating budget. Expedition places are not
              guaranteed.
            </p>
          </Disclosure>
          <Disclosure summary="Governance and supporter reporting">
            <p>
              Proposed safeguards include written responsibilities, independent oversight, conflict
              reviews, approved budgets, restricted-gift records, and expenditure approvals. Confirm
              the organization&apos;s current governance and donation arrangements before
              contributing.
            </p>
            <p>
              Proposed supporter reports include shell weights, participant payments, paid local
              roles, processing yields, delivery reliability, research findings, restored area, and
              tree survival—along with limitations and next steps.
            </p>
          </Disclosure>
          <div className="partner-callout">
            <p className="eyebrow">An invitation to partner</p>
            <p>
              Ask Coconut Earth Foundation for a project-specific scope, budget, timeline, and
              reporting plan. The goal is to demonstrate a better model—and help others improve upon
              it.
            </p>
          </div>
        </>
      );
    case 'due-diligence':
      return (
        <div className="due-diligence-layout">
          <PanelIntro
            eyebrow="Safety, evidence, and responsible giving"
            title="Good questions belong in the plan."
          >
            Responsible progress depends on independent testing and clear expectations about what is
            known—and what still needs to be established.
          </PanelIntro>
          <div className="caution-card">
            <span className="caution-icon" aria-hidden="true">
              !
            </span>
            <div>
              <h3>Comparative benefits require testing.</h3>
              <p>
                Charcoal still produces carbon monoxide and other pollutants. Comparative
                environmental and health benefits require testing.
              </p>
            </div>
          </div>
          <p className="due-diligence-note">
            Before contributing, confirm the receiving entity, donation terms, and any tax
            deductibility directly with the appropriate organization or adviser.
          </p>
          <Disclosure summary="Charcoal, indoor air, and health claims">
            <p>
              Coconut-shell charcoal remains charcoal: burning it can produce carbon monoxide and
              harmful particulate pollution. Do not recommend burning charcoal indoors or in
              enclosed spaces without equipment specifically approved and properly vented for that
              use.
            </p>
            <p>
              Heat, burn time, efficiency, and emissions claims require independent, comparable
              testing. Testing should consider carbon monoxide, particulate matter, other relevant
              pollutants, sourcing, drying, transport, factory energy, and end use. Coconut charcoal
              is not automatically a clean cooking fuel.
            </p>
          </Disclosure>
          <Disclosure summary="Public-health context and sources">
            <p>
              2021 estimates attribute 2.9 million deaths to household air pollution, including more
              than 309,000 deaths among children under five, while 2.1 billion people rely on
              polluting cooking fuels and technologies. These estimates span multiple fuels; they
              are public-health context, not evidence of Coconut Earth Foundation outcomes or proof
              that its product is safer.
            </p>
            <ul className="source-list">
              <li>
                <a
                  href="https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health"
                  rel="noreferrer"
                  target="_blank"
                >
                  World Health Organization: Household air pollution and health
                </a>
              </li>
              <li>
                <a
                  href="https://www.worldbank.org/en/topic/energy/brief/clean-cooking"
                  rel="noreferrer"
                  target="_blank"
                >
                  World Bank: Clean cooking
                </a>
              </li>
              <li>
                <a
                  href="https://ourworldindata.org/indoor-air-pollution"
                  rel="noreferrer"
                  target="_blank"
                >
                  Our World in Data: Indoor air pollution
                </a>
              </li>
            </ul>
          </Disclosure>
          <p className="tax-status-note">
            The supplied materials do not establish tax-exempt recognition or donation
            deductibility.
          </p>
          <button className="primary-button" type="button" onClick={() => onSelectTab('support')}>
            Explore where support can help
          </button>
        </div>
      );
  }
}

export function HomePage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    let nextIndex: number | undefined;

    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const nextTab = tabs[nextIndex];
    tabRefs.current[nextIndex]?.focus();
    setActiveTab(nextTab.id);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Coconut Earth Foundation home">
          <span className="brand-mark" aria-hidden="true">
            CE
          </span>
          <span className="brand-name">
            Coconut Earth
            <br />
            Foundation
          </span>
        </a>
        <p className="header-note">Practical action. Verifiable outcomes.</p>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-kicker">A practical, self-funded mission</p>
            <h1 id="hero-title">
              Protect forests. <span>Share what works.</span>
            </h1>
            <p className="hero-description">
              Starting in Thailand and built for responsible global replication.
            </p>
            <button className="hero-button" type="button" onClick={() => setActiveTab('support')}>
              Where donor support can help <span aria-hidden="true">↓</span>
            </button>
          </div>
          <div className="hero-image">
            <img
              src={coconutCanopy}
              alt="A dense canopy of coconut palms in a tropical forest"
              fetchPriority="high"
            />
            <span className="image-caption">A model beginning in Thailand</span>
          </div>
        </section>

        <section className="information" aria-labelledby="information-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Our mission</p>
              <h2 id="information-title">One mission, clearly told.</h2>
            </div>
            <p className="section-intro">
              Explore Coconut Earth Foundation&apos;s purpose, approach, progress, and opportunities
              to help.
            </p>
          </div>

          <div className="tab-list" role="tablist" aria-label="Mission and program information">
            {tabs.map((tab, index) => (
              <button
                aria-controls={`${tab.id}-panel`}
                aria-selected={activeTab === tab.id}
                className="tab-button"
                id={`${tab.id}-tab`}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={handleTabKeyDown}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                role="tab"
                tabIndex={activeTab === tab.id ? 0 : -1}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            aria-labelledby={`${activeTab}-tab`}
            className="tab-panel"
            id={`${activeTab}-panel`}
            role="tabpanel"
            tabIndex={0}
          >
            <TabPanelContent activeTab={activeTab} onSelectTab={setActiveTab} />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          <strong>Donor due diligence:</strong> Confirm the receiving entity, donation terms, and
          any tax deductibility before contributing.
        </p>
        <button className="footer-link" type="button" onClick={() => setActiveTab('due-diligence')}>
          Read the safety and due diligence notes <span aria-hidden="true">→</span>
        </button>
      </footer>
    </div>
  );
}
