import FamilyTree from '../tree/FamilyTree';
import StoryMode from '../story/StoryMode';
import {
  kuruPeople,
  kuruRelations,
  parvas,
  mahabharataScenes,
} from '../../content/epics/mahabharata';
import { Link } from 'react-router-dom';
export default function MahabharataExplorer() {
  return (
    <>
      <FamilyTree
        title="The Kuru family"
        people={kuruPeople}
        relations={kuruRelations}
      />
      <StoryMode scenes={mahabharataScenes} />
      <h2>Eighteen books, one expansive world</h2>
      <div className="chapter-list">
        {parvas.map((p, i) => (
          <details key={p.title}>
            <summary>
              {i + 1}. {p.title}
            </summary>
            <p>{p.text}</p>
            {i === 5 && (
              <Link className="button" to="/read/bhagavad-gita">
                Enter Krishna–Arjuna’s dialogue
              </Link>
            )}
          </details>
        ))}
      </div>
    </>
  );
}
