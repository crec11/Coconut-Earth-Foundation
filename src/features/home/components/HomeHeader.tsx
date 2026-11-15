export function HomeHeader() {
  return (
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
  );
}
