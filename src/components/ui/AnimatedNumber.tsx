import { useEffect, useRef } from "react";

export function AnimatedNumber({ value, duration = 2000, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (isNaN(end)) return;
    const increment = Math.max(1, Math.floor(end / (duration / 16)));
    let current = start;
    let raf;

    function animate() {
      current += increment;
      if (current > end) current = end;
      if (ref.current) ref.current.textContent = current.toLocaleString();
      if (current < end) {
        raf = requestAnimationFrame(animate);
      }
    }
    animate();
    return () => raf && cancelAnimationFrame(raf);
  }, [value, duration]);

  return <span ref={ref} className={className}>{value}</span>;
}
