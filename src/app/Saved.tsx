import { Link } from 'react-router-dom';
import { useLearningStore } from '../store/useLearningStore';
import { entries, branches } from '../content/catalog';
export default function Saved() {
  const { bookmarks, completed, scores, toggleBookmark } = useLearningStore();
  const saved = entries.filter((e) => bookmarks.includes(e.id));
  return (
    <section className="page">
      <span className="devanagari">मेरो यात्रा</span>
      <h1>Your path through the collection</h1>
      <p className="lede">
        Pick up a saved chapter or see how far your curiosity has taken you.
      </p>
      <div className="progress-grid">
        {branches.map((b) => {
          const all = entries.filter((e) => e.branch === b.id);
          const done = all.filter((e) => completed.includes(e.id)).length;
          return (
            <div className="entry-card" key={b.id}>
              <Link to={'/branch/' + b.id}>
                <h3>{b.title}</h3>
              </Link>
              <label htmlFor={'progress-' + b.id}>
                {done} of {all.length} completed
              </label>
              <progress
                id={'progress-' + b.id}
                value={done}
                max={all.length || 1}
              />
              <p>
                Quiz best:{' '}
                {scores[b.id] === undefined ? 'Not taken' : scores[b.id] + '/3'}
              </p>
            </div>
          );
        })}
      </div>
      <h2>Saved chapters</h2>
      {saved.length ? (
        <div className="entry-grid">
          {saved.map((e) => (
            <div className="entry-card" key={e.id}>
              <Link to={'/read/' + e.id}>
                <h3>{e.title}</h3>
                <p>{e.summary}</p>
              </Link>
              <button
                className="text-link"
                onClick={() => toggleBookmark(e.id)}
                aria-label={'Remove ' + e.title + ' from saved chapters'}
              >
                Remove bookmark
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="entry-card">
          <h3>Your next discovery belongs here.</h3>
          <p>Use “Save chapter” on any entry to keep it for later.</p>
          <Link className="button" to="/explore">
            Explore the tree
          </Link>
        </div>
      )}
    </section>
  );
}
