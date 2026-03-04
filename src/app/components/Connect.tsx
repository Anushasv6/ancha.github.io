import svgPaths from "../../imports/svg-hkac763g3h";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anusha-s-v-60b815b9" },
  { label: "Resume", href: "https://drive.google.com/file/d/1-cd5TwloMeQpqY-3QlazJYwwRSCfb9QR/view?usp=drivesdk" },
  { label: "Dribbble", href: "#" },
];

export function Connect() {
  return (
    <section id="connect" className="bg-[#f7f7f7] w-full">
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Section header */}
        <div className="flex items-end justify-between mb-14 border-b border-black/8 pb-5">
          <div>
            <p
              className="text-xs tracking-widest text-black/30 uppercase mb-1"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              Say hello
            </p>
            <h2
              className="text-[#141414]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "1.25rem" }}
            >
              Let's Connect
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: message */}
          <div>
            <p
              className="text-[#141414]/60 leading-relaxed mb-6"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "1.05rem" }}
            >
              Open to senior UX roles, freelance projects, and thoughtful collaborations.
              I'd love to hear about what you're building.
            </p>
            <a
              href="mailto:anusha@example.com"
              className="inline-block text-[#141414] border-b border-black/25 pb-0.5 hover:border-black transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "1rem" }}
            >
              anusha@example.com
            </a>
          </div>

          {/* Right: links */}
          <div className="flex flex-col gap-4 justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-black/35 hover:text-[#141414] transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
              >
                <span className="w-5 h-px bg-black/15 group-hover:w-8 transition-all duration-300" />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Footer line */}
        <div className="mt-20 border-t border-black/8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 17 17" fill="none" className="shrink-0 opacity-30">
              <g clipPath="url(#clip0_footer)">
                <path d={svgPaths.p28118480} stroke="#141414" strokeWidth="1.3" />
                <path d={svgPaths.p33ba9e00} fill="#141414" stroke="#141414" strokeWidth="0.2" />
              </g>
              <defs>
                <clipPath id="clip0_footer">
                  <rect fill="white" width="17" height="17" />
                </clipPath>
              </defs>
            </svg>
            <span
              className="text-xs text-black/25"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              2025 Anusha S V
            </span>
          </div>
          <span
            className="text-xs text-black/25"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            Bangalore, India
          </span>
        </div>
      </div>
    </section>
  );
}
