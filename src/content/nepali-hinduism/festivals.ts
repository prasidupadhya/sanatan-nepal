import type { Entry } from '../catalog';
export const festivals = [
  {
    id: 'maha-shivaratri',
    title: 'Maha Shivaratri',
    devanagari: 'महाशिवरात्रि',
    season: 'February–March',
    month: 1.7,
    summary: 'A night of devotion to Shiva.',
    ritual:
      'Devotees offer worship, keep vigil and may fast. Pashupatinath becomes a major center of gathering.',
    variation:
      'Household practice and temple observance differ; fasting is not identical for every devotee.',
    deity: 'shiva',
  },
  {
    id: 'holi',
    title: 'Holi',
    devanagari: 'होली',
    season: 'February–March',
    month: 2.2,
    summary: 'Spring arrives in a festival of color.',
    ritual:
      'Communities celebrate with colored powders and water; accounts of Prahlada and Holika connect the festival with devotion and protection.',
    variation:
      'Hill and Tarai celebrations commonly fall on different days. Participation and customs vary.',
    deity: 'vishnu',
  },
  {
    id: 'gai-jatra',
    title: 'Gai Jatra',
    devanagari: 'गाईजात्रा',
    season: 'August–September',
    month: 7.7,
    summary: 'A public remembrance of those who have died.',
    ritual:
      'Families who have lost someone participate in processions associated with cows or cow symbolism. Humor and satire accompany mourning.',
    variation:
      'Kathmandu, Patan and Bhaktapur have distinct processions and performance traditions.',
    deity: 'newar-hinduism',
  },
  {
    id: 'teej',
    title: 'Teej',
    devanagari: 'तीज',
    season: 'August–September',
    month: 8.1,
    summary: 'Gathering, song and devotion to Shiva and Parvati.',
    ritual:
      'Women gather for feasting, song and worship; many observe a fast. Songs can voice personal experiences and social concerns.',
    variation:
      'Family, region and personal choice shape fasting and participation. It is not a uniform obligation for all women.',
    deity: 'parvati',
  },
  {
    id: 'indra-jatra',
    title: 'Indra Jatra',
    devanagari: 'इन्द्रजात्रा',
    season: 'August–September',
    month: 8.6,
    summary: 'Kathmandu’s streets become a ceremonial stage.',
    ritual:
      'The festival brings Indra worship, masked performances and the Kumari chariot procession into the old city.',
    variation:
      'Its Kathmandu setting is distinctive; other valley towns follow their own ritual calendars.',
    deity: 'kumari',
  },
  {
    id: 'dashain',
    title: 'Dashain',
    devanagari: 'दशैँ',
    season: 'September–October',
    month: 9.2,
    summary: 'Goddess worship and family reunion across Nepal.',
    ritual:
      'Many households plant jamara, worship Durga and receive tika and blessings from elders.',
    variation:
      'Animal sacrifice occurs in some settings; others use vegetarian offerings. Tika and family observances vary by community.',
    deity: 'durga',
  },
  {
    id: 'tihar',
    title: 'Tihar',
    devanagari: 'तिहार',
    season: 'October–November',
    month: 10.2,
    summary: 'Light, gratitude and bonds between people and other beings.',
    ritual:
      'A sequence of days honors beings including crows, dogs and cows; Lakshmi worship, lamps and Bhai Tika are familiar features.',
    variation:
      'Newar Mha Puja and Nepal Sambat celebrations add distinct dimensions. Local sequences and observances vary.',
    deity: 'lakshmi',
  },
];
export const festivalEntries: Entry[] = [
  {
    id: 'maha-shivaratri',
    title: 'Maha Shivaratri',
    devanagari: 'महाशिवरात्रि',
    branch: 'nepal',
    summary: 'A night of devotion to Shiva.',
    sections: [
      {
        title: 'Rituals and relationships',
        text: 'Devotees offer worship, keep vigil and may fast. Pashupatinath becomes a major center of gathering.',
      },
      {
        title: 'Regional variations',
        text: 'Household practice and temple observance differ; fasting is not identical for every devotee.',
      },
      {
        title: 'When it falls',
        text: 'February–March. This is a seasonal window, not an exact annual date; lunar timing shifts in the Gregorian calendar.',
      },
    ],
    related: ['shiva', 'festivals'],
    sources: [
      {
        title: 'Nepal Tourism Board — festivals and events',
        url: 'https://ntb.gov.np/en/event-search',
      },
      {
        title: 'Pashupati Area Development Trust — festivals',
        url: 'https://pashupati.gov.np/festivals/',
      },
    ],
  },
  {
    id: 'holi',
    title: 'Holi',
    devanagari: 'होली',
    branch: 'nepal',
    summary: 'Spring arrives in a festival of color.',
    sections: [
      {
        title: 'Rituals and relationships',
        text: 'Communities celebrate with colored powders and water; accounts of Prahlada and Holika connect the festival with devotion and protection.',
      },
      {
        title: 'Regional variations',
        text: 'Hill and Tarai celebrations commonly fall on different days. Participation and customs vary.',
      },
      {
        title: 'When it falls',
        text: 'February–March. This is a seasonal window, not an exact annual date; lunar timing shifts in the Gregorian calendar.',
      },
    ],
    related: ['vishnu', 'festivals'],
    sources: [
      {
        title: 'Nepal Tourism Board — festivals and events',
        url: 'https://ntb.gov.np/en/event-search',
      },
      {
        title: 'Pashupati Area Development Trust — festivals',
        url: 'https://pashupati.gov.np/festivals/',
      },
    ],
  },
  {
    id: 'gai-jatra',
    title: 'Gai Jatra',
    devanagari: 'गाईजात्रा',
    branch: 'nepal',
    summary: 'A public remembrance of those who have died.',
    sections: [
      {
        title: 'Rituals and relationships',
        text: 'Families who have lost someone participate in processions associated with cows or cow symbolism. Humor and satire accompany mourning.',
      },
      {
        title: 'Regional variations',
        text: 'Kathmandu, Patan and Bhaktapur have distinct processions and performance traditions.',
      },
      {
        title: 'When it falls',
        text: 'August–September. This is a seasonal window, not an exact annual date; lunar timing shifts in the Gregorian calendar.',
      },
    ],
    related: ['newar-hinduism', 'festivals'],
    sources: [
      {
        title: 'Nepal Tourism Board — festivals and events',
        url: 'https://ntb.gov.np/en/event-search',
      },
      {
        title: 'Pashupati Area Development Trust — festivals',
        url: 'https://pashupati.gov.np/festivals/',
      },
    ],
  },
  {
    id: 'teej',
    title: 'Teej',
    devanagari: 'तीज',
    branch: 'nepal',
    summary: 'Gathering, song and devotion to Shiva and Parvati.',
    sections: [
      {
        title: 'Rituals and relationships',
        text: 'Women gather for feasting, song and worship; many observe a fast. Songs can voice personal experiences and social concerns.',
      },
      {
        title: 'Regional variations',
        text: 'Family, region and personal choice shape fasting and participation. It is not a uniform obligation for all women.',
      },
      {
        title: 'When it falls',
        text: 'August–September. This is a seasonal window, not an exact annual date; lunar timing shifts in the Gregorian calendar.',
      },
    ],
    related: ['parvati', 'festivals'],
    sources: [
      {
        title: 'Nepal Tourism Board — festivals and events',
        url: 'https://ntb.gov.np/en/event-search',
      },
      {
        title: 'Pashupati Area Development Trust — festivals',
        url: 'https://pashupati.gov.np/festivals/',
      },
    ],
  },
  {
    id: 'indra-jatra',
    title: 'Indra Jatra',
    devanagari: 'इन्द्रजात्रा',
    branch: 'nepal',
    summary: 'Kathmandu’s streets become a ceremonial stage.',
    sections: [
      {
        title: 'Rituals and relationships',
        text: 'The festival brings Indra worship, masked performances and the Kumari chariot procession into the old city.',
      },
      {
        title: 'Regional variations',
        text: 'Its Kathmandu setting is distinctive; other valley towns follow their own ritual calendars.',
      },
      {
        title: 'When it falls',
        text: 'August–September. This is a seasonal window, not an exact annual date; lunar timing shifts in the Gregorian calendar.',
      },
    ],
    related: ['kumari', 'festivals'],
    sources: [
      {
        title: 'Nepal Tourism Board — festivals and events',
        url: 'https://ntb.gov.np/en/event-search',
      },
      {
        title: 'Pashupati Area Development Trust — festivals',
        url: 'https://pashupati.gov.np/festivals/',
      },
    ],
  },
  {
    id: 'dashain',
    title: 'Dashain',
    devanagari: 'दशैँ',
    branch: 'nepal',
    summary: 'Goddess worship and family reunion across Nepal.',
    sections: [
      {
        title: 'Rituals and relationships',
        text: 'Many households plant jamara, worship Durga and receive tika and blessings from elders.',
      },
      {
        title: 'Regional variations',
        text: 'Animal sacrifice occurs in some settings; others use vegetarian offerings. Tika and family observances vary by community.',
      },
      {
        title: 'When it falls',
        text: 'September–October. This is a seasonal window, not an exact annual date; lunar timing shifts in the Gregorian calendar.',
      },
    ],
    related: ['durga', 'festivals'],
    sources: [
      {
        title: 'Nepal Tourism Board — festivals and events',
        url: 'https://ntb.gov.np/en/event-search',
      },
      {
        title: 'Pashupati Area Development Trust — festivals',
        url: 'https://pashupati.gov.np/festivals/',
      },
    ],
  },
  {
    id: 'tihar',
    title: 'Tihar',
    devanagari: 'तिहार',
    branch: 'nepal',
    summary: 'Light, gratitude and bonds between people and other beings.',
    sections: [
      {
        title: 'Rituals and relationships',
        text: 'A sequence of days honors beings including crows, dogs and cows; Lakshmi worship, lamps and Bhai Tika are familiar features.',
      },
      {
        title: 'Regional variations',
        text: 'Newar Mha Puja and Nepal Sambat celebrations add distinct dimensions. Local sequences and observances vary.',
      },
      {
        title: 'When it falls',
        text: 'October–November. This is a seasonal window, not an exact annual date; lunar timing shifts in the Gregorian calendar.',
      },
    ],
    related: ['lakshmi', 'festivals'],
    sources: [
      {
        title: 'Nepal Tourism Board — festivals and events',
        url: 'https://ntb.gov.np/en/event-search',
      },
      {
        title: 'Pashupati Area Development Trust — festivals',
        url: 'https://pashupati.gov.np/festivals/',
      },
    ],
  },
  {
    id: 'festivals',
    title: 'The festival year',
    devanagari: 'पर्व',
    branch: 'nepal',
    summary:
      'Turn the wheel through a year of light, devotion, remembrance and reunion.',
    related: ['dashain', 'tihar', 'indra-jatra'],
    sources: [
      {
        title: 'Nepal Tourism Board — festival calendar',
        url: 'https://ntb.gov.np/en/event-search',
      },
    ],
  },
];
