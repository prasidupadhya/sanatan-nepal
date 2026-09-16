import type { KeyboardEvent } from 'react';
/** React Flow's built-in Enter selects nodes; also open their content. */
export function activateGraphNode(
  event: KeyboardEvent,
  select: (id: string) => void,
) {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  const node = (event.target as HTMLElement).closest<HTMLElement>(
    '.react-flow__node',
  );
  const id = node?.dataset.id;
  if (!id) return;
  event.preventDefault();
  event.stopPropagation();
  select(id);
}
