import type { Entry } from '../catalog';
// Coordinates are approximate points for orientation, not entrances or access routes.
export const temples = [
  {
    id: 'pashupatinath',
    title: 'Pashupatinath',
    region: 'Kathmandu',
    lat: 27.7104,
    lng: 85.3488,
    deity: 'Shiva as Pashupati',
    history:
      'A major Shaiva precinct on the Bagmati, with shrines, cremation ghats and a tiered-roof temple. The present main temple is associated with Malla patronage.',
    visit:
      'October–November and March–April are often comfortable seasons. Maha Shivaratri offers a major festival experience with much larger crowds.',
    source: 'https://www.pashupati.gov.np/pasupatinath-temple/',
  },
  {
    id: 'changu-narayan',
    title: 'Changu Narayan',
    region: 'Bhaktapur',
    lat: 27.7169,
    lng: 85.4278,
    deity: 'Vishnu',
    history:
      'An ancient Vishnu temple complex with a fifth-century inscription and important stone sculptures, within the Kathmandu Valley World Heritage property.',
    visit:
      'Spring and autumn often suit exploring the hilltop complex; quieter mornings allow time for sculpture and architecture.',
    source: 'https://whc.unesco.org/en/list/121',
  },
  {
    id: 'muktinath',
    title: 'Muktinath',
    region: 'Mustang',
    lat: 28.8168,
    lng: 83.8715,
    deity: 'Vishnu; a shared Hindu–Buddhist sacred site',
    history:
      'A high Himalayan pilgrimage place associated with liberation, sacred water and a Buddhist presence. Different traditions give the place distinct meanings.',
    visit:
      'Spring and autumn are common pilgrimage windows. Conditions at high elevation vary; confirm access and local weather before travel.',
    source: 'https://ntb.gov.np/muktinath--mustang',
  },
  {
    id: 'manakamana',
    title: 'Manakamana',
    region: 'Gorkha',
    lat: 27.905,
    lng: 84.584,
    deity: 'Bhagwati / Devi',
    history:
      'A hilltop Goddess shrine whose name evokes wishes of the heart. Its pilgrimage traditions connect local sacred history with visitors from across Nepal.',
    visit:
      'Spring and autumn generally offer mild conditions. Festival days bring heavier pilgrimage traffic; check local transport schedules.',
    source: 'https://ntb.gov.np/manakamana-temple--gorkha',
  },
  {
    id: 'doleshwor',
    title: 'Doleshwor Mahadev',
    region: 'Bhaktapur',
    lat: 27.6469,
    lng: 85.4368,
    deity: 'Shiva',
    history:
      'A Shaiva shrine linked in local religious tradition with Kedarnath. The identification is a devotional association, not a verified anatomical or archaeological claim.',
    visit:
      'Spring and autumn are comfortable seasonal choices. Shiva festivals draw additional worshippers.',
    source:
      'https://ntb.gov.np/plan-your-trip/trip-ideas/pilgrimage-to-doleshwar-mahadev-temple',
  },
];
export const templeEntries: Entry[] = [
  {
    id: 'temple-pashupatinath',
    title: 'Pashupatinath temple',
    branch: 'nepal',
    summary:
      'A major Shaiva precinct on the Bagmati, with shrines, cremation ghats and a tiered-roof temple. The present main temple is associated with Malla patronage.',
    sections: [
      { title: 'Deity and devotion', text: 'Shiva as Pashupati' },
      {
        title: 'Seasonal visiting context',
        text: 'October–November and March–April are often comfortable seasons. Maha Shivaratri offers a major festival experience with much larger crowds.',
      },
    ],
    related: ['temples', 'shiva'],
    sources: [
      {
        title: 'Temple history and cultural context',
        url: 'https://www.pashupati.gov.np/pasupatinath-temple/',
      },
    ],
  },
  {
    id: 'temple-changu-narayan',
    title: 'Changu Narayan temple',
    branch: 'nepal',
    summary:
      'An ancient Vishnu temple complex with a fifth-century inscription and important stone sculptures, within the Kathmandu Valley World Heritage property.',
    sections: [
      { title: 'Deity and devotion', text: 'Vishnu' },
      {
        title: 'Seasonal visiting context',
        text: 'Spring and autumn often suit exploring the hilltop complex; quieter mornings allow time for sculpture and architecture.',
      },
    ],
    related: ['temples', 'vishnu'],
    sources: [
      {
        title: 'Temple history and cultural context',
        url: 'https://whc.unesco.org/en/list/121',
      },
    ],
  },
  {
    id: 'temple-muktinath',
    title: 'Muktinath temple',
    branch: 'nepal',
    summary:
      'A high Himalayan pilgrimage place associated with liberation, sacred water and a Buddhist presence. Different traditions give the place distinct meanings.',
    sections: [
      {
        title: 'Deity and devotion',
        text: 'Vishnu; a shared Hindu–Buddhist sacred site',
      },
      {
        title: 'Seasonal visiting context',
        text: 'Spring and autumn are common pilgrimage windows. Conditions at high elevation vary; confirm access and local weather before travel.',
      },
    ],
    related: ['temples', 'vishnu'],
    sources: [
      {
        title: 'Temple history and cultural context',
        url: 'https://ntb.gov.np/muktinath--mustang',
      },
    ],
  },
  {
    id: 'temple-manakamana',
    title: 'Manakamana temple',
    branch: 'nepal',
    summary:
      'A hilltop Goddess shrine whose name evokes wishes of the heart. Its pilgrimage traditions connect local sacred history with visitors from across Nepal.',
    sections: [
      { title: 'Deity and devotion', text: 'Bhagwati / Devi' },
      {
        title: 'Seasonal visiting context',
        text: 'Spring and autumn generally offer mild conditions. Festival days bring heavier pilgrimage traffic; check local transport schedules.',
      },
    ],
    related: ['temples', 'devi'],
    sources: [
      {
        title: 'Temple history and cultural context',
        url: 'https://ntb.gov.np/manakamana-temple--gorkha',
      },
    ],
  },
  {
    id: 'temple-doleshwor',
    title: 'Doleshwor Mahadev temple',
    branch: 'nepal',
    summary:
      'A Shaiva shrine linked in local religious tradition with Kedarnath. The identification is a devotional association, not a verified anatomical or archaeological claim.',
    sections: [
      { title: 'Deity and devotion', text: 'Shiva' },
      {
        title: 'Seasonal visiting context',
        text: 'Spring and autumn are comfortable seasonal choices. Shiva festivals draw additional worshippers.',
      },
    ],
    related: ['temples', 'shiva'],
    sources: [
      {
        title: 'Temple history and cultural context',
        url: 'https://ntb.gov.np/plan-your-trip/trip-ideas/pilgrimage-to-doleshwar-mahadev-temple',
      },
    ],
  },
  {
    id: 'temples',
    title: 'Sacred places of Nepal',
    devanagari: 'तीर्थ',
    branch: 'nepal',
    summary: 'Explore five temples, from the Bagmati to the high Himalaya.',
    related: [
      'temple-pashupatinath',
      'temple-changu-narayan',
      'temple-muktinath',
      'temple-manakamana',
      'temple-doleshwor',
    ],
  },
];
