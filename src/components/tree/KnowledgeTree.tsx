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
        });
        edges.push({
          id: 'e-' + e.id,
          source: active,
          target: e.id,
          animated: true,
        });
      });
    return { nodes, edges };
  }, [active]);
  const [selected, setSelected] = useState<string>();
  const entry = entries.find((e) => e.id === selected);
  return (
    <>
      <div className="tree-layout">
        <div
          className="tree-canvas"
          role="region"
          aria-label="Interactive knowledge tree. Tab to nodes, press Enter to select; use controls to zoom."
        >
          <ReactFlow
            nodes={graph.nodes}
            edges={graph.edges}
            fitView
            minZoom={0.25}
            onNodeClick={(_, node) => {
              if (branches.some((b) => b.id === node.id)) {
                setActive(node.id);
                setSelected(undefined);
              } else setSelected(node.id);
            }}
            nodesDraggable={false}
          >
            <Background color="#b39477" gap={22} />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>
        <aside className="tree-panel">
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
            <button onClick={() => setActive(b.id)}>{b.title}</button>
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
