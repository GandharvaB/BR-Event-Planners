import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useSpotlight } from '../hooks/useSpotlight';
import { SpotlightCharacter } from './SpotlightCharacter';
import concertBg from '../../imports/concert-bg.jpg';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Custom hook for the SpotlightCharacter CSS variables
  useSpotlight(heroRef);

  // Motion values for spatial parallax effect on the background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const backgroundX = useTransform(smoothX, [-0.5, 0.5], ['-3%', '3%']);
  const backgroundY = useTransform(smoothY, [-0.5, 0.5], ['-3%', '3%']);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Landing Animation & Parallax */}
      <motion.div
        className="absolute inset-0 z-0 origin-center scale-[1.15]"
        style={{ x: backgroundX, y: backgroundY }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1.15 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={concertBg}
          alt="Concert Experience"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-8 lg:px-16 py-32 lg:py-48 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-sm tracking-[0.2em] uppercase text-white/60 mb-8"
          >
            Curated Experiences
          </motion.div>

          {/* Changed text color to white for contrast against dark background */}
          <h1 className="serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] mb-8 text-white drop-shadow-xl will-change-transform">
            Crafting
            <br />
            Unforgettable
            <br />
            <span className="italic text-[#8bb7f0] drop-shadow-lg">Moments</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-lg md:text-xl leading-relaxed text-white/80 tracking-wide will-change-transform drop-shadow-md"
            style={{ letterSpacing: '0.02em' }}
          >
            BR Event Planners brings thoughtful design and meticulous attention
            to every celebration. From intimate gatherings to grand affairs, we
            create experiences that resonate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-6 will-change-transform"
          >
            <button className="px-8 py-4 bg-white text-black text-sm tracking-[0.15em] uppercase border border-white hover:bg-transparent hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Explore Our Work
            </button>
            <button className="px-8 py-4 bg-transparent text-white text-sm tracking-[0.15em] uppercase border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-500">
              Start Planning
            </button>
          </motion.div>
        </motion.div>

        {/* Spotlight Character Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="relative z-10 flex justify-center items-center lg:translate-x-24"
        >
          <div className="relative w-full max-w-[500px]">
            {/* Glowing backdrop to add depth and separate from the dark background */}
            <div className="absolute inset-0 bg-[#8bb7f0]/20 blur-[100px] rounded-full transform scale-125" />
            
            <SpotlightCharacter />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"
        />
      </div>
    </section>
  );
}
