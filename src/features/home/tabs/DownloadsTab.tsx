import { PanelIntro } from '../components/PanelIntro';

const downloads = [
  {
    title: 'One-pager',
    description: 'A concise overview of the Coconut Earth Foundation mission.',
    fileName: 'coconut-earth-foundation-one-pager.pdf',
    href: 'https://github.com/crec11/Coconut-Earth-Foundation/raw/refs/heads/feature/break-out-into-features/docs/pdf/CEF_Donor_One_Page_Key_Points.pdf',
  },
  {
    title: 'Full slide deck',
    description: 'The complete slide deck with more detail on the mission and proposed work.',
    fileName: 'coconut-earth-foundation-full-slide-deck.pdf',
    href: 'https://github.com/crec11/Coconut-Earth-Foundation/raw/refs/heads/feature/break-out-into-features/docs/pdf/CEF_Donor_Full_Presentation.pdf',
  },
];

export function DownloadsTab() {
  return (
    <>
      <PanelIntro eyebrow="Documents" title="Download the materials.">
        Download and share the Coconut Earth Foundation one-pager and full slide deck.
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
