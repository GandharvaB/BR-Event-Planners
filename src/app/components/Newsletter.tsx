import { motion } from 'motion/react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section id="contact" className="py-32 lg:py-48 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="text-sm tracking-[0.2em] uppercase text-foreground/50 mb-6">
            Notes on Celebration
          </div>
          <h2 className="serif text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-8">
            Stay Inspired
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-12">
            Curated insights on design, thoughtful planning, and the art of
            creating moments that matter. Delivered monthly to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-6 py-4 bg-background/50 backdrop-blur-sm border border-border/30 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/50 transition-colors duration-500"
              style={{ backdropFilter: 'blur(10px)' }}
            />
            <button
              type="submit"
              className="px-8 py-4 bg-primary text-primary-foreground text-sm tracking-[0.15em] uppercase border border-primary hover:bg-transparent hover:text-primary transition-all duration-500 whitespace-nowrap"
            >
              Join Us
            </button>
          </form>

          <p className="text-xs text-foreground/40 mt-6 tracking-wide">
            No spam, just curated stories. Unsubscribe anytime.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 pt-16 border-t border-border/30 text-center"
        >
          <div className="text-sm tracking-[0.2em] uppercase text-foreground/50 mb-6">
            Get In Touch
          </div>
          <a
            href="mailto:hello@breventplanners.com"
            className="serif text-3xl lg:text-4xl text-foreground hover:text-accent transition-colors duration-500"
          >
            hello@breventplanners.com
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-foreground/60">
            <a
              href="https://www.instagram.com/breventplanners/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-[0.15em] uppercase hover:text-accent transition-colors duration-500"
            >
              Instagram
            </a>
            <span className="text-foreground/20">•</span>
            <a
              href="#"
              className="text-sm tracking-[0.15em] uppercase hover:text-accent transition-colors duration-500"
            >
              Pinterest
            </a>
            <span className="text-foreground/20">•</span>
            <a
              href="#"
              className="text-sm tracking-[0.15em] uppercase hover:text-accent transition-colors duration-500"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
