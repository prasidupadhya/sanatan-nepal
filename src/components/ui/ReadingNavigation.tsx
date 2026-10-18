import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll } from 'framer-motion';

export type ReadingSection = { id: string; title: string };
export default function ReadingNavigation({
  sections,
}: {
  sections: ReadingSection[];
}) {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState(sections[0]?.id);
  const navRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    // On narrow screens the list scrolls sideways; keep the current section in view.
    const nav = navRef.current;
    const link = nav?.querySelector<HTMLElement>('[aria-current]');
    if (!nav || !link || nav.scrollWidth <= nav.clientWidth) return;
    const start = link.offsetLeft - nav.offsetLeft;
    const visible =
      start >= nav.scrollLeft &&
      start + link.offsetWidth <= nav.scrollLeft + nav.clientWidth - 48;
    if (visible) return;
    nav.scrollTo({
      left: start - 16,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  }, [active, reducedMotion]);
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
      <nav aria-label="On this page" ref={navRef}>
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
