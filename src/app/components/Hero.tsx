interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-80px)] flex flex-col justify-center max-w-5xl mx-auto px-6"
    >
      <div className="max-w-2xl">
        <p
          className="text-xs tracking-widest text-black/35 uppercase mb-7"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
        >
          UX Designer
        </p>

        {/* Mixed-weight headline */}
        <div
          className="mb-9"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
            lineHeight: 1.25,
          }}
        >
          <p>
            <span className="text-black/25" style={{ fontWeight: 200 }}>Hi, I'm Anusha — I design </span>
          </p>
          <p>
            <span className="text-[#141414]" style={{ fontWeight: 600 }}>user-centered experiences</span>
          </p>
          <p>
            <span className="text-black/25" style={{ fontWeight: 200 }}>that merge </span>
            <span className="text-[#141414]" style={{ fontWeight: 600 }}>creativity</span>
            <span className="text-black/25" style={{ fontWeight: 200 }}> and insight.</span>
          </p>
        </div>

        <p
          className="text-black/45 max-w-md leading-relaxed mb-10"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "1rem" }}
        >
          Currently designing at Visionet Systems. I bring systems thinking,
          research, and storytelling into every product I work on.
        </p>

        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigate("work")}
            className="bg-[#141414] text-white px-6 py-3 text-sm tracking-wide hover:bg-black/70 transition-colors"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            View Work
          </button>
          <button
            onClick={() => onNavigate("connect")}
            className="text-sm text-black/40 hover:text-black transition-colors border-b border-black/15 pb-0.5"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            Let's connect →
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hidden md:flex flex-col items-center gap-2 absolute bottom-10 left-6">
        <div className="w-px h-12 bg-black/8 relative overflow-hidden">
          <div
            className="w-full bg-black/25"
            style={{
              height: "40%",
              animation: "scrollLine 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}
