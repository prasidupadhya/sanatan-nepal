import { activateGraphNode } from './keyboard';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ReactFlow,
  Background,
  Controls,
  type Node,
  type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { branches, entries } from '../../content/catalog';
export default function KnowledgeTree() {
  const [active, setActive] = useState('nepal');
  const [selected, setSelected] = useState<string>();
  const entry = entries.find((e) => e.id === selected);
  const graph = useMemo(() => {
    const nodes: Node[] = [
      {
        id: 'root',
        position: { x: 420, y: 20 },
        data: { label: 'सनातन नेपाल' },
        className: 'root-node',
      },
    ];
    const edges: Edge[] = [];
    branches.forEach((b, i) => {
      nodes.push({
        id: b.id,
        position: { x: i * 210, y: 180 },
        data: { label: b.title },
        className: b.id === active ? 'active-node' : '',
      });
      edges.push({
        id: b.id,
        source: 'root',
        target: b.id,
        animated: b.id === active,
      });
    });
    entries
      .filter((e) => e.branch === active)
      .forEach((e, i) => {
        nodes.push({
          id: e.id,
          position: { x: (i % 5) * 210, y: 340 + Math.floor(i / 5) * 100 },
          data: { label: e.title },
          className: e.id === selected ? 'active-node' : '',
        });
        edges.push({
          id: 'e-' + e.id,
          source: active,
          target: e.id,
          animated: e.id === selected,
        });
      });
    const selectedEntry = entries.find((e) => e.id === selected);
    const related = selectedEntry?.related ?? [];
    related.forEach((id, i) => {
      const relatedEntry = entries.find((e) => e.id === id);
      if (!relatedEntry) return;
      if (!nodes.some((n) => n.id === id))
        nodes.push({
          id,
          position: { x: 1100, y: 200 + i * 120 },
          data: { label: relatedEntry.title },
          className: 'related-node',
        });
      edges.push({
        id: 'related-' + id,
        source: selected!,
        target: id,
        label: 'related',
        animated: true,
        style: { strokeWidth: 3, strokeDasharray: '5 4' },
      });
    });
    return { nodes, edges };
  }, [active, selected]);
  function selectNode(id: string) {
    if (branches.some((b) => b.id === id)) {
      setActive(id);
      setSelected(undefined);
    } else if (id === 'root') {
      setSelected(undefined);
    } else {
      const clicked = entries.find((e) => e.id === id);
      if (clicked && clicked.branch !== active) setActive(clicked.branch);
      setSelected(id);
    }
  }
  return (
    <>
      <div className="tree-layout">
        <div
          className="tree-canvas"
          onKeyDownCapture={(event) => activateGraphNode(event, selectNode)}
          role="region"
          aria-label="Interactive knowledge tree. Tab to nodes, press Enter to select; use controls to zoom."
        >
          <ReactFlow
            key={active}
            nodes={graph.nodes}
            edges={graph.edges}
            fitView
            minZoom={0.25}
            onNodeClick={(_, node) => selectNode(node.id)}
            nodesDraggable={false}
          >
            <Background color="#b39477" gap={22} />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>
        <aside className="tree-panel" aria-live="polite">
          <span className="devanagari">
            {branches.find((b) => b.id === active)?.devanagari}
          </span>
          <h2>
            {entry?.title ?? branches.find((b) => b.id === active)?.title}
          </h2>
          <p>
            {entry?.summary ?? branches.find((b) => b.id === active)?.summary}
          </p>
          {entry ? (
            <>
              <Link className="button" to={'/read/' + entry.id}>
                Open this chapter
              </Link>
              <h3>Connected ideas</h3>
              {entry.related?.map((id) => (
                <Link className="text-link" key={id} to={'/read/' + id}>
                  {entries.find((e) => e.id === id)?.title ?? id}
                </Link>
              ))}
            </>
          ) : (
            <Link className="button" to={'/branch/' + active}>
              Explore this branch
            </Link>
          )}
          <small>
            Pan to wander. Zoom to see connections. Select a branch to unfold
            it.
          </small>
        </aside>
      </div>
      <details className="accessible-index">
        <summary>Browse the tree as a list</summary>
        {branches.map((b) => (
          <div key={b.id}>
            <button
              onClick={() => {
                setActive(b.id);
                setSelected(undefined);
              }}
            >
              {b.title}
            </button>
            {entries
              .filter((e) => e.branch === b.id)
              .map((e) => (
                <Link key={e.id} to={'/read/' + e.id}>
                  {e.title}
                </Link>
              ))}
          </div>
        ))}
      </details>
    </>
  );
}
