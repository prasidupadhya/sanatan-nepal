import type { Entry } from './catalog';
export const deities: Entry[] = [
  {
    id: 'shiva',
    title: 'Shiva',
    devanagari: 'शिव',
    branch: 'puranas',
    summary:
      'An ascetic and householder, a presence of dissolution and renewal.',
    sections: [
      {
        title: 'Stories and worship',
        text: 'Shaiva traditions understand Shiva as supreme reality in different ways. Nepal’s Pashupati and Bhairava traditions make these relationships visible in sacred places and festivals.',
      },
    ],
    related: ['pashupatinath', 'parvati', 'ganesha', 'kartikeya', 'ravana'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'parvati',
    title: 'Parvati',
    devanagari: 'पार्वती',
    branch: 'puranas',
    summary: 'Shiva’s consort and a manifestation of the Goddess.',
    sections: [
      {
        title: 'Stories and worship',
        text: 'Parvati’s stories bring austerity, marriage, motherhood and divine power into conversation. Genealogies and manifestations vary across texts.',
      },
    ],
    related: ['shiva', 'ganesha', 'kartikeya', 'devi'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'ganesha',
    title: 'Ganesha',
    devanagari: 'गणेश',
    branch: 'puranas',
    summary: 'A deity of beginnings, wisdom and the removal of obstacles.',
    sections: [
      {
        title: 'Stories and worship',
        text: 'Often honored at the start of worship, Ganesha appears in many local shrines. Narratives of his birth and elephant head differ.',
      },
    ],
    related: ['shiva', 'parvati', 'panchayan'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'kartikeya',
    title: 'Kartikeya',
    devanagari: 'कार्तिकेय',
    branch: 'puranas',
    summary: 'Shiva’s son, also called Skanda or Kumara.',
    sections: [
      {
        title: 'Stories and worship',
        text: 'Kartikeya’s names and devotional roles differ across regions. The label “son of Shiva” summarizes traditions with complex birth narratives.',
      },
    ],
    related: ['shiva', 'parvati', 'skanda-purana'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'vishnu',
    title: 'Vishnu',
    devanagari: 'विष्णु',
    branch: 'puranas',
    summary:
      'The sustaining divine presence, encountered through many avatars.',
    sections: [
      {
        title: 'Stories and worship',
        text: 'Vaishnava traditions tell of Vishnu’s descents to restore order. Different communities understand his relationship to other deities differently.',
      },
    ],
    related: ['krishna', 'rama', 'dashavatara', 'temple-changu-narayan'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'devi',
    title: 'Devi',
    devanagari: 'देवी',
    branch: 'puranas',
    summary: 'The Goddess: divine power in many forms.',
    sections: [
      {
        title: 'Stories and worship',
        text: 'Shakta traditions honor the Goddess as ultimate reality. Her forms are not simply separate people in a literal family tree; they express overlapping powers and identities.',
      },
    ],
    related: ['durga', 'kali', 'lakshmi', 'saraswati', 'taleju', 'parvati'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'durga',
    title: 'Durga',
    devanagari: 'दुर्गा',
    branch: 'puranas',
    summary:
      'The powerful Goddess celebrated for overcoming forces of disorder.',
    sections: [
      {
        title: 'Stories and worship',
        text: 'The Devi Mahatmya tells of the Goddess defeating Mahishasura. Dashain draws on Goddess traditions while taking varied forms in Nepali households.',
      },
    ],
    related: ['devi', 'dashain', 'markandeya-purana'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'kali',
    title: 'Kali',
    devanagari: 'काली',
    branch: 'puranas',
    summary:
      'A fierce form of the Goddess associated with time and transformation.',
    sections: [
      {
        title: 'Stories and worship',
        text: 'Fierce imagery can express protection, destruction of evil and release from fear. Interpretations vary across devotional and Tantric contexts.',
      },
    ],
    related: ['devi', 'durga'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'lakshmi',
    title: 'Lakshmi',
    devanagari: 'लक्ष्मी',
    branch: 'puranas',
    summary: 'Goddess of prosperity, good fortune and well-being.',
    sections: [
      {
        title: 'Stories and worship',
        text: 'Lakshmi is honored during Tihar. Prosperity here can involve household flourishing and auspiciousness as well as wealth.',
      },
    ],
    related: ['vishnu', 'devi', 'tihar'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'saraswati',
    title: 'Saraswati',
    devanagari: 'सरस्वती',
    branch: 'puranas',
    summary: 'Goddess associated with learning, speech, music and the arts.',
    sections: [
      {
        title: 'Stories and worship',
        text: 'Students and artists honor Saraswati as a source of insight and expression; her forms connect river imagery and sacred speech.',
      },
    ],
    related: ['devi', 'rigveda'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'surya',
    title: 'Surya',
    devanagari: 'सूर्य',
    branch: 'puranas',
    summary: 'The sun honored as a divine source of light and life.',
    sections: [
      {
        title: 'Stories and worship',
        text: 'Solar devotion spans Vedic hymns, temple images and daily practice. Surya is one of the common five forms in Panchayatana worship.',
      },
    ],
    related: ['panchayan', 'rigveda'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'taleju',
    title: 'Taleju',
    devanagari: 'तलेजु',
    branch: 'puranas',
    summary: 'A protective Goddess closely linked with the Malla courts.',
    sections: [
      {
        title: 'Stories and worship',
        text: 'Taleju’s temples and Kumari institutions connect royal history with living religious traditions in the valley.',
      },
    ],
    related: ['kumari', 'monarchy', 'devi'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'bhairava',
    title: 'Bhairava',
    devanagari: 'भैरव',
    branch: 'puranas',
    summary: 'A fierce manifestation of Shiva with important local forms.',
    sections: [
      {
        title: 'Stories and worship',
        text: 'Bhairava appears as protector and powerful presence in Nepal’s urban sacred landscapes. Local identities should be understood in their own settings.',
      },
    ],
    related: ['shiva', 'indra-jatra', 'pashupatinath'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'dashavatara',
    title: 'Vishnu’s Dashavatara',
    devanagari: 'दशावतार',
    branch: 'puranas',
    summary:
      'Ten widely known descents of Vishnu, with variations in the list.',
    sections: [
      {
        title: 'Stories and worship',
        text: 'A common sequence includes Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Rama, Krishna, Buddha and Kalki. Some traditions include Balarama instead of Buddha or Krishna. This gallery presents one common list, not a universal canon.',
      },
    ],
    related: ['vishnu', 'rama', 'krishna'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'matsya',
    title: 'Matsya',
    branch: 'puranas',
    summary:
      'The fish who preserves life and sacred knowledge through a flood.',
    related: ['dashavatara', 'vishnu'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'kurma',
    title: 'Kurma',
    branch: 'puranas',
    summary: 'The tortoise supporting the churning of the ocean.',
    related: ['dashavatara', 'vishnu'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'varaha',
    title: 'Varaha',
    branch: 'puranas',
    summary: 'The boar who raises the earth from the cosmic waters.',
    related: ['dashavatara', 'vishnu'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'narasimha',
    title: 'Narasimha',
    branch: 'puranas',
    summary: 'The human-lion form who protects Prahlada.',
    related: ['dashavatara', 'vishnu'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'vamana',
    title: 'Vamana',
    branch: 'puranas',
    summary: 'The dwarf whose three steps encompass the worlds.',
    related: ['dashavatara', 'vishnu'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'parashurama',
    title: 'Parashurama',
    branch: 'puranas',
    summary:
      'The axe-bearing ascetic warrior of complex and often violent narratives.',
    related: ['dashavatara', 'vishnu'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'buddha-avatar',
    title: 'Buddha in the avatar list',
    branch: 'puranas',
    summary:
      'Some Hindu lists include Buddha as an avatar; this does not describe Buddhist self-understanding.',
    related: ['dashavatara', 'vishnu'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'kalki',
    title: 'Kalki',
    branch: 'puranas',
    summary: 'The future avatar associated with the close of the Kali age.',
    related: ['dashavatara', 'vishnu'],
    sources: [
      {
        title: 'H. H. Wilson, The Vishnu Purana (1840, public domain)',
        url: 'https://sacred-texts.com/hin/vp/index.htm',
      },
      {
        title: 'UNESCO — Kathmandu Valley sacred ensembles',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
];
