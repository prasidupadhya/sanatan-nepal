# Editing the collection

Edit the structured TypeScript files under `src/content/`; component changes are unnecessary for ordinary entries.

## Entry shape

```ts
{
  id: 'stable-lowercase-id',
  title: 'Display title',
  devanagari: 'देवनागरी',
  branch: 'nepal',
  summary: 'An original, concise introduction.',
  sections: [
    { title: 'One clear topic', text: 'An original explanation with context.' },
  ],
  related: ['an-existing-entry-id'],
  sources: [
    { title: 'Author or institution, work and date', url: 'https://example.org/source' },
  ],
}
```

Use an existing branch: `foundations`, `epics`, `puranas`, `nepal` or `practice`. Keep IDs unique and stable; saved progress and deep links use them. New entries in a registered content array automatically appear in branch pages, search and the knowledge tree. Register a new content module in `catalog.ts`.

## Relationships and interactive data

- Epic family data is stored alongside each epic's entries. Each person needs an entry with the same ID for its biography route.
- Relationship labels distinguish parentage, royal lineage, niyoga, marriage, distant descent and teaching. Do not flatten these into a biological family tree.
- Gita chapter data includes chapter numbers and verse references. Explanations must be original paraphrases. Note recension/numbering differences.
- Festival `month` is a zero-based approximate Gregorian seasonal position: 0 is January, 1 is February, and fractional values place points between months. It is not an exact observance date.
- Temple coordinates identify approximate locations. Include a source and distinguish devotional associations from historical evidence.
- Add spelling variants to `src/content/search.ts` when useful.

## Editorial checks

Cite a source that supports the specific claim. Name translations and scholarship instead of reproducing copyrighted passages. Distinguish a religious belief from a claim of established history. Avoid treating a practice from one caste, locality or household as universal.

Mark uncertain details with `// TODO: verify` in the source and keep unsupported specifics out of the public explanation. Do not add sensational descriptions of Kumari selection without careful source and community review. Respect the differences between Hindu and Buddhist self-understandings.

Run `npm test` to catch duplicate IDs and broken related links, then `npm run build`. For changed interactive data, run `npm run test:e2e` and inspect the relevant page at desktop and mobile widths.
