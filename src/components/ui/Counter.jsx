import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start;
    const run = timestamp => {
      start ??= timestamp;
      const progress = Math.min((timestamp - start) / 1300, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(run);
    };

    requestAnimationFrame(run);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}
