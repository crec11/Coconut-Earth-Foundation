import type { ReactNode } from 'react';

interface DisclosureProps {
  children: ReactNode;
  summary: string;
}

export function Disclosure({ children, summary }: DisclosureProps) {
  return (
    <details className="detail-disclosure">
      <summary>{summary}</summary>
      <div className="disclosure-content">{children}</div>
    </details>
  );
}
