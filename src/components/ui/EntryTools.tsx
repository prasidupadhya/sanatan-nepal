import { Bookmark, CheckCircle } from 'lucide-react';
import { useLearningStore } from '../../store/useLearningStore';
export default function EntryTools({ id }: { id: string }) {
  const saved = useLearningStore((s) => s.bookmarks.includes(id));
  const completed = useLearningStore((s) => s.completed.includes(id));
  const toggleBookmark = useLearningStore((s) => s.toggleBookmark);
  const toggleCompleted = useLearningStore((s) => s.toggleCompleted);
  return (
    <div className="entry-tools">
      <button aria-pressed={saved} onClick={() => toggleBookmark(id)}>
        <Bookmark size={17} />
        {saved ? 'Saved chapter' : 'Save chapter'}
      </button>
      <button aria-pressed={completed} onClick={() => toggleCompleted(id)}>
        <CheckCircle size={17} />
        {completed ? 'Completed' : 'Mark as completed'}
      </button>
      <span>Stored on this device</span>
    </div>
  );
}
