import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import coconutCanopy from '../../assets/coconut-canopy.jpg';
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
        <div className="overview-layout">
          <div>
            <PanelIntro eyebrow="The donor brief" title="A practical mission, built to be shared.">
              Reduce pressure on forests by recovering discarded coconut shells, advancing soil and
              tree-restoration efforts, and sharing practical lessons communities and businesses can
              adapt around the world.
            </PanelIntro>
            <p className="purpose-copy">
              <strong>Our purpose.</strong> Demonstrate a responsible, measurable model in Thailand
              and make the useful lessons available for local adaptation elsewhere.
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
        </>
      );
    case 'progress':
      return (
        <div className="progress-layout">
          <div>
            <PanelIntro eyebrow="Already underway" title="Founder-funded action is in motion.">
              Captain Britt Reynolds and Skipper Eric Leitzke report financing the Thailand factory
              initiative and the California headquarters property.
            </PanelIntro>
            <p className="address-note">
              Headquarters property: 1555 Willow Glen Drive, El Cajon, California.
            </p>
          </div>
          <aside className="status-card">
            <span className="status-label">
              <span className="status-dot" aria-hidden="true" />
              Model in development
            </span>
            <h3>Built carefully, not claimed prematurely.</h3>
            <p>
              Gas-handling construction, commissioning, and independent emissions testing are not
              presented as complete.
            </p>
          </aside>
        </div>
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
              <p className="eyebrow">The donor brief</p>
              <h2 id="information-title">One mission, clearly told.</h2>
            </div>
            <p className="section-intro">
              Explore Coconut Earth Foundation&apos;s purpose, approach, progress, and opportunities
              to help.
            </p>
          </div>

          <div className="tab-list" role="tablist" aria-label="Donor brief sections">
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
