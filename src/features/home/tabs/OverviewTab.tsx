import captainBrittPhoto from '../../../assets/captain-britt.jpg';
import skipperEricPhoto from '../../../assets/skipper-eric.jpg';
import { Disclosure } from '../components/Disclosure';
import { TabIntro } from '../components/TabIntro';
import type { HomeTabId } from '../homeTabs';

interface OverviewTabProps {
  onSelectTab: (tab: HomeTabId) => void;
}

export function OverviewTab({ onSelectTab }: OverviewTabProps) {
  return (
    <>
      <TabIntro
        eyebrow="Our mission"
        lead="The Foundation aims to reduce pressure on forests by recovering discarded coconut shells, testing soil and tree-restoration approaches, and sharing evidence that communities and businesses can adapt."
        nextAction="See the three-step approach"
        nextDescription="The model begins with local recovery and a Thailand demonstration; any expansion will depend on documented results, costs, and local conditions."
        nextEyebrow="Starting in Thailand"
        nextTab="approach"
        onSelectTab={onSelectTab}
        title="A model designed for careful evaluation and local adaptation."
      >
        <p className="purpose-copy">
          <strong>Initial objective.</strong> The Foundation intends to test a responsible,
          measurable model in Thailand and publish lessons that could inform local adaptation
          elsewhere.
        </p>
      </TabIntro>
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
                Captain Britt Reynolds contributes international relationships and hands-on product
                experience to the founding team.
              </p>
            </div>
          </article>
          <article className="founder-card">
            <img alt="Skipper Eric James Leitzke surfing" loading="lazy" src={skipperEricPhoto} />
            <div className="founder-copy">
              <p className="eyebrow">Co-founder</p>
              <h3>Skipper Eric James Leitzke</h3>
              <p>
                Skipper Eric James Leitzke contributes investment and operations experience to
                Coconut Earth Foundation.
              </p>
            </div>
          </article>
        </div>
        <p className="founder-note">
          The mission is currently self-funded. Subject to approved budgets, the majority of
          incoming support is intended to advance program work.
        </p>
      </Disclosure>
    </>
  );
}
