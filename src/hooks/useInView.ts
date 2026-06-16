import { useEffect, useState } from "react";

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15 }
) {
  const [ref, setRef] = useState<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), options);
    obs.observe(ref);
    return () => obs.disconnect();
  }, [ref, options]);
  return [setRef, inView] as const;
}
