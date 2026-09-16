import { activateGraphNode } from './keyboard';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactFlow, Background, Controls, type Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
export type Person = {
  id: string;
  title: string;
  bio: string;
  x: number;
  y: number;
};
export type Relation = { source: string; target: string; kind: string };
export default function FamilyTree({
  people,
  relations,
  title,
}: {
  people: Person[];
  relations: Relation[];
  title: string;
}) {
  const [selected, setSelected] = useState(people[0].id);
  const [filter, setFilter] = useState('all');
  const person = people.find((p) => p.id === selected)!;
  const edges: Edge[] = relations
    .filter((r) => filter === 'all' || r.kind === filter)
    .map((r, i) => ({
      id: String(i),
      source: r.source,
      target: r.target,
      label: r.kind,
      animated: r.source === selected || r.target === selected,
      style: {
        strokeWidth: r.source === selected || r.target === selected ? 3 : 1,
        strokeDasharray: r.kind === 'marriage' ? '6 4' : undefined,
      },
    }));
  return (
    <section className="family">
      <h2>{title}</h2>
      <p>
        Select a person to illuminate their relationships. Dashed lines show
        marriages; other labels distinguish lineage, parentage and teaching.
      </p>
      <label className="field">
        Show relationships{' '}
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All relationships</option>
          {[...new Set(relations.map((r) => r.kind))].map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
      </label>
      <div className="tree-layout">
        <div
          className="tree-canvas"
          onKeyDownCapture={(event) => activateGraphNode(event, setSelected)}
          role="region"
          aria-label={title + '; keyboard and zoom controls available'}
        >
          <ReactFlow
            nodes={people.map((p) => ({
              id: p.id,
              position: { x: p.x, y: p.y },
              data: { label: p.title },
              className: p.id === selected ? 'active-node' : '',
            }))}
            edges={edges}
            fitView
            minZoom={0.15}
            nodesDraggable={false}
            onNodeClick={(_, n) => setSelected(n.id)}
          >
            <Background />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>
        <aside className="tree-panel" aria-live="polite">
          <h3>{person.title}</h3>
          <p>{person.bio}</p>
          <Link className="text-link" to={'/read/' + person.id}>
            Read biography
          </Link>
          {relations
            .filter((r) => r.source === selected || r.target === selected)
            .map((r, i) => (
              <p key={i}>
                {r.kind}:{' '}
                <button
                  className="text-link"
                  onClick={() =>
                    setSelected(r.source === selected ? r.target : r.source)
                  }
                >
                  {
                    people.find(
                      (p) =>
                        p.id === (r.source === selected ? r.target : r.source),
                    )?.title
                  }
                </button>
              </p>
            ))}
        </aside>
      </div>
      <details className="accessible-index">
        <summary>Choose a person from a list</summary>
        <div>
          {people.map((p) => (
            <button key={p.id} onClick={() => setSelected(p.id)}>
              {p.title}
            </button>
          ))}
        </div>
      </details>
    </section>
  );
}
