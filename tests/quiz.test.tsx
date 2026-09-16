import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Quiz from '../src/components/quiz/Quiz';
import { useLearningStore } from '../src/store/useLearningStore';
afterEach(cleanup);
it('gives immediate feedback, prevents double answers and persists a completed score', () => {
  useLearningStore.setState({ scores: {} });
  render(<Quiz section="nepal" />);
  fireEvent.click(screen.getByRole('button', { name: 'Shiva as Pashupati' }));
  expect(screen.getByRole('status')).toHaveTextContent('That’s right');
  expect(screen.getByRole('button', { name: 'Surya' })).toBeDisabled();
  fireEvent.click(screen.getByRole('button', { name: 'Next question' }));
  fireEvent.click(
    screen.getByRole('button', {
      name: 'Shared spaces coexist with distinct traditions',
    }),
  );
  fireEvent.click(screen.getByRole('button', { name: 'Next question' }));
  fireEvent.click(screen.getByRole('button', { name: 'Indra Jatra' }));
  fireEvent.click(screen.getByRole('button', { name: 'See your result' }));
  expect(useLearningStore.getState().scores.nepal).toBe(3);
  expect(
    JSON.parse(localStorage.getItem('sanatan-nepal-learning')!).state.scores
      .nepal,
  ).toBe(3);
});
