import { entries, branches } from '../src/content/catalog';
import { chapters } from '../src/content/gita';
import { puranas } from '../src/content/puranas';
import { kuruPeople, kuruRelations } from '../src/content/epics/mahabharata';
import { raghuPeople, raghuRelations } from '../src/content/epics/ramayana';
it('has unique routes and no broken related-entry links', () => {
  const ids = entries.map((e) => e.id);
  expect(new Set(ids).size).toBe(ids.length);
  for (const e of entries) {
    expect(
      branches.some((b) => b.id === e.branch),
      e.id,
    ).toBe(true);
    for (const id of e.related ?? [])
      expect(ids, e.id + ' -> ' + id).toContain(id);
  }
});
it('preserves complete chapter sets and relationship endpoints', () => {
  expect(puranas).toHaveLength(18);
  expect(chapters).toHaveLength(18);
  for (const c of chapters) expect(c.verses.length).toBeGreaterThanOrEqual(2);
  for (const [people, relations] of [
    [kuruPeople, kuruRelations],
    [raghuPeople, raghuRelations],
  ] as const) {
    const ids = people.map((p) => p.id);
    for (const r of relations) {
      expect(ids).toContain(r.source);
      expect(ids).toContain(r.target);
    }
  }
});
