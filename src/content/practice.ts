import type { Entry } from './catalog';
export const practice: Entry[] = [
  {
    id: 'yoga',
    title: 'The four paths of yoga',
    devanagari: 'योग',
    branch: 'practice',
    summary: 'Different disciplines for different temperaments.',
    sections: [
      {
        title: 'In practice',
        text: 'Bhakti emphasizes devotion; jnana, inquiry and insight; karma, disciplined action without attachment; raja, meditative discipline. This fourfold teaching is a widely used modern framework; historical yoga traditions are more varied.',
      },
    ],
    related: ['bhakti-yoga', 'jnana-yoga', 'karma-yoga', 'raja-yoga'],
    sources: [
      {
        title: 'Swami Vivekananda, Raja Yoga (1896, public domain)',
        url: 'https://sacred-texts.com/hin/raja.htm',
      },
      {
        title: 'Mary Shepherd Slusser, Nepal Mandala (1982)',
        url: 'https://press.princeton.edu/books/hardcover/9780691031286/nepal-mandala',
      },
    ],
  },
  {
    id: 'bhakti-yoga',
    title: 'Bhakti yoga',
    devanagari: 'भक्ति योग',
    branch: 'practice',
    summary: 'Cultivating a relationship of devotion.',
    sections: [
      {
        title: 'In practice',
        text: 'Prayer, song, remembrance and service can express bhakti. Devotees relate to the divine through many forms and relationships.',
      },
    ],
    related: ['vishnu', 'devi'],
    sources: [
      {
        title: 'Swami Vivekananda, Raja Yoga (1896, public domain)',
        url: 'https://sacred-texts.com/hin/raja.htm',
      },
      {
        title: 'Mary Shepherd Slusser, Nepal Mandala (1982)',
        url: 'https://press.princeton.edu/books/hardcover/9780691031286/nepal-mandala',
      },
    ],
  },
  {
    id: 'jnana-yoga',
    title: 'Jnana yoga',
    devanagari: 'ज्ञान योग',
    branch: 'practice',
    summary: 'Inquiry into the nature of the self.',
    sections: [
      {
        title: 'In practice',
        text: 'Listening, reflection and contemplation are central to traditions that emphasize liberating knowledge. Philosophical schools disagree about what that knowledge reveals.',
      },
    ],
    related: ['upanishads', 'atman-brahman'],
    sources: [
      {
        title: 'Swami Vivekananda, Raja Yoga (1896, public domain)',
        url: 'https://sacred-texts.com/hin/raja.htm',
      },
      {
        title: 'Mary Shepherd Slusser, Nepal Mandala (1982)',
        url: 'https://press.princeton.edu/books/hardcover/9780691031286/nepal-mandala',
      },
    ],
  },
  {
    id: 'karma-yoga',
    title: 'Karma yoga',
    devanagari: 'कर्म योग',
    branch: 'practice',
    summary: 'Act with care, without owning the outcome.',
    sections: [
      {
        title: 'In practice',
        text: 'Karma yoga asks how work can be disciplined without being driven by possessiveness. It does not ask people to abandon responsibility for the effects of their actions.',
      },
    ],
    related: ['karma', 'dharma'],
    sources: [
      {
        title: 'Swami Vivekananda, Raja Yoga (1896, public domain)',
        url: 'https://sacred-texts.com/hin/raja.htm',
      },
      {
        title: 'Mary Shepherd Slusser, Nepal Mandala (1982)',
        url: 'https://press.princeton.edu/books/hardcover/9780691031286/nepal-mandala',
      },
    ],
  },
  {
    id: 'raja-yoga',
    title: 'Raja yoga',
    devanagari: 'राज योग',
    branch: 'practice',
    summary: 'A path of training attention.',
    sections: [
      {
        title: 'In practice',
        text: 'Raja yoga is often associated with Patanjali’s eight limbs, from ethical restraints to absorption. The modern label and its usage should not be assumed to describe all historical yoga.',
      },
    ],
    related: ['yoga', 'moksha'],
    sources: [
      {
        title: 'Swami Vivekananda, Raja Yoga (1896, public domain)',
        url: 'https://sacred-texts.com/hin/raja.htm',
      },
      {
        title: 'Mary Shepherd Slusser, Nepal Mandala (1982)',
        url: 'https://press.princeton.edu/books/hardcover/9780691031286/nepal-mandala',
      },
    ],
  },
  {
    id: 'samskaras',
    title: 'Life-cycle rites in Nepal',
    devanagari: 'संस्कार',
    branch: 'practice',
    summary: 'Rites mark belonging and transitions through life.',
    sections: [
      {
        title: 'In practice',
        text: 'Many Parbatiya Hindu households observe naming (nwaran), first rice (pasni), initiation (bratabandha), marriage and death rites. Newar communities have distinct rites, including ihi in many communities and boys’ initiations whose forms differ between Hindu and Buddhist groups. No single list describes all Nepalis.',
      },
    ],
    related: ['dharma', 'newar-hinduism'],
    sources: [
      {
        title: 'Swami Vivekananda, Raja Yoga (1896, public domain)',
        url: 'https://sacred-texts.com/hin/raja.htm',
      },
      {
        title: 'Mary Shepherd Slusser, Nepal Mandala (1982)',
        url: 'https://press.princeton.edu/books/hardcover/9780691031286/nepal-mandala',
      },
    ],
  },
  {
    id: 'glossary',
    title: 'A living glossary',
    devanagari: 'शब्दावली',
    branch: 'practice',
    summary: 'A small guide to words encountered along the way.',
    sections: [
      {
        title: 'In practice',
        text: 'Puja (पूजा): worship or honoring. Darshan (दर्शन): seeing and being in the presence of a deity, also a philosophical viewpoint. Jatra (जात्रा): a festival procession. Prasad (प्रसाद): a blessed offering shared after worship. Shakti (शक्ति): divine power, often understood as the Goddess. Guthi (गुठी): an association or endowed institution sustaining communal and ritual obligations in Nepal.',
      },
    ],
    related: ['dharma', 'karma', 'moksha', 'atman-brahman'],
    sources: [
      {
        title: 'Swami Vivekananda, Raja Yoga (1896, public domain)',
        url: 'https://sacred-texts.com/hin/raja.htm',
      },
      {
        title: 'Mary Shepherd Slusser, Nepal Mandala (1982)',
        url: 'https://press.princeton.edu/books/hardcover/9780691031286/nepal-mandala',
      },
    ],
  },
];
