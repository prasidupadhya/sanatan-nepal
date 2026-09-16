import { useState } from 'react';
import { quizzes } from '../../content/quizzes';
import { useLearningStore } from '../../store/useLearningStore';
export default function Quiz({ section }: { section: string }) {
  const questions = quizzes[section];
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const saveScore = useLearningStore((s) => s.saveScore);
  const best = useLearningStore((s) => s.scores[section]);
  if (!questions) return null;
  const q = questions[index];
  function answer(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.answer) setScore((s) => s + 1);
  }
  function next() {
    if (index === questions.length - 1) {
      saveScore(section, score);
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  }
  return (
    <section className="quiz" aria-label="Knowledge check">
      <span className="devanagari">मनन</span>
      <h2>Check your understanding</h2>
      {done ? (
        <div role="status">
          <h3>
            {score} of {questions.length} correct
          </h3>
          <p>Your best score is saved on this device.</p>
          <button
            className="button"
            onClick={() => {
              setIndex(0);
              setSelected(null);
              setScore(0);
              setDone(false);
            }}
          >
            Try again
          </button>
        </div>
      ) : (
        <>
          <p className="step">
            Question {index + 1} of {questions.length}
            {best !== undefined && ` · Best: ${best}/${questions.length}`}
          </p>
          <h3>{q.prompt}</h3>
          <div className="quiz-options">
            {q.options.map((o, i) => (
              <button
                key={o}
                disabled={selected !== null}
                aria-pressed={selected === i}
                className={selected !== null && i === q.answer ? 'correct' : ''}
                onClick={() => answer(i)}
              >
                {o}
              </button>
            ))}
          </div>
          {selected !== null && (
            <div className="quiz-feedback" role="status">
              <strong>
                {selected === q.answer
                  ? 'That’s right.'
                  : 'Not quite. Review the explanation below.'}
              </strong>
              <p>{q.explanation}</p>
              <button className="button" onClick={next}>
                {index === questions.length - 1
                  ? 'See your result'
                  : 'Next question'}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
