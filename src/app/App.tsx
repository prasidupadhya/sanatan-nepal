import ThemeControl from '../components/ui/ThemeControl';
import { lazy, Suspense, useEffect } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { GitBranch, MapPin, Search, Bookmark } from 'lucide-react';
import { MotionConfig } from 'framer-motion';
import Home from './Home';
import LoadingContent from '../components/ui/LoadingContent';
import ContentBoundary from '../components/ui/ContentBoundary';
import { Branch, Reading, NotFound } from './Reading';
const SearchPage = lazy(() => import('./SearchPage'));
const Saved = lazy(() => import('./Saved'));
const TempleMap = lazy(() => import('../components/map/TempleMap'));
const KnowledgeTree = lazy(() => import('../components/tree/KnowledgeTree'));
function ScrollReset() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
    document.title =
      'Sanatan Nepal — ' +
      (pathname === '/'
        ? 'Hindu traditions in Nepal'
        : pathname.split('/').pop()?.replaceAll('-', ' '));
  }, [pathname, hash]);
  return null;
}
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollReset />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="brand" to="/">
          <span className="brand-mark">ॐ</span>
          <span>
            Sanatan Nepal<small>सनातन नेपाल</small>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <NavLink to="/explore">
            <GitBranch size={16} />
            Explore
          </NavLink>
          <NavLink to="/branch/nepal">Nepali traditions</NavLink>
          <NavLink to="/temples">
            <MapPin size={16} />
            Sacred places
          </NavLink>
        </nav>
        <div className="header-tools">
          <Link to="/search" aria-label="Search">
            <Search size={19} />
          </Link>
          <Link to="/saved" aria-label="Saved chapters">
            <Bookmark size={19} />
          </Link>
          <ThemeControl />
        </div>
      </header>
      <main id="main">
        <ContentBoundary>
          <Suspense fallback={<LoadingContent />}>
            <Routes>
              <Route path="/search" element={<SearchPage />} />
              <Route path="/saved" element={<Saved />} />
              <Route
                path="/temples"
                element={
                  <section className="page">
                    <span className="devanagari">नेपालका मन्दिर</span>
                    <h1>Sacred places of Nepal</h1>
                    <TempleMap />
                  </section>
                }
              />
              <Route path="/" element={<Home />} />
              <Route
                path="/explore"
                element={
                  <section className="page">
                    <div className="section-heading">
                      <div>
                        <span className="devanagari">ज्ञानवृक्ष</span>
                        <h1>The knowledge tree</h1>
                      </div>
                      <p>
                        Select a topic to read its summary and see related
                        traditions.
                      </p>
                    </div>
                    <KnowledgeTree />
                  </section>
                }
              />
              <Route path="/branch/:id" element={<Branch />} />
              <Route path="/read/:id" element={<Reading />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ContentBoundary>
      </main>
      <footer>
        <Link className="brand" to="/">
          सनातन नेपाल
        </Link>
        <p>Scriptures, sacred places and Hindu traditions in Nepal.</p>
        <Link to="/explore">Explore the knowledge tree</Link>
      </footer>
    </MotionConfig>
  );
}
