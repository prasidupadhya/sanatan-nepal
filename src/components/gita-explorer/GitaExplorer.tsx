import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { chapters } from '../../content/gita';
export default function GitaExplorer() {
  const [params, setParams] = useSearchParams();
  const raw = Number(params.get('chapter') || 1);
  const selected = Number.isInteger(raw) && raw >= 1 && raw <= 18 ? raw : 1;
  const c = chapters[selected - 1];
  return (
    <section className="gita">
      <h2>Enter the conversation</h2>
      <p>
        Choose a chapter. Follow the dialogue from uncertainty to a considered
        choice.
      </p>
      <div className="gita-layout">
        <div
          className="gita-grid"
          role="group"
          aria-label="Bhagavad Gita chapters"
        >
          {chapters.map((c) => (
            <button
              key={c.number}
              aria-pressed={selected === c.number}
              onClick={() =>
                setParams({ chapter: String(c.number) }, { replace: true })
              }
            >
              <span>{String(c.number).padStart(2, '0')}</span>
              {c.title}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ y: 8 }}
            animate={{ y: 0 }}
            exit={{ y: -8 }}
            className="gita-reading"
            aria-live="polite"
          >
            <span className="devanagari">अध्याय {selected}</span>
            <h3>{c.title}</h3>
            <p>{c.summary}</p>
            <h4>Two verses to reflect on</h4>
            {c.verses.map((v) => (
              <div className="verse" key={v.ref}>
                <span>{v.ref}</span>
                <p>{v.text}</p>
                <small>Original paraphrase</small>
              </div>
            ))}
            <div className="actions">
              <button
                className="button"
                disabled={selected === 1}
                onClick={() =>
                  setParams(
                    { chapter: String(selected - 1) },
                    { replace: true },
                  )
                }
              >
                Previous
              </button>
              <button
                className="button"
                disabled={selected === 18}
                onClick={() =>
                  setParams(
                    { chapter: String(selected + 1) },
                    { replace: true },
                  )
                }
              >
                Next chapter
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
