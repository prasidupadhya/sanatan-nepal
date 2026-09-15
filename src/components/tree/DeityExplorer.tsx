import { activateGraphNode } from './keyboard';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { entries } from '../../content/catalog';
const groups = {
  shiva: ['shiva', 'parvati', 'ganesha', 'kartikeya', 'bhairava', 'ravana'],
  vishnu: [
    'vishnu',
    'matsya',
    'kurma',
    'varaha',
    'narasimha',
    'vamana',
    'parashurama',
    'rama',
    'krishna',
    'buddha-avatar',
    'kalki',
  ],
  devi: ['devi', 'parvati', 'durga', 'kali', 'lakshmi', 'saraswati', 'taleju'],
};
export default function DeityExplorer({ id }: { id: string }) {
  const key = id === 'dashavatara' ? 'vishnu' : (id as keyof typeof groups);
  const ids = groups[key] ?? groups.shiva;
  const [selected, setSelected] = useState(ids[0]);
  const entry = entries.find((e) => e.id === selected)!;
  return (
    <section>
      <h2>
        {key === 'shiva'
          ? 'Shiva’s family and connections'
          : key === 'vishnu'
            ? 'Explore the Dashavatara'
            : 'Forms of the Goddess'}
      </h2>
      <p>
        {key === 'shiva'
          ? 'Family, manifestation and devotion are different kinds of connection.'
          : 'These lines show manifestations and associations, not biological parentage.'}
      </p>
      <div className="tree-layout">
        <div
          className="tree-canvas"
          onKeyDownCapture={(event) => activateGraphNode(event, setSelected)}
        >
          <ReactFlow
            fitView
            nodesDraggable={false}
            nodes={ids.map((id, i) => ({
              id,
              position:
                i === 0
                  ? { x: 350, y: 0 }
                  : {
                      x: ((i - 1) % 4) * 230,
                      y: 170 + Math.floor((i - 1) / 4) * 150,
                    },
              data: { label: entries.find((e) => e.id === id)?.title },
              className: selected === id ? 'active-node' : '',
            }))}
            edges={ids.slice(1).map((id) => ({
              id,
              source: ids[0],
              target: id,
              label:
                key === 'shiva'
                  ? id === 'parvati'
                    ? 'consort'
                    : ['ganesha', 'kartikeya'].includes(id)
                      ? 'child'
                      : id === 'ravana'
                        ? 'devotee'
                        : 'manifestation'
                  : 'form / avatar',
              animated: selected === id || selected === ids[0],
            }))}
            onNodeClick={(_, n) => setSelected(n.id)}
          >
            <Background />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>
        <aside className="tree-panel" aria-live="polite">
          <h3>{entry.title}</h3>
          <p>{entry.summary}</p>
          <Link className="button" to={'/read/' + entry.id}>
            Open chapter
          </Link>
        </aside>
      </div>
      <div className="chips">
        {ids.map((id) => (
          <button
            key={id}
            onClick={() => setSelected(id)}
            aria-pressed={id === selected}
          >
            {entries.find((e) => e.id === id)?.title}
          </button>
        ))}
      </div>
    </section>
  );
}
