import { useSearchParams, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { entries } from '../../content/catalog';
import Mandala from '../ui/Mandala';

const topics = [
  { id: 'pashupatinath', label: 'Pashupatinath', script: 'पशुपतिनाथ' },
  { id: 'kumari', label: 'Kumari', script: 'कुमारी' },
  { id: 'newar-hinduism', label: 'Newar traditions', script: 'नेवार परम्परा' },
  { id: 'festivals', label: 'Festivals', script: 'चाडपर्व' },
];

export default function NepalPreview() {
  const [params, setParams] = useSearchParams();
  const reducedMotion = useReducedMotion();
  const selected =
    topics.find((topic) => topic.id === params.get('topic')) ?? topics[0];
  const entry = entries.find((item) => item.id === selected.id)!;
  return (
    <div className="nepal-preview">
      <div
        className="preview-map"
        role="group"
        aria-label="Explore Nepali traditions"
      >
        <Mandala />
        <svg
          viewBox="0 0 480 300"
          preserveAspectRatio="none"
          className="preview-lines"
          aria-hidden="true"
        >
          <path d="M240 150 L105 60 M240 150 L365 60 M240 150 L105 245 M240 150 L365 245" />
        </svg>
        <span className="preview-center" lang="ne">
          नेपाल
        </span>
        {topics.map((topic, index) => (
          <button
            key={topic.id}
            className={'preview-node node-' + index}
            aria-pressed={selected.id === topic.id}
            aria-controls="preview-detail"
            onClick={() => {
              const next = new URLSearchParams(params);
              next.set('topic', topic.id);
              setParams(next, { replace: true, preventScrollReset: true });
            }}
          >
            {selected.id === topic.id && (
              <motion.span
                className="node-selection"
                layoutId="nepal-selection"
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 320, damping: 28 }
                }
              />
            )}
            <span lang="ne">{topic.script}</span>
            <strong>{topic.label}</strong>
          </button>
        ))}
      </div>
      <div
        className="preview-detail"
        id="preview-detail"
        aria-live="polite"
        aria-atomic="true"
      >
        <h2>{entry.title}</h2>
        <p>{entry.summary}</p>
        <Link to={'/read/' + entry.id}>
          Explore {selected.label} <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
      <p className="preview-hint">Select a topic to see where it leads.</p>
    </div>
  );
}
