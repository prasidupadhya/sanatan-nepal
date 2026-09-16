import { Link } from 'react-router-dom';
import { ArrowUpRight, GitBranch, MapPin, BookOpen } from 'lucide-react';
import Mandala from '../components/ui/Mandala';
import { branches } from '../content/catalog';
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="devanagari">अथ ज्ञानयात्रा</span>
          <h1>
            Many paths.
            <br />
            One living heritage.
          </h1>
          <p>
            Journey through the scriptures, sacred places, and living traditions
            of Hindu Nepal. Follow a story. Find a connection. Make your own
            way.
          </p>
          <div className="actions">
            <Link className="button gold" to="/explore">
              <GitBranch size={18} /> Explore the knowledge tree
            </Link>
            <Link className="quiet-link" to="/branch/nepal">
              Begin in Nepal <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div className="hero-art">
          <Mandala />
          <span>A world of connections</span>
        </div>
        <div className="hero-bottom">
          <span>Rooted in Nepal. Connected across traditions.</span>
          <span>Scroll to discover ↓</span>
        </div>
      </section>
      <section className="intro-row">
        <div>
          <span className="devanagari">अन्वेषण</span>
          <h2>Where will your curiosity take you?</h2>
        </div>
        <p>
          Five branches, countless connections.
          <br />
          Every starting point opens a different world.
        </p>
      </section>
      <div className="branch-grid">
        {branches.map((b) => (
          <Link
            className={'branch-card ' + (b.id === 'nepal' ? 'nepal-card' : '')}
            key={b.id}
            to={'/branch/' + b.id}
          >
            <span className="branch-symbol">{b.symbol}</span>
            <span className="devanagari">{b.devanagari}</span>
            <h3>{b.title}</h3>
            <p>{b.summary}</p>
            <ArrowUpRight className="card-arrow" size={22} />
          </Link>
        ))}
      </div>
      <section className="nepal-feature">
        <div className="pagoda-art" aria-hidden="true">
          <svg viewBox="0 0 500 370">
            <path
              d="M0 300 75 240 140 280 225 165 315 270 390 200 500 290V370H0"
              fill="#79554b"
            />
            <g fill="#e0b66c" stroke="#421d27" strokeWidth="5">
              <path d="M238 90V50h24v40M200 142h100v55H200M175 221h150v73H175" />
              <path d="M145 148q70-12 105-71 35 59 105 71l-15 13H160zM105 225q95-13 145-68 50 55 145 68l-20 14H125zM75 300q120-14 175-66 55 52 175 66l-20 14H95z" />
              <path d="M140 314h220v43H140M235 317h30v40" />
            </g>
          </svg>
        </div>
        <div>
          <span className="devanagari">जीवित परम्परा</span>
          <h2>
            Here, heritage is
            <br />a way of life.
          </h2>
          <p>
            In the Kathmandu Valley, a goddess rides a chariot, Hindu and
            Buddhist devotees share sacred spaces, and festivals turn streets
            into stories.
          </p>
          <Link className="button" to="/branch/nepal">
            Discover Nepal’s living traditions <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="quick-paths">
        <Link to="/explore">
          <GitBranch />
          <h3>See the connections</h3>
          <p>Unfold the knowledge tree</p>
        </Link>
        <Link to="/read/ramayana">
          <BookOpen />
          <h3>Step into a story</h3>
          <p>Follow the Ramayana</p>
        </Link>
        <Link to="/temples">
          <MapPin />
          <h3>Find a sacred place</h3>
          <p>Explore the temple map</p>
        </Link>
      </section>
    </>
  );
}
