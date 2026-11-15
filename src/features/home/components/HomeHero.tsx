import coconutCanopy from '../../../assets/coconut-canopy.jpg';

interface HomeHeroProps {
  onSupportClick: () => void;
}

export function HomeHero({ onSupportClick }: HomeHeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-kicker">A practical, self-funded mission</p>
        <h1 id="hero-title">
          Protect forests.
          <br />
          <span>Share what works.</span>
        </h1>
        <p className="hero-description">
          Starting in Thailand and built for responsible global replication.
        </p>
        <button className="hero-button" type="button" onClick={onSupportClick}>
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
  );
}
