interface HomeFooterProps {
  onDueDiligenceClick: () => void;
}

export function HomeFooter({ onDueDiligenceClick }: HomeFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <p>
          <strong>Before committing funds:</strong> Verify the receiving entity, contribution terms,
          and any tax treatment directly with the Foundation and an appropriate adviser.
        </p>
        <button className="footer-link" type="button" onClick={onDueDiligenceClick}>
          Read the safety and due diligence notes <span aria-hidden="true">→</span>
        </button>
      </div>
      <p className="site-credit">Website created by Chris Crellin.</p>
    </footer>
  );
}
