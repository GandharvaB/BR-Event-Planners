import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const portfolioItems = [
  {
    title: 'Armaan Malik',
    category: 'Concerts',
    image: 'src/imports/Arman Malik.jpeg',

  },
  {
    title: 'Darshan Raval',
    category: 'Fests',
    image: 'src/imports/DR.jpg',

  },
  {
    title: 'Jonita Gandhi',
    category: 'Fests',
    image: 'src/imports/JG.jpg',
  },
  {
    title: 'Masala Coffee',
    category: 'Fests',
    image: 'src/imports/MC.jpg',

  },
  {
    title: 'Salim Sulaiman',
    category: 'Concerts',
    image: 'src/imports/SS.jpg',

  },
  {
    title: 'Mohan Sisters',
    category: 'Fests',
    image: 'src/imports/MS.jpg',

  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 lg:py-48 bg-secondary/30 relative">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-4xl"
        >
          <div className="text-sm tracking-[0.2em] uppercase text-foreground/50 mb-4">
            Selected Work
          </div>
          <h2 className="serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground mb-8">
            Iconic Artists.
            <br />
            Unforgettable Experiences.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden border border-border/20">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              <div className="space-y-2">
                <div className="text-xs tracking-[0.2em] uppercase text-accent">
                  {item.category}
                </div>
                <h3 className="serif text-2xl lg:text-3xl text-foreground">
                  {item.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <button className="px-8 py-4 bg-transparent text-foreground text-sm tracking-[0.15em] uppercase border border-foreground/20 hover:border-accent hover:text-accent transition-all duration-500">
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}
