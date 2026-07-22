import { useEffect, useRef, useState } from 'react';

/**
 * Reveal — lightweight scroll-entry wrapper.
 * Uses IntersectionObserver (never a scroll listener) to fade + slide an
 * element into place once it enters the viewport. Respects
 * prefers-reduced-motion by rendering fully visible immediately.
 */
const Reveal = ({ children, className = '', delay = 0, as = 'div', ...rest }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...rest.style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
