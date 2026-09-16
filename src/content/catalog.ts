import { templeEntries } from './nepali-hinduism/temples';
import { festivalEntries } from './nepali-hinduism/festivals';
import { deities } from './deities';
import { traditions } from './nepali-hinduism/traditions';
import { gita } from './gita';
import { ramayana } from './epics/ramayana';
import { mahabharata } from './epics/mahabharata';
import { foundations } from './foundations';
import { puranas } from './puranas';
import { practice } from './practice';
export type Entry = {
  id: string;
  title: string;
  devanagari?: string;
  branch: string;
  summary: string;
  sections?: { title: string; text: string }[];
  related?: string[];
  sources?: { title: string; url: string }[];
};
export const branches = [
  {
    id: 'foundations',
    title: 'Foundations',
    devanagari: 'ज्ञान',
    summary: 'The four Vedas, Upanishads, dharma, karma and liberation.',
    symbol: '✧',
  },
  {
    id: 'epics',
    title: 'The Great Epics',
    devanagari: 'इतिहास',
    summary:
      'Follow families, choices and journeys through the Mahabharata and Ramayana.',
    symbol: '⌁',
  },
  {
    id: 'puranas',
    title: 'Puranas & Mythology',
    devanagari: 'पुराण',
    summary: 'The eighteen Mahapuranas, deity families and Vishnu’s avatars.',
    symbol: '❋',
  },
  {
    id: 'nepal',
    title: 'Nepali Hinduism',
    devanagari: 'नेपाल',
    summary:
      'Kumari, Newar traditions, festivals, temples and the history of monarchy.',
    symbol: '◈',
  },
  {
    id: 'practice',
    title: 'Practice & Philosophy',
    devanagari: 'साधना',
    summary: 'The four paths of yoga, Nepali life-cycle rites and a glossary.',
    symbol: '☼',
  },
];
export const entries: Entry[] = [
  ...traditions,
  ...festivalEntries,
  ...templeEntries,
  ...deities,
  ...gita,
  ...ramayana,
  ...mahabharata,
  ...foundations,
  ...puranas,
  ...practice,
];
