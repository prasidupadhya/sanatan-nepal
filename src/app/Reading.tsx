import { useEffect, useMemo } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import EntryTools from '../components/ui/EntryTools';
import Quiz from '../components/quiz/Quiz';
import TopicIndex from '../components/ui/TopicIndex';
import EntryExplorer, { hasExplorer } from '../components/ui/EntryExplorer';
import ReadingNavigation from '../components/ui/ReadingNavigation';
import { branches, entries } from '../content/catalog';

export function Branch() {
  const { id } = useParams();
  const branch = branches.find((entry) => entry.id === id);
  if (!branch) return <NotFound />;
  return (
    <section className="page">
      <Link to="/explore">Knowledge tree</Link>
      <h1>{branch.title}</h1>
      <p className="lede">{branch.summary}</p>
      <TopicIndex branch={branch.id} />
      <Quiz key={id} section={branch.id} />
    </section>
  );
}
export function Reading() {
  const { id } = useParams();
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() =>
      document.getElementById(hash.slice(1))?.scrollIntoView(),
    );
    return () => cancelAnimationFrame(frame);
  }, [id, hash]);
  const entry = entries.find((item) => item.id === id);
  const sections = useMemo(
    () =>
      entry
        ? [
            ...(entry.sections ?? []).map((section, index) => ({
              id: 'section-' + index,
              title: section.title,
            })),
            ...(hasExplorer(entry.id)
              ? [{ id: 'interactive', title: 'Interactive explorer' }]
              : []),
            { id: 'connections', title: 'Related topics' },
            { id: 'sources', title: 'Sources' },
            { id: 'knowledge-check', title: 'Knowledge check' },
          ]
        : [],
    [entry],
  );
  if (!entry) return <NotFound />;
  return (
    <div className="reading-layout">
      <ReadingNavigation key={entry.id} sections={sections} />
      <article className="page reading">
        <Link to={'/branch/' + entry.branch}>
          {branches.find((branch) => branch.id === entry.branch)?.title}
        </Link>
        <h1>{entry.title}</h1>
        {entry.devanagari && (
          <span className="devanagari" lang="ne">
            {entry.devanagari}
          </span>
        )}
        <p className="lede">{entry.summary}</p>
        <EntryTools id={entry.id} />
        {entry.sections?.map((section, index) => (
          <section key={section.title} id={'section-' + index} tabIndex={-1}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        {hasExplorer(entry.id) && (
          <div id="interactive" tabIndex={-1}>
            <EntryExplorer id={entry.id} />
          </div>
        )}
        <section id="connections" tabIndex={-1}>
          <h2>Related topics</h2>
          <div className="chips">
            {entry.related?.map((related) => (
              <Link key={related} to={'/read/' + related}>
                {entries.find((item) => item.id === related)?.title ?? related}
              </Link>
            ))}
          </div>
        </section>
        <section className="sources" id="sources" tabIndex={-1}>
          <h2>Sources & further reading</h2>
          <p>Original explanations; traditions and interpretations vary.</p>
          {entry.sources?.map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noreferrer"
            >
              {source.title} ↗
            </a>
          ))}
        </section>
        <div id="knowledge-check" tabIndex={-1}>
          <Quiz key={entry.id} section={entry.branch} />
        </div>
      </article>
    </div>
  );
}
export function NotFound() {
  return (
    <section className="page">
      <h1>Page not found</h1>
      <p>This address does not match a topic in the encyclopedia.</p>
      <Link className="button" to="/explore">
        Browse the knowledge tree
      </Link>
    </section>
  );
}
