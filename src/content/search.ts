import Fuse from 'fuse.js';
import { entries } from './catalog';
const aliases: Record<string, string[]> = {
  ravana: ['Ravan', 'Raavan'],
  shiva: ['Shiv', 'Mahadev'],
  pashupatinath: ['Pashupati'],
  machindranath: [
    'Macchendranath',
    'Matsyendranath',
    'Bunga Dya',
    'Karunamaya',
  ],
  ganesha: ['Ganesh'],
  dashain: ['Dasain', 'Dashami'],
  teej: ['Tij'],
  'bhagavad-gita': ['Gita', 'Geeta', 'Bhagwat Geeta'],
};
const index = new Fuse(
  entries.map((e) => ({ ...e, aliases: aliases[e.id] ?? [] })),
  {
    keys: [
      { name: 'title', weight: 3 },
      { name: 'devanagari', weight: 3 },
      { name: 'aliases', weight: 3 },
      { name: 'summary', weight: 1 },
    ],
    threshold: 0.35,
    ignoreLocation: true,
  },
);
export function searchEntries(query: string) {
  return query.trim() ? index.search(query.trim()).map((r) => r.item) : [];
}
