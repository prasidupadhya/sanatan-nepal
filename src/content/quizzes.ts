export type Question = {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};
export const quizzes: Record<string, Question[]> = {
  foundations: [
    {
      prompt: 'Which Veda is arranged for ritual singing?',
      options: ['Samaveda', 'Rigveda', 'Atharvaveda'],
      answer: 0,
      explanation:
        'The Samaveda organizes verses as chants for ritual performance.',
    },
    {
      prompt: 'How do Vedanta schools interpret Atman and Brahman?',
      options: [
        'They all give one identical answer',
        'They offer different accounts of the relationship',
        'They refer to two royal dynasties',
      ],
      answer: 1,
      explanation:
        'Advaita, Vishishtadvaita and Dvaita differ on the relationship between self and ultimate reality.',
    },
    {
      prompt: 'What does dharma invite us to consider?',
      options: [
        'Only material success',
        'Only a fixed calendar',
        'Responsibility, order and ethical action',
      ],
      answer: 2,
      explanation:
        'Dharma includes duties and ethical questions; the epics show how duties can conflict.',
    },
  ],
  epics: [
    {
      prompt: 'Where is the Bhagavad Gita situated?',
      options: [
        'Within the Mahabharata',
        'Within the Samaveda',
        'Within the Ramayana',
      ],
      answer: 0,
      explanation:
        'Krishna and Arjuna’s dialogue takes place before battle in the Mahabharata.',
    },
    {
      prompt: 'What connects Sita’s story to Nepal?',
      options: [
        'The city of Lanka',
        'Mithila and Janakpur traditions',
        'The Kuru throne',
      ],
      answer: 1,
      explanation:
        'Janakpur is associated with Sita and the Mithila marriage narrative.',
    },
    {
      prompt: 'What does the exile map represent?',
      options: [
        'A verified modern road route',
        'An exact archaeological reconstruction',
        'Traditional geographic associations',
      ],
      answer: 2,
      explanation:
        'The map’s locations are traditional associations and its lines are schematic.',
    },
  ],
  puranas: [
    {
      prompt: 'How many Mahapuranas are in the conventional list?',
      options: ['Four', 'Eighteen', 'Seven'],
      answer: 1,
      explanation:
        'The conventional list contains eighteen Mahapuranas, though lists and recensions vary.',
    },
    {
      prompt: 'What do links between Devi’s forms mean?',
      options: [
        'Manifestations and associations',
        'Always biological parentage',
        'Modern political alliances',
      ],
      answer: 0,
      explanation:
        'Forms of the Goddess express related divine identities and powers.',
    },
    {
      prompt: 'Is the Dashavatara list identical everywhere?',
      options: ['Yes', 'No, some lists differ', 'It only contains Rama'],
      answer: 1,
      explanation: 'Some lists include Balarama in place of Buddha or Krishna.',
    },
  ],
  nepal: [
    {
      prompt: 'Which deity is central to Pashupatinath?',
      options: ['Surya', 'Shiva as Pashupati', 'Saraswati'],
      answer: 1,
      explanation:
        'Pashupati is a form of Shiva, understood as lord of living beings.',
    },
    {
      prompt: 'How should shared Newar worship be understood?',
      options: [
        'It erases all religious distinctions',
        'Only one community participates',
        'Shared spaces coexist with distinct traditions',
      ],
      answer: 2,
      explanation:
        'Hindu and Buddhist participation can overlap while priestly lineages and initiations remain distinct.',
    },
    {
      prompt: 'Which festival includes Kathmandu’s Kumari chariot procession?',
      options: ['Indra Jatra', 'Holi', 'Maha Shivaratri'],
      answer: 0,
      explanation:
        'The Kumari procession is a central part of Kathmandu’s Indra Jatra celebrations.',
    },
  ],
  practice: [
    {
      prompt: 'Which path emphasizes devotion?',
      options: ['Bhakti yoga', 'Jnana yoga', 'Only physical exercise'],
      answer: 0,
      explanation:
        'Bhakti centers devotion through practices such as prayer, song and remembrance.',
    },
    {
      prompt: 'Are life-cycle rites the same in every Nepali community?',
      options: [
        'Yes, with no variation',
        'No, communities have distinct practices',
        'They are all royal ceremonies',
      ],
      answer: 1,
      explanation:
        'Parbatiya and Newar traditions, among others, have differing rites and local practices.',
    },
    {
      prompt: 'What does karma yoga emphasize?',
      options: [
        'Avoiding every action',
        'Owning every result',
        'Responsible action without possessive attachment',
      ],
      answer: 2,
      explanation:
        'Karma yoga links disciplined work with freedom from clinging to its rewards.',
    },
  ],
};
