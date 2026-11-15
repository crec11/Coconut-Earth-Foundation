import { PanelIntro } from '../components/PanelIntro';

const downloads = [
  {
    title: 'One-pager',
    description:
      'This one-page document summarizes the Coconut Earth Foundation mission and its proposed work.',
    fileName: 'coconut-earth-foundation-one-pager.pdf',
    href: 'https://github.com/crec11/Coconut-Earth-Foundation/raw/refs/heads/feature/break-out-into-features/docs/pdf/CEF_Donor_One_Page_Key_Points.pdf',
  },
  {
    title: 'Full slide deck',
    description:
      'The full presentation provides additional detail on the mission and proposed activities.',
    fileName: 'coconut-earth-foundation-full-slide-deck.pdf',
    href: 'https://github.com/crec11/Coconut-Earth-Foundation/raw/refs/heads/feature/break-out-into-features/docs/pdf/CEF_Donor_Full_Presentation.pdf',
  },
];

export function DownloadsTab() {
  return (
    <>
      <PanelIntro eyebrow="Project documents" title="Review the available materials.">
        These documents summarize the Foundation&apos;s mission and proposed work. Prospective
        funders should also review the due diligence information on this site.
      </PanelIntro>
      <div className="download-grid">
        {downloads.map((document) => (
          <article className="download-card" key={document.fileName}>
            <p className="download-format">PDF document</p>
            <h3>{document.title}</h3>
            <p className="download-description">{document.description}</p>
            <a
              className="download-button"
              download={document.fileName}
              href={document.href}
              rel="noreferrer"
              target="_blank"
            >
              Download {document.title} PDF <span aria-hidden="true">↓</span>
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
