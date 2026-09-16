import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { entries } from '../../content/catalog';
import { searchEntries } from '../../content/search';

export default function TopicIndex({ branch }: { branch: string }) {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const topics = (query.trim() ? searchEntries(query) : entries).filter(
    (entry) => entry.branch === branch,
  );
  return (
    <section className="topic-index" aria-label="Topics in this section">
      <div className="index-toolbar">
        <div>
          <label htmlFor="topic-filter">Find a topic in this section</label>
          <input
            id="topic-filter"
            type="search"
            value={query}
            placeholder="Filter by name or alternate spelling"
            onChange={(event) => {
              const next = new URLSearchParams(params);
              if (event.target.value) next.set('q', event.target.value);
              else next.delete('q');
              setParams(next, { replace: true, preventScrollReset: true });
            }}
          />
        </div>
        <p role="status">
          {topics.length} {topics.length === 1 ? 'topic' : 'topics'}
        </p>
      </div>
      {topics.length ? (
        <div className="topic-rows">
          {topics.map((entry) => (
            <Link key={entry.id} to={'/read/' + entry.id}>
              <h2>{entry.title}</h2>
              <p>{entry.summary}</p>
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          ))}
        </div>
      ) : (
        <div className="index-empty">
          <h2>No matching topics in this section</h2>
          <p>
            Try a shorter name, clear the filter, or search the whole
            encyclopedia.
          </p>
          <button
            className="button"
            onClick={() => {
              const next = new URLSearchParams(params);
              next.delete('q');
              setParams(next, { replace: true });
            }}
          >
            Clear filter
          </button>
          <Link to={'/search?q=' + encodeURIComponent(query)}>
            Search all topics
          </Link>
        </div>
      )}
    </section>
  );
}
