import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

export type ReadingSection = { id: string; title: string };
export default function ReadingNavigation({
  sections,
}: {
  sections: ReadingSection[];
}) {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState(sections[0]?.id);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (observed) => {
        const visible = observed
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-5% 0px -60% 0px' },
    );
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [sections]);
  return (
    <aside className="reading-navigation">
      <motion.div
        className="reading-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
      <nav aria-label="On this page">
        <strong>On this page</strong>
        {sections.map((section) => (
          <a
            key={section.id}
            href={'#' + section.id}
            aria-current={active === section.id ? 'location' : undefined}
            onClick={() => setActive(section.id)}
          >
            {section.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
