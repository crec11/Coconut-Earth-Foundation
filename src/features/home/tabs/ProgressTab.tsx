import { Disclosure } from '../components/Disclosure';
import { PanelIntro } from '../components/PanelIntro';

const progressItems = [
  {
    status: 'In development',
    title: 'Thailand eco-factory',
    description:
      'The Thailand factory is part of this self-funded mission. Its operating model and current readiness need confirmation as the program develops.',
  },
  {
    status: 'In progress',
    title: 'Gas handling and recovery',
    description:
      'Construction and testing are underway. Commissioning status and independent emissions results still need confirmation.',
  },
  {
    status: 'Proposed',
    title: 'California research and restoration',
    description:
      'Greenhouse, nursery, soil-study, and restoration plans remain subject to site feasibility, approvals, and program budgets.',
  },
];

export function ProgressTab() {
  return (
    <>
      <PanelIntro
        eyebrow="Current activity and plans"
        title="See what is underway—and what is still planned."
      >
        Construction and testing are underway in Thailand; California greenhouse, nursery, and
        restoration work remains proposed. Status labels distinguish active work from plans.
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
          Ownership and lease descriptions for the California base differ. Confirm current property
          status and terms before making a public or donor-facing property or funding claim.
        </p>
        <p>
          Proposed site uses include a greenhouse of about 2,000 square feet, nursery and soil
          studies, restoration trials, meetings, and research coordination. Feasibility, water,
          access, permitted uses, operating costs, and approvals need confirmation.
        </p>
      </Disclosure>
    </>
  );
}
