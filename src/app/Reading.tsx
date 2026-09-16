import EntryTools from '../components/ui/EntryTools';
import Quiz from '../components/quiz/Quiz';
import { lazy, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { branches, entries } from '../content/catalog';
const TempleMap = lazy(() => import('../components/map/TempleMap'));
const FestivalWheel = lazy(
  () => import('../components/festival-wheel/FestivalWheel'),
);
const DeityExplorer = lazy(() => import('../components/tree/DeityExplorer'));
const TraditionExplorer = lazy(
  () => import('../components/nepal/TraditionExplorer'),
);
const GitaExplorer = lazy(
  () => import('../components/gita-explorer/GitaExplorer'),
);
const RamayanaExplorer = lazy(
  () => import('../components/epics/RamayanaExplorer'),
);
const MahabharataExplorer = lazy(
  () => import('../components/epics/MahabharataExplorer'),
);
export function Branch() {
  const { id } = useParams();
  const b = branches.find((e) => e.id === id);
  if (!b) return <NotFound />;
  return (
    <section className="page">
      <Link to="/explore">Knowledge tree</Link>
      <span className="devanagari">{b.devanagari}</span>
      <h1>{b.title}</h1>
      <p className="lede">{b.summary}</p>
      <div className="entry-grid">
        {entries
          .filter((e) => e.branch === id)
          .map((e) => (
            <Link className="entry-card" key={e.id} to={'/read/' + e.id}>
              <h2>{e.title}</h2>
              <p>{e.summary}</p>
              <span>Explore chapter ↗</span>
            </Link>
          ))}
      </div>
      <Quiz key={id} section={id!} />
    </section>
  );
}
export function Reading() {
  const { id } = useParams();
  const e = entries.find((e) => e.id === id);
  if (!e) return <NotFound />;
  return (
    <article className="page reading">
      <Link to={'/branch/' + e.branch}>
        {branches.find((b) => b.id === e.branch)?.title}
      </Link>
      <span className="devanagari">{e.devanagari}</span>
      <h1>{e.title}</h1>
      <p className="lede">{e.summary}</p>
      <EntryTools id={e.id} />
      {e.sections?.map((s) => (
        <section key={s.title}>
          <h2>{s.title}</h2>
          <p>{s.text}</p>
        </section>
      ))}
      <Suspense fallback={<p>Opening explorer…</p>}>
        {id === 'temples' && <TempleMap />}
        {id === 'festivals' && <FestivalWheel />}
        {['shiva', 'vishnu', 'devi', 'dashavatara'].includes(id ?? '') && (
          <DeityExplorer key={id} id={id!} />
        )}
        {['kumari', 'newar-hinduism', 'monarchy'].includes(id ?? '') && (
          <TraditionExplorer key={id} id={id!} />
        )}
        {id === 'mahabharata' && <MahabharataExplorer />}
        {id === 'ramayana' && <RamayanaExplorer />}
        {id === 'bhagavad-gita' && <GitaExplorer />}
      </Suspense>
      <section>
        <h2>Follow a connection</h2>
        <div className="chips">
          {e.related?.map((id) => (
            <Link key={id} to={'/read/' + id}>
              {entries.find((e) => e.id === id)?.title ?? id}
            </Link>
          ))}
        </div>
      </section>
      <section className="sources">
        <h2>Sources & further reading</h2>
        <p>Original explanations; traditions and interpretations vary.</p>
        {e.sources?.map((s) => (
          <a key={s.url} href={s.url} target="_blank" rel="noreferrer">
            {s.title} ↗
          </a>
        ))}
      </section>
      <Quiz key={e.id} section={e.branch} />
    </article>
  );
}
export function NotFound() {
  return (
    <section className="page">
      <h1>This path is still unwritten.</h1>
      <p>Try a branch from the knowledge tree.</p>
      <Link className="button" to="/explore">
        Open the tree
      </Link>
    </section>
  );
}
