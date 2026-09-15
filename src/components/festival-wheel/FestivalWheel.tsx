import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { festivals } from '../../content/nepali-hinduism/festivals';
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export default function FestivalWheel() {
  const [active, setActive] = useState(5);
  const [rotation, setRotation] = useState(0);
  const f = festivals[active];
  function choose(i: number) {
    setActive((i + festivals.length) % festivals.length);
    setRotation((r) => r + 30);
  }
  return (
    <section className="festival">
      <h2>The year turns. Traditions return.</h2>
      <p>
        Seasonal positions are approximate. Lunar dates change each year;
        consult a local calendar for exact observances.
      </p>
      <div className="festival-layout">
        <div>
          <svg
            viewBox="0 0 600 600"
            className="year-wheel"
            role="group"
            aria-label="Festival wheel; select a festival or use the list below"
          >
            <circle
              cx="300"
              cy="300"
              r="255"
              fill="var(--surface)"
              stroke="var(--line)"
            />
            <circle
              cx="300"
              cy="300"
              r="193"
              fill="none"
              stroke="var(--line)"
            />
            <motion.g
              animate={{ rotate: rotation }}
              style={{ transformOrigin: '300px 300px' }}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <path
                  key={i}
                  d="M300 135 Q345 200 300 242 Q255 200 300 135"
                  fill="none"
                  stroke="var(--line)"
                  transform={`rotate(${i * 15} 300 300)`}
                />
              ))}
            </motion.g>
            {months.map((m, i) => {
              const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
              return (
                <text
                  key={m}
                  x={300 + 225 * Math.cos(a)}
                  y={306 + 225 * Math.sin(a)}
                  textAnchor="middle"
                  fill="var(--muted)"
                  fontSize="14"
                >
                  {m}
                </text>
              );
            })}
            {festivals.map((f, i) => {
              const a = (f.month / 12) * Math.PI * 2 - Math.PI / 2;
              const r = i % 2 ? 181 : 143;
              const x = 300 + r * Math.cos(a),
                y = 300 + r * Math.sin(a);
              return (
                <g
                  key={f.id}
                  role="button"
                  tabIndex={0}
                  aria-label={f.title}
                  aria-pressed={active === i}
                  onClick={() => choose(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      choose(i);
                    }
                  }}
                >
                  <circle
                    cx={x}
                    cy={y}
                    r="22"
                    fill={active === i ? 'var(--accent)' : 'var(--shell)'}
                    stroke="var(--gold)"
                    strokeWidth="2"
                  />
                  <text
                    x={x}
                    y={y + 5}
                    textAnchor="middle"
                    fill="#fff7e7"
                    fontSize="13"
                  >
                    {i + 1}
                  </text>
                  <title>
                    {f.title}: {f.season}
                  </title>
                </g>
              );
            })}
            <text
              x="300"
              y="293"
              textAnchor="middle"
              fill="var(--accent)"
              fontSize="37"
            >
              पर्व
            </text>
            <text
              x="300"
              y="323"
              textAnchor="middle"
              fill="var(--muted)"
              fontSize="12"
            >
              A living calendar
            </text>
          </svg>
          <div className="actions">
            <button className="button" onClick={() => choose(active - 1)}>
              Previous festival
            </button>
            <button className="button" onClick={() => choose(active + 1)}>
              Next festival
            </button>
          </div>
        </div>
        <div className="gita-reading" aria-live="polite">
          <span className="devanagari">{f.devanagari}</span>
          <h3>{f.title}</h3>
          <span className="step">{f.season}</span>
          <p>{f.summary}</p>
          <h4>Rituals</h4>
          <p>{f.ritual}</p>
          <h4>Across communities</h4>
          <p>{f.variation}</p>
          <Link className="button" to={'/read/' + f.id}>
            Read festival chapter
          </Link>
        </div>
      </div>
      <div className="chips" role="group" aria-label="Select a festival">
        {festivals.map((f, i) => (
          <button
            key={f.id}
            aria-pressed={active === i}
            onClick={() => choose(i)}
          >
            {i + 1}. {f.title}
          </button>
        ))}
      </div>
    </section>
  );
}
