import { Link } from 'react-router-dom';
import { ArrowRight, GitBranch, Search } from 'lucide-react';
import { branches, entries } from '../content/catalog';
import NepalPreview from '../components/home/NepalPreview';

export default function Home() {
  return (
    <>
      <section className="discovery-hero">
        <div className="discovery-copy">
          <h1>
            Hindu traditions,
            <br />
            as lived in <em>Nepal.</em>
          </h1>
          <p>
            Explore the scriptures alongside the temples, festivals and
            communities that give them a place in Nepali life.
          </p>
          <form action="/search" className="home-search" role="search">
            <label htmlFor="home-query">
              What would you like to understand?
            </label>
            <div>
              <Search size={20} aria-hidden="true" />
              <input
                id="home-query"
                name="q"
                type="search"
                placeholder="Try Kumari, Shiva or धर्म"
                required
              />
              <button type="submit" aria-label="Search the encyclopedia">
                <ArrowRight size={22} />
              </button>
            </div>
          </form>
          <Link className="hero-tree-link" to="/explore">
            <GitBranch size={18} /> Open the full knowledge tree{' '}
            <ArrowRight size={18} />
          </Link>
        </div>
        <NepalPreview />
      </section>
      <section className="home-library" aria-labelledby="library-title">
        <div className="library-intro">
          <h2 id="library-title">Browse the encyclopedia</h2>
          <p>
            Start with a tradition you know, or follow a connection to something
            unfamiliar. Each topic includes sources for further reading.
          </p>
          <span className="library-script" lang="ne">
            सनातन नेपाल
          </span>
        </div>
        <div className="branch-index">
          {branches.map((branch) => (
            <Link key={branch.id} to={'/branch/' + branch.id}>
              <div>
                <h3>{branch.title}</h3>
                <p>{branch.summary}</p>
              </div>
              <span className="topic-count">
                {entries.filter((entry) => entry.branch === branch.id).length}{' '}
                topics <ArrowRight size={18} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="reading-routes" aria-labelledby="routes-title">
        <div className="route-intro">
          <h2 id="routes-title">Choose how to explore</h2>
          <p>Follow a narrative, compare teachings, or locate a temple.</p>
        </div>
        <Link to="/read/ramayana">
          <span>Story & family tree</span>
          <h3>Follow Rama's journey</h3>
          <p>
            Seven Kandas, a lineage explorer and a map of the exile tradition.
          </p>
          <ArrowRight aria-hidden="true" />
        </Link>
        <Link to="/read/bhagavad-gita">
          <span>Chapter explorer</span>
          <h3>Read the Gita, one chapter at a time</h3>
          <p>Summaries and verse paraphrases for all eighteen chapters.</p>
          <ArrowRight aria-hidden="true" />
        </Link>
        <Link to="/temples">
          <span>Temple map</span>
          <h3>Locate Nepal's sacred places</h3>
          <p>Explore Pashupatinath, Muktinath and three more temple sites.</p>
          <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
