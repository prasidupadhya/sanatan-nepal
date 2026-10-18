import ThemeControl from '../components/ui/ThemeControl';
import { lazy, Suspense, useEffect } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { GitBranch, MapPin, Search, Bookmark } from 'lucide-react';
import { MotionConfig } from 'framer-motion';
import Home from './Home';
import LoadingContent from '../components/ui/LoadingContent';
import ContentBoundary from '../components/ui/ContentBoundary';
import { Branch, Reading, NotFound } from './Reading';
import { branches, entries } from '../content/catalog';
const pageTitles: Record<string, string> = {
  '/': 'Hindu traditions in Nepal',
  '/explore': 'Knowledge tree',
  '/temples': 'Sacred places',
  '/search': 'Search',
  '/saved': 'Saved chapters',
};
const SearchPage = lazy(() => import('./SearchPage'));
const Saved = lazy(() => import('./Saved'));
const TempleMap = lazy(() => import('../components/map/TempleMap'));
const KnowledgeTree = lazy(() => import('../components/tree/KnowledgeTree'));
function ScrollReset() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
    const slug = pathname.split('/').pop();
    const title =
      pageTitles[pathname] ??
      [...entries, ...branches].find((item) => item.id === slug)?.title ??
      'Page not found';
    document.title = title + ' — Sanatan Nepal';
  }, [pathname, hash]);
  return null;
}
export default function App() {
  const { pathname } = useLocation();
  // Reading a Nepali topic keeps its section marked in the main navigation.
  const readingNepal =
    pathname.startsWith('/read/') &&
    entries.find((entry) => entry.id === pathname.split('/').pop())?.branch ===
      'nepal';
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
            <GitBranch size={16} aria-hidden="true" />
            Explore
          </NavLink>
          <NavLink
            to="/branch/nepal"
            className={({ isActive }) =>
              isActive || readingNepal ? 'active' : undefined
            }
          >
            Nepali traditions
          </NavLink>
          <NavLink to="/temples">
            <MapPin size={16} aria-hidden="true" />
            Sacred places
          </NavLink>
        </nav>
        <div className="header-tools">
          <Link to="/search" aria-label="Search">
            <Search size={19} aria-hidden="true" />
          </Link>
          <Link to="/saved" aria-label="Saved chapters">
            <Bookmark size={19} aria-hidden="true" />
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
