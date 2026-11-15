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
        lead="Reduce pressure on forests by recovering discarded coconut shells, advancing soil and tree-restoration efforts, and sharing practical lessons communities and businesses can adapt around the world."
        nextAction="See the three-step approach"
        nextDescription="A self-funded initiative focused on practical recovery, careful testing, and responsible global replication."
        nextEyebrow="Starting in Thailand"
        nextTab="approach"
        onSelectTab={onSelectTab}
        title="A practical mission, built to be shared."
      >
        <p className="purpose-copy">
          <strong>Our purpose.</strong> Demonstrate a responsible, measurable model in Thailand and
          make the useful lessons available for local adaptation elsewhere.
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
                Brings international relationships and hands-on product experience to the founding
                team.
              </p>
            </div>
          </article>
          <article className="founder-card">
            <img alt="Skipper Eric James Leitzke surfing" loading="lazy" src={skipperEricPhoto} />
            <div className="founder-copy">
              <p className="eyebrow">Co-founder</p>
              <h3>Skipper Eric James Leitzke</h3>
              <p>Brings investment and operations experience to Coconut Earth Foundation.</p>
            </div>
          </article>
        </div>
        <p className="founder-note">
          This is a self-funded mission. The majority of incoming support is intended to advance it
          under approved budgets.
        </p>
      </Disclosure>
    </>
  );
}
