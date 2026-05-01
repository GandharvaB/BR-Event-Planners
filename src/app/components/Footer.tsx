import logoImg from "../../imports/669720180_18323274829264683_6690531393154071063_n.jpg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div>
            <img
              src={logoImg}
              alt="BR Event Planners"
              className="h-14 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Crafting unforgettable moments through thoughtful design and
              meticulous execution.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.15em] uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {['Weddings', 'Corporate Events', 'Private Celebrations', 'Full Planning'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-primary-foreground/70 hover:text-accent transition-colors duration-500 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.15em] uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {['About', 'Portfolio', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-500 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.15em] uppercase mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/breventplanners/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-500 text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-500 text-sm"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-500 text-sm"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-xs tracking-wide">
            © {currentYear} BR Event Planners. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-accent transition-colors duration-500 text-xs tracking-wide"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-accent transition-colors duration-500 text-xs tracking-wide"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
