import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import logoImg from '../../imports/669720180_18323274829264683_6690531393154071063_n.jpg';
import weddingImg from '../../imports/wedding.jpg';
import concertBg from '../../imports/concert-bg.jpg';
import './About.css';

const stats = [
  { number: '200+', label: 'Events Curated', delay: 0 },
  { number: '4.9★', label: 'Client Rating', delay: 0.1 },
  { number: '35+', label: 'Happy Reviews', delay: 0.2 },
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section py-32 lg:py-48 bg-background relative overflow-hidden"
    >
      {/* Ambient blurs */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-accent/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-accent/3 blur-[100px] rounded-full" />

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative z-10">

        {/* ── Hero Block: Tagline + Image Collage ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm tracking-[0.2em] uppercase text-foreground/50 mb-4">
              About Us
            </div>
            <h2 className="serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground mb-12">
              Crafting the
              <br />
              Extraordinary
            </h2>

            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                Based in <strong className="text-foreground/90">Pattabipuram, Guntur</strong>,
                BR Event Planners is the go-to destination for exceptional event planning
                and management. With a dedicated team of skilled professionals, we provide
                customizable options to match any event's theme and style — from grand
                weddings to intimate private gatherings.
              </p>

              <p>
                Our attention to detail ensures every aspect of your event is flawlessly
                executed, allowing you to relax and enjoy your special day. We've spent
                years cultivating relationships with the finest vendors, venues, and
                artisans, bringing your vision to life with authenticity and grace.
              </p>

              <p className="about-quote serif italic text-2xl text-foreground/80">
                "We don't just plan events — we craft experiences that
                linger in memory long after the last guest departs."
              </p>
            </div>

            {/* Logo + Origin */}
            <div className="mt-12 pt-12 border-t border-border/30">
              <div className="flex items-center gap-6">
                <img
                  src={logoImg}
                  alt="BR Event Planners"
                  className="h-16 w-auto object-contain opacity-80"
                />
                <div>
                  <div className="text-sm tracking-[0.15em] uppercase text-foreground/60">
                    BR Event Planners
                  </div>
                  <div className="text-foreground/50 mt-1">
                    Pattabipuram, Guntur
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="about-image-stack">
              {/* Main image */}
              <motion.div className="about-img-main" style={{ y: imgY }}>
                <img
                  src={weddingImg}
                  alt="Grand wedding event by BR Event Planners"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Secondary image — offset */}
              <motion.div
                className="about-img-secondary"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <img
                  src={concertBg}
                  alt="Concert event managed by BR Event Planners"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                className="about-floating-stat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-4xl serif text-accent mb-1">4.9★</div>
                <div className="text-xs tracking-[0.15em] uppercase text-foreground/60">
                  Based on 35+ Reviews
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats Row ── */}
        <div className="about-stats-row mt-32">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="about-stat-item"
            >
              <div className="about-stat-number serif">{stat.number}</div>
              <div className="about-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
