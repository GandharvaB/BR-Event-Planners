import logoImg from "../../imports/669720180_18323274829264683_6690531393154071063_n.jpg";

interface NavigationProps {
  scrolled: boolean;
}

export function Navigation({ scrolled }: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      }}
    >
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div className="flex items-center">
            <img
              src={logoImg}
              alt="BR Event Planners"
              className="h-12 lg:h-16 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center gap-12">
            {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-[0.1em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-500 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          <button className="hidden md:block px-6 py-3 bg-primary text-primary-foreground text-sm tracking-[0.1em] uppercase border border-primary hover:bg-transparent hover:text-primary transition-all duration-500">
            Book Now
          </button>

          <button className="md:hidden text-foreground">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
