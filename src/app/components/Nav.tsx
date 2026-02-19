import { useState, useEffect } from "react";

interface NavProps {
  onNavigate: (section: string) => void;
}

export function Nav({ onNavigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Work", target: "work" },
    { label: "About", target: "about" },
    { label: "Connect", target: "connect" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "border-b border-black/8" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Name */}
        <button
          onClick={() => onNavigate("hero")}
          className="text-[#141414] text-sm tracking-wide hover:opacity-50 transition-opacity"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
        >
          Anusha S V
        </button>

        {/* Desktop pill nav */}
        <div className="hidden md:flex bg-[#f0f0f0] rounded-full px-2 py-2 gap-1 items-center">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => onNavigate(link.target)}
              className="text-[#141414]/60 text-sm px-4 py-1.5 rounded-full hover:text-[#141414] hover:bg-white transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-black transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-black transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/6 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => { onNavigate(link.target); setMenuOpen(false); }}
              className="text-left text-sm text-[#141414]/60 hover:text-[#141414] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
