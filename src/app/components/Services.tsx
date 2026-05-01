import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect, useCallback } from 'react';
import './Services.css';

// Import images
import weddingImg from '../../imports/wedding.jpg';
import collegeEventsImg from '../../imports/college-events.jpg';
import collegeFestsImg from '../../imports/college-fests.jpg';
import concertsImg from '../../imports/concerts.jpg';
import servicesBg from '../../imports/services-bg.jpg';

const services = [
  {
    title: 'Weddings',
    description:
      'Intimate ceremonies and grand celebrations designed with intention and executed with grace.',
    image: weddingImg,
    position: 'left' as const,
  },
  {
    title: 'College & University Events',
    description:
      'Events ranging from orientation ceremonies, hackathons to proms — creating lasting memories for students and faculty.',
    image: collegeEventsImg,
    position: 'right' as const,
  },
  {
    title: 'College Fests',
    description:
      'Transforming campus energy into unforgettable experiences.',
    image: collegeFestsImg,
    position: 'left' as const,
  },
  {
    title: 'Concerts & Music Events',
    description:
      'From stage design to artist coordination, we curate live music experiences that resonate.',
    image: concertsImg,
    position: 'right' as const,
  },
];

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Scroll-based parallax for background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.15, 1.2]);

  // Lerped cursor position for smooth following
  const cursorPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const echoPos1 = useRef({ x: 0, y: 0 });
  const echoPos2 = useRef({ x: 0, y: 0 });
  const echoPos3 = useRef({ x: 0, y: 0 });
  const cursorEl = useRef<HTMLDivElement>(null);
  const echo1El = useRef<HTMLDivElement>(null);
  const echo2El = useRef<HTMLDivElement>(null);
  const echo3El = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);
  const isInSection = useRef(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    targetPos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseEnterSection = useCallback(() => {
    isInSection.current = true;
  }, []);

  const handleMouseLeaveSection = useCallback(() => {
    isInSection.current = false;
    setHoveredIndex(null);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseenter', handleMouseEnterSection);
    section.addEventListener('mouseleave', handleMouseLeaveSection);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      // Main cursor (lerp 0.75)
      cursorPos.current.x = lerp(cursorPos.current.x, targetPos.current.x, 0.75);
      cursorPos.current.y = lerp(cursorPos.current.y, targetPos.current.y, 0.75);

      // Echo dots with decreasing lerp values
      echoPos1.current.x = lerp(echoPos1.current.x, targetPos.current.x, 0.6);
      echoPos1.current.y = lerp(echoPos1.current.y, targetPos.current.y, 0.6);

      echoPos2.current.x = lerp(echoPos2.current.x, targetPos.current.x, 0.85);
      echoPos2.current.y = lerp(echoPos2.current.y, targetPos.current.y, 0.85);

      echoPos3.current.x = lerp(echoPos3.current.x, targetPos.current.x, 0.95);
      echoPos3.current.y = lerp(echoPos3.current.y, targetPos.current.y, 0.95);

      // Calculate x-velocity for rotation effect
      const xDelta = targetPos.current.x - cursorPos.current.x;

      if (cursorEl.current) {
        cursorEl.current.style.transform = `translate3d(${cursorPos.current.x + 16}px, ${cursorPos.current.y + 24}px, 0) rotate(${xDelta * 0.5}deg)`;
      }
      if (echo1El.current) {
        echo1El.current.style.transform = `translate3d(${echoPos1.current.x + 8}px, ${echoPos1.current.y + 12}px, 0)`;
      }
      if (echo2El.current) {
        echo2El.current.style.transform = `translate3d(${echoPos2.current.x + 8}px, ${echoPos2.current.y + 12}px, 0)`;
      }
      if (echo3El.current) {
        echo3El.current.style.transform = `translate3d(${echoPos3.current.x + 8}px, ${echoPos3.current.y + 12}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseenter', handleMouseEnterSection);
      section.removeEventListener('mouseleave', handleMouseLeaveSection);
      cancelAnimationFrame(rafId.current);
    };
  }, [handleMouseMove, handleMouseEnterSection, handleMouseLeaveSection]);

  const cursorClass = hoveredIndex !== null ? `svc-cursor target-${hoveredIndex + 1}` : 'svc-cursor';

  return (
    <section
      ref={sectionRef}
      id="services"
      className="services-cursor-section py-32 lg:py-48 relative overflow-hidden"
    >
      {/* Parallax Background Image — moves with scroll */}
      <motion.div
        className="svc-parallax-bg"
        style={{ y: bgY, scale: bgScale }}
      >
        <img src={servicesBg} alt="" aria-hidden="true" />
        <div className="svc-parallax-overlay" />
      </motion.div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-sm tracking-[0.2em] uppercase text-white/50 mb-4">
            Our Expertise
          </div>
          <h2 className="serif text-5xl md:text-6xl lg:text-7xl leading-tight text-white drop-shadow-lg">
            What We Create
          </h2>
        </motion.div>

        {/* Liquid Glass Container */}
        <div className="liquid-glass">
          {/* Service Items Grid */}
          <div className="svc-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`svc-item ${service.position === 'left' ? 'svc-left' : 'svc-right'}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="svc-title serif">{service.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Services link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-block text-sm tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors duration-500 relative group"
          >
            View All Services
            <span className="absolute bottom-0 left-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </motion.div>
      </div>

      {/* Custom Cursor Follower with images */}
      <div ref={cursorEl} className={cursorClass}>
        <figure className="cursor-img-1">
          <img src={weddingImg} alt="Weddings" />
        </figure>
        <figure className="cursor-img-2">
          <img src={collegeEventsImg} alt="College & University Events" />
        </figure>
        <figure className="cursor-img-3">
          <img src={collegeFestsImg} alt="College Fests" />
        </figure>
        <figure className="cursor-img-4">
          <img src={concertsImg} alt="Concerts & Music Events" />
        </figure>
      </div>

      {/* Cursor echo dots */}
      <div ref={echo1El} className="svc-cursor-echo" />
      <div ref={echo2El} className="svc-cursor-echo" />
      <div ref={echo3El} className="svc-cursor-echo" />
    </section>
  );
}
