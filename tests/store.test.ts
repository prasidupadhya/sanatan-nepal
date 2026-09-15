import { useLearningStore } from '../src/store/useLearningStore';
it('persists bookmarks and explicit completion independently', () => {
  useLearningStore.setState({ bookmarks: [], completed: [] });
  useLearningStore.getState().toggleBookmark('kumari');
  expect(useLearningStore.getState().completed).toEqual([]);
  useLearningStore.getState().toggleCompleted('kumari');
  const stored = JSON.parse(localStorage.getItem('sanatan-nepal-learning')!);
  expect(stored.state.bookmarks).toEqual(['kumari']);
  expect(stored.state.completed).toEqual(['kumari']);
  useLearningStore.getState().toggleBookmark('kumari');
  expect(useLearningStore.getState().bookmarks).toEqual([]);
});
