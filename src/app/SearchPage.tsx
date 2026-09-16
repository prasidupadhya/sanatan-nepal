import { Link, useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { searchEntries } from '../content/search';
import { branches } from '../content/catalog';
export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const results = searchEntries(query);
  return (
    <section className="page search-page">
      <span className="devanagari">खोज</span>
      <h1>Follow a question.</h1>
      <p className="lede">
        Find a scripture, deity, place or idea. Different spellings can lead to
        the same discovery.
      </p>
      <label htmlFor="search-input" className="sr-only">
        Search the encyclopedia
      </label>
      <div className="search-field">
        <Search />
        <input
          id="search-input"
          autoFocus
          type="search"
          value={query}
          placeholder="Try Ravan, Kumari, Dharma…"
          onChange={(e) =>
            setParams(e.target.value ? { q: e.target.value } : {}, {
              replace: true,
            })
          }
        />
      </div>
      <p role="status">
        {query
          ? results.length + ' results for “' + query + '”'
          : 'A few paths to begin with'}
      </p>
      {!query ? (
        <div className="chips">
          {['Kumari', 'Gita', 'Ravan', 'धर्म', 'Tihar'].map((q) => (
            <button key={q} onClick={() => setParams({ q }, { replace: true })}>
              {q}
            </button>
          ))}
        </div>
      ) : results.length ? (
        <div className="search-results">
          {results.map((e) => (
            <Link to={'/read/' + e.id} key={e.id}>
              <span className="step">
                {branches.find((b) => b.id === e.branch)?.title}
              </span>
              <h2>
                {e.title} <span className="devanagari">{e.devanagari}</span>
              </h2>
              <p>{e.summary}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="entry-card">
          <h2>No path found yet.</h2>
          <p>
            Try a shorter word or another spelling, or browse the knowledge
            tree.
          </p>
          <Link className="button" to="/explore">
            Explore the tree
          </Link>
        </div>
      )}
    </section>
  );
}
