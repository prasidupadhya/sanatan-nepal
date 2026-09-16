import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const contexts = {
  kumari: [
    [
      'Kathmandu',
      'The chariot procession during Indra Jatra makes this Kumari institution especially visible.',
      'indra-jatra',
    ],
    [
      'Patan',
      'Patan maintains its own Kumari institution within a distinct local religious setting.',
      'newar-hinduism',
    ],
    [
      'Bhaktapur',
      'Bhaktapur’s Kumari tradition belongs to its own network of local ritual relationships.',
      'taleju',
    ],
  ],
  'newar-hinduism': [
    [
      'Shared devotion',
      'Bunga Dya connects Buddhist compassion, Hindu yogic identity and hopes for rain.',
      'machindranath',
    ],
    [
      'Distinct traditions',
      'Shared worship coexists with different priestly lineages and initiation practices.',
      'samskaras',
    ],
    [
      'Community care',
      'Festivals rely on neighborhood organizations, inherited duties and collective work.',
      'indra-jatra',
    ],
  ],
  monarchy: [
    [
      'Malla patronage',
      'Temples and palace squares express the patronage of valley city kingdoms.',
      'taleju',
    ],
    [
      '1768–69',
      'Shah conquest transformed the political landscape of the Kathmandu Valley.',
      'pashupatinath',
    ],
    [
      '2008',
      'The monarchy ended; religious traditions continued through changing institutions.',
      'kumari',
    ],
  ],
};
export default function TraditionExplorer({ id }: { id: string }) {
  const [active, setActive] = useState(0);
  const items = contexts[id as keyof typeof contexts];
  if (!items) return null;
  return (
    <section className="tradition-explorer">
      <h2>
        {id === 'monarchy'
          ? 'Explore the historical timeline'
          : id === 'kumari'
            ? 'One tradition, different cities'
            : 'Explore the shared sacred world'}
      </h2>
      <div
        className="chips"
        role="group"
        aria-label="Choose a cultural context"
      >
        {items.map((item, i) => (
          <button
            key={item[0]}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            {item[0]}
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        className="entry-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h3>{items[active][0]}</h3>
        <p>{items[active][1]}</p>
        <Link className="text-link" to={'/read/' + items[active][2]}>
          Follow the connection
        </Link>
      </motion.div>
    </section>
  );
}
