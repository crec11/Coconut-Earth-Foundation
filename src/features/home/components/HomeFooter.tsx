interface HomeFooterProps {
  onDueDiligenceClick: () => void;
}

export function HomeFooter({ onDueDiligenceClick }: HomeFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <p>
          <strong>Donor due diligence:</strong> Confirm the receiving entity, donation terms, and
          any tax deductibility before contributing.
        </p>
        <button className="footer-link" type="button" onClick={onDueDiligenceClick}>
          Read the safety and due diligence notes <span aria-hidden="true">→</span>
        </button>
      </div>
      <p className="site-credit">Website designed by Chris Crellin.</p>
    </footer>
  );
}
