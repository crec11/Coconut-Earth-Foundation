import type { TabItem } from '../../components/ui/Tabs';

export const homeTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'approach', label: 'Our approach' },
  { id: 'progress', label: 'Progress' },
  { id: 'impact', label: 'Impact' },
  { id: 'support', label: 'Support' },
  { id: 'due-diligence', label: 'Due diligence' },
] as const satisfies readonly TabItem<string>[];

export type HomeTabId = (typeof homeTabs)[number]['id'];
