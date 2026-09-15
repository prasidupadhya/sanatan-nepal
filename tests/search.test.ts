import { searchEntries } from '../src/content/search';
it('finds alternate spellings and Devanagari terms', () => {
  expect(searchEntries('Ravan')[0].id).toBe('ravana');
  expect(searchEntries('Geeta')[0].id).toBe('bhagavad-gita');
  expect(searchEntries('धर्म').some((e) => e.id === 'dharma')).toBe(true);
  expect(searchEntries('   ')).toEqual([]);
  expect(searchEntries('zzzzzzzzzz')).toEqual([]);
});
