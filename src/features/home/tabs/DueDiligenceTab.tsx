import { Disclosure } from '../components/Disclosure';
import { TabIntro } from '../components/TabIntro';
import { TabNavigation } from '../components/TabNavigation';
import type { HomeTabId } from '../homeTabs';

interface DueDiligenceTabProps {
  onSelectTab: (tab: HomeTabId) => void;
}

export function DueDiligenceTab({ onSelectTab }: DueDiligenceTabProps) {
  return (
    <>
      <TabIntro
        eyebrow="Safety, evidence, and responsible funding"
        lead="Responsible funding decisions depend on independent testing and a clear distinction between established facts and questions that remain open."
        title="Funding decisions should account for evidence, risks, and open questions."
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
        Before committing funds, verify the receiving entity, contribution terms, and any tax
        treatment directly with the Foundation or an appropriate adviser.
      </p>
      <Disclosure summary="Charcoal, indoor air, and health claims">
        <p>
          Coconut-shell charcoal remains charcoal: burning it can produce carbon monoxide and
          harmful particulate pollution. Indoor use should not be considered unless equipment is
          specifically approved and properly vented for that use.
        </p>
        <p>
          Claims about heat, burn time, efficiency, and emissions require independent, comparable
          testing. Testing should consider carbon monoxide, particulate matter, other relevant
          pollutants, sourcing, drying, transport, factory energy, and end use. Coconut-shell
          feedstock alone does not substantiate a clean-cooking claim.
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
        Tax-exempt status and the deductibility of contributions have not been confirmed.
      </p>
      <button className="primary-button" type="button" onClick={() => onSelectTab('support')}>
        Review funding priorities
      </button>
      <TabNavigation
        nextAction="Open downloads"
        nextDescription="Review the one-pager and full presentation for additional detail on the mission and proposed work."
        nextEyebrow="Next: Downloads"
        nextTab="downloads"
        onSelectTab={onSelectTab}
      />
    </>
  );
}
