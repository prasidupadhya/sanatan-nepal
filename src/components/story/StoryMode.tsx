import { useRef } from 'react';
import { motion, useScroll, useReducedMotion } from 'framer-motion';
export type Scene = { title: string; text: string; symbol: string };
export default function StoryMode({ scenes }: { scenes: Scene[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const reduced = useReducedMotion();
  return (
    <section>
      <h2>Walk through the story</h2>
      <p>A short narrative journey. Scroll through each turning point.</p>
      <div ref={ref} className="story">
        <motion.div
          className="story-progress"
          style={{ scaleY: reduced ? 1 : scrollYProgress }}
        />
        {scenes.map((s, i) => (
          <motion.article
            key={s.title}
            className="story-scene"
            initial={reduced ? false : { opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.5 }}
          >
            <div aria-hidden="true" className="scene-art">
              {s.symbol}
            </div>
            <div>
              <span className="step">
                Moment {i + 1} of {scenes.length}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
