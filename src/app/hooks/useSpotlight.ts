import { useEffect, useRef } from 'react';

export function useSpotlight(elementRef: React.RefObject<HTMLElement | null>) {
  const rafRef = useRef<number>();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let targetAngle = 0;
    let targetDistance = 0;
    let currentAngle = 0;
    let currentDistance = 0;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      targetAngle = Math.atan2(deltaX, deltaY);
      targetDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    };

    const animate = () => {
      currentAngle = lerp(currentAngle, targetAngle, 0.1);
      currentDistance = lerp(currentDistance, targetDistance, 0.1);

      element.style.setProperty('--spotlight-angle', currentAngle.toString());
      element.style.setProperty('--spotlight-angle-deg', `${currentAngle}rad`);
      element.style.setProperty('--spotlight-distance', currentDistance.toString());

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [elementRef]);
}
