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
    summary: 'The Vedas, the self, and the questions that begin a journey.',
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
    summary:
      'Eighteen great collections. A universe of interconnected stories.',
    symbol: '❋',
  },
  {
    id: 'nepal',
    title: 'Nepali Hinduism',
    devanagari: 'नेपाल',
    summary:
      'Living goddesses, shared sacred spaces and the rhythms of the valley.',
    symbol: '◈',
  },
  {
    id: 'practice',
    title: 'Practice & Philosophy',
    devanagari: 'साधना',
    summary: 'Bring the big questions closer to everyday life.',
    symbol: '☼',
  },
];
export const entries: Entry[] = [
  ...ramayana,
  ...mahabharata,
  ...foundations,
  ...puranas,
  ...practice,
];
