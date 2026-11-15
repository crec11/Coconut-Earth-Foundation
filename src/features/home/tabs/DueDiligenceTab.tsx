import { Disclosure } from '../components/Disclosure';
import { TabIntro } from '../components/TabIntro';
import type { HomeTabId } from '../homeTabs';

interface DueDiligenceTabProps {
  onSelectTab: (tab: HomeTabId) => void;
}

export function DueDiligenceTab({ onSelectTab }: DueDiligenceTabProps) {
  return (
    <>
      <TabIntro
        eyebrow="Safety, evidence, and responsible giving"
        lead="Responsible progress depends on independent testing and clear expectations about what is known—and what still needs to be established."
        nextAction="Open downloads"
        nextDescription="Access the one-pager and full slide deck for more detail."
        nextEyebrow="Next: Downloads"
        nextTab="downloads"
        onSelectTab={onSelectTab}
        title="Good questions belong in the plan."
      />
      <div className="caution-card">
        <span className="caution-icon" aria-hidden="true">
          !
        </span>
        <div>
          <h3>Comparative benefits require testing.</h3>
          <p>
            Charcoal still produces carbon monoxide and other pollutants. Comparative environmental
            and health benefits require testing.
          </p>
        </div>
      </div>
      <p className="due-diligence-note">
        Before contributing, confirm the receiving entity, donation terms, and any tax deductibility
        directly with the appropriate organization or adviser.
      </p>
      <Disclosure summary="Charcoal, indoor air, and health claims">
        <p>
          Coconut-shell charcoal remains charcoal: burning it can produce carbon monoxide and
          harmful particulate pollution. Do not recommend burning charcoal indoors or in enclosed
          spaces without equipment specifically approved and properly vented for that use.
        </p>
        <p>
          Heat, burn time, efficiency, and emissions claims require independent, comparable testing.
          Testing should consider carbon monoxide, particulate matter, other relevant pollutants,
          sourcing, drying, transport, factory energy, and end use. Coconut charcoal is not
          automatically a clean cooking fuel.
        </p>
      </Disclosure>
      <Disclosure summary="Public-health context and sources">
        <p>
          2021 estimates attribute 2.9 million deaths to household air pollution, including more
          than 309,000 deaths among children under five, while 2.1 billion people rely on polluting
          cooking fuels and technologies. These estimates span multiple fuels; they are
          public-health context, not evidence of Coconut Earth Foundation outcomes or proof that its
          product is safer.
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
        Tax-exempt status and donation deductibility have not been confirmed.
      </p>
      <button className="primary-button" type="button" onClick={() => onSelectTab('support')}>
        Explore where support can help
      </button>
    </>
  );
}
