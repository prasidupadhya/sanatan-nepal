import type { Entry } from '../catalog';
// TODO: verify community-specific Kumari selection procedures and local Panchayan arrangements with practitioner review before expanding.
export const traditions: Entry[] = [
  {
    id: 'pashupatinath',
    title: 'Pashupatinath & Nepali Shaivism',
    devanagari: 'पशुपतिनाथ',
    branch: 'nepal',
    summary:
      'On the Bagmati, Shiva is honored as Pashupati, lord of living beings.',
    sections: [
      {
        title: 'A sacred landscape',
        text: 'Pashupati is a precinct of shrines, ghats and institutions rather than a single building. Its place in the Kathmandu Valley links Shaiva worship, pilgrimage and rites for the dead.',
      },
      {
        title: 'A Nepali architectural presence',
        text: 'The main shrine’s tiered roof belongs to the valley’s pagoda tradition. The Pashupati Area Development Trust dates the present temple to 1697 under Bhupalendra Malla; sacred narratives about its beginnings reach further back.',
      },
      {
        title: 'A day and a year of worship',
        text: 'Daily offerings and evening worship coexist with the large gathering of Maha Shivaratri. Shaivism in Nepal includes household devotion, temple service, ascetic practice and local forms of Bhairava.',
      },
    ],
    related: ['shiva', 'maha-shivaratri', 'temple-pashupatinath', 'monarchy'],
    sources: [
      {
        title: 'UNESCO — Kathmandu Valley',
        url: 'https://whc.unesco.org/en/list/121',
      },
      {
        title: 'Pashupati Area Development Trust — Pasupatinath Temple',
        url: 'https://www.pashupati.gov.np/pasupatinath-temple/',
      },
    ],
  },
  {
    id: 'kumari',
    title: 'Kumari: the Living Goddess',
    devanagari: 'कुमारी',
    branch: 'nepal',
    summary:
      'A living embodiment of Taleju in a tradition shared across religious boundaries.',
    sections: [
      {
        title: 'A child and a sacred office',
        text: 'In Kathmandu, a young girl from the Newar Shakya Buddhist community is selected for an office venerated by Hindu and Buddhist devotees. Taleju’s presence is understood through the Kumari; this is a community’s religious understanding, not a claim about the child’s biology.',
      },
      {
        title: 'Selection and transition',
        text: 'Traditional selection involves ritual eligibility, bodily signs and astrological considerations. Procedures differ between local traditions; sensational accounts of ordeal tests should not be treated as universally verified facts. The office ends as the child approaches puberty, and a successor is selected.',
      },
      {
        title: 'Beyond Kathmandu',
        text: 'Patan and Bhaktapur also have Kumari traditions. Their schedules, residence arrangements and community practices differ. The Kathmandu institution should not stand in for every Living Goddess tradition.',
      },
      {
        title: 'A living context',
        text: 'Indra Jatra brings Kathmandu’s Kumari into public procession. Understanding the tradition also requires attention to children’s education, family life and the experiences of former Kumaris.',
      },
    ],
    related: ['indra-jatra', 'taleju', 'newar-hinduism', 'monarchy'],
    sources: [
      {
        title: 'Nepal Tourism Board — Living Goddess Kumari',
        url: 'https://ntb.gov.np/living-goddess-kumari',
      },
      {
        title: 'AP — Nepal’s Living Goddess in Indra Jatra (2025)',
        url: 'https://apnews.com/article/2c38435573fb934dc10c5a9d1f4b6e99',
      },
    ],
  },
  {
    id: 'newar-hinduism',
    title: 'Newar Hinduism',
    devanagari: 'नेवार परम्परा',
    branch: 'nepal',
    summary:
      'Shared streets and sacred places; distinct lineages and ways of worship.',
    sections: [
      {
        title: 'Together does not mean identical',
        text: 'Newar religious life includes Hindu and Vajrayana Buddhist traditions. Shared festivals and deities coexist with distinct priests, initiations and community institutions. “Syncretism” describes interaction, but must not erase these differences.',
      },
      {
        title: 'Community sustains the sacred',
        text: 'Guthi institutions help sustain festivals, ritual obligations and communal work. A neighborhood’s deity, procession route and inherited responsibilities make sacred life intensely local.',
      },
      {
        title: 'Many names, many relationships',
        text: 'Bunga Dya is understood through Buddhist, Hindu and agrarian traditions. Kumari worship likewise joins communities without making their religious identities interchangeable.',
      },
    ],
    related: ['machindranath', 'panchayan', 'kumari', 'samskaras'],
    sources: [
      {
        title:
          'Ian Alsop, Seasonal Travels of the Valley God (Rubin Museum, 2023)',
        url: 'https://rubinmuseum.org/projecthimalayanart/essays/bunga-dya-bunga-lokeshvara-karunamaya-rato-macchendranath/',
      },
      {
        title: 'David N. Gellner, Monk, Householder, and Tantric Priest (1992)',
        url: 'https://www.cambridge.org/core/books/monk-householder-and-tantric-priest/',
      },
    ],
  },
  {
    id: 'machindranath',
    title: 'Machindranath / Karunamaya',
    devanagari: 'करुणामय',
    branch: 'nepal',
    summary:
      'The rain-bringing valley deity with several religious identities.',
    sections: [
      {
        title: 'A deity with multiple names',
        text: 'Bunga Dya, also called Rato Machindranath and Karunamaya, is associated with rain and agriculture. Buddhist devotees identify him with Avalokiteshvara; Hindu traditions connect him with the Nath yogi Matsyendranath.',
      },
      {
        title: 'The chariot and the community',
        text: 'The elaborate chariot festival in Patan brings together Buddhist officiants and Hindu and Buddhist participants. The deity’s homes in Bungamati and Patan connect settlements through an annual ritual cycle.',
      },
    ],
    related: ['newar-hinduism', 'bhakti-yoga'],
    sources: [
      {
        title:
          'Ian Alsop, Seasonal Travels of the Valley God (Rubin Museum, 2023)',
        url: 'https://rubinmuseum.org/projecthimalayanart/essays/bunga-dya-bunga-lokeshvara-karunamaya-rato-macchendranath/',
      },
    ],
  },
  {
    id: 'panchayan',
    title: 'Panchayan: five-deity worship',
    devanagari: 'पञ्चायतन',
    branch: 'nepal',
    summary: 'A fivefold arrangement of divine forms, with local expressions.',
    sections: [
      {
        title: 'Five forms in relationship',
        text: 'Panchayatana worship commonly brings Shiva, Vishnu, Devi, Surya and Ganesha together, with the preferred deity at the center. Nepal preserves distinctive sculptural expressions of this arrangement.',
      },
      {
        title: 'A careful distinction',
        text: 'Five-deity worship is found beyond Nepal too. It should not be described as uniquely Newar, nor should one sculpture’s arrangement be assumed to represent every Newar household.',
      },
    ],
    related: ['shiva', 'vishnu', 'devi', 'surya', 'ganesha'],
    sources: [
      {
        title:
          'Sculpture of Panchayan Deities of National Museum: An Illustrative Stone Work of Nepal',
        url: 'https://www.researchgate.net/publication/358312306_Sculpture_of_Panchayan_Deities_of_National_Museum_An_Illustrative_Stone_Work_of_Nepal',
      },
    ],
  },
  {
    id: 'monarchy',
    title: 'Kingship, temples & the state',
    devanagari: 'राज्य र धर्म',
    branch: 'nepal',
    summary:
      'How royal patronage shaped sacred places—and how institutions changed.',
    sections: [
      {
        title: 'Malla city kingdoms',
        text: 'Malla rulers sponsored temples, palace squares and festivals in the Kathmandu Valley. Royal devotion to Taleju connected kingship and ritual protection. Sacred architecture also depended on artisans, donors and community institutions.',
      },
      {
        title: 'Shah expansion',
        text: 'Prithvi Narayan Shah’s conquest of the valley in 1768–69 was central to the formation of the expanding Gorkha state. Hindu kingship supported royal legitimacy; communities across the kingdom nevertheless maintained diverse religious lives.',
      },
      {
        title: 'Institutions change',
        text: 'Nepal’s monarchy ended in 2008. The loss of the royal institution did not end the festivals and temple traditions once associated with it. Political institutions and religious participation are related but distinct histories.',
      },
    ],
    related: ['kumari', 'pashupatinath', 'taleju'],
    sources: [
      {
        title: 'UNESCO — Kathmandu Valley',
        url: 'https://whc.unesco.org/en/list/121',
      },
      {
        title: 'Axel Michaels, Nepal: A History — From Gorkha to Nepal (2024)',
        url: 'https://academic.oup.com/book/56088/chapter-abstract/442704231',
      },
      {
        title: 'Office of the President of Nepal — History & Background',
        url: 'https://demo.presidentofnepal.gov.np/history-background/',
      },
    ],
  },
];
