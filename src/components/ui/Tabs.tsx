import { useId, useRef } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import './Tabs.css';

export interface TabItem<Id extends string> {
  id: Id;
  label: string;
}

interface TabsProps<Id extends string> {
  ariaLabel: string;
  children: ReactNode;
  items: readonly TabItem<Id>[];
  onSelect: (id: Id) => void;
  selectedId: Id;
}

export function Tabs<Id extends string>({
  ariaLabel,
  children,
  items,
  onSelect,
  selectedId,
}: TabsProps<Id>) {
  const idPrefix = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const currentIndex = items.findIndex((item) => item.id === event.currentTarget.dataset.tabId);
    let nextIndex: number | undefined;

    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % items.length;
        break;
      case 'ArrowLeft':
        nextIndex = (currentIndex - 1 + items.length) % items.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = items.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const nextItem = items[nextIndex];
    tabRefs.current[nextIndex]?.focus();
    onSelect(nextItem.id);
  }

  return (
    <>
      <div aria-label={ariaLabel} className="tab-list" role="tablist">
        {items.map((item, index) => (
          <button
            aria-controls={`${idPrefix}-panel-${item.id}`}
            aria-selected={selectedId === item.id}
            className="tab-button"
            data-tab-id={item.id}
            id={`${idPrefix}-tab-${item.id}`}
            key={item.id}
            onClick={() => onSelect(item.id)}
            onKeyDown={handleKeyDown}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            role="tab"
            tabIndex={selectedId === item.id ? 0 : -1}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      {items.map((item) => {
        const isSelected = selectedId === item.id;

        return (
          <div
            aria-labelledby={`${idPrefix}-tab-${item.id}`}
            className="tab-panel"
            hidden={!isSelected}
            id={`${idPrefix}-panel-${item.id}`}
            key={item.id}
            role="tabpanel"
            tabIndex={0}
          >
            {isSelected ? children : null}
          </div>
        );
      })}
    </>
  );
}
