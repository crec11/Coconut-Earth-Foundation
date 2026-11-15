interface PanelIntroProps {
  children: string;
  eyebrow: string;
  title: string;
}

export function PanelIntro({ children, eyebrow, title }: PanelIntroProps) {
  return (
    <div className="panel-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="panel-lead">{children}</p>
    </div>
  );
}
