const skills = [
  {
    area: "Research",
    items: ["User Interviews", "Usability Testing", "Journey Mapping", "Competitive Analysis"],
  },
  {
    area: "Design",
    items: ["Wireframing", "Prototyping", "Design Systems", "Interaction Design"],
  },
  {
    area: "Tools",
    items: ["Figma", "Framer", "Maze", "Notion"],
  },
];

const experience = [
  { role: "Senior UX Designer", company: "Visionet Systems", period: "Feb 2025 — Now" },
  { role: "UX Designer", company: "Oneindia", period: "Jun 2023 — Jan 2025" },
  { role: "Software Engineer", company: "EDS Technologies", period: "Jul 2017 — Apr 2019" },
];

export function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      {/* Section header */}
      <div className="flex items-end justify-between mb-14 border-b border-black/8 pb-5">
        <div>
          <p
            className="text-xs tracking-widest text-black/30 uppercase mb-1"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            Background
          </p>
          <h2
            className="text-[#141414]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "1.25rem" }}
          >
            About
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-16">
        {/* Bio */}
        <div>
          <p
            className="text-[#141414]/75 leading-relaxed mb-5"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "1.05rem" }}
          >
            Hi, I'm Anusha — a UX designer with 4+ years of experience shaping products
            at the intersection of clarity and craft.
          </p>
          <p
            className="text-black/45 leading-relaxed mb-5"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            I'm deeply curious about how things work — from the way people interact with
            technology to the ideas of thinkers like Naval Ravikant, Charlie Munger, and
            Nassim Taleb. Their work shapes how I approach design: with clarity, empathy,
            and long-term thinking.
          </p>
          <p
            className="text-black/45 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            Outside of work, you'll find me dancing to hip-hop, sketching type, or
            planning slow-travel getaways around food and culture.
          </p>
        </div>

        {/* Experience timeline */}
        <div>
          <p
            className="text-xs tracking-widest text-black/30 uppercase mb-5"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            Experience
          </p>
          <div className="flex flex-col gap-0">
            {experience.map((exp, i) => (
              <div
                key={exp.company}
                className={`flex items-start justify-between py-4 ${
                  i < experience.length - 1 ? "border-b border-black/6" : ""
                }`}
              >
                <div>
                  <p
                    className="text-sm text-[#141414]/80"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                  >
                    {exp.role}
                  </p>
                  <p
                    className="text-xs text-black/35 mt-0.5"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                  >
                    {exp.company}
                  </p>
                </div>
                <span
                  className="text-xs text-black/25 whitespace-nowrap mt-0.5"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                >
                  {exp.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-black/6 pt-12">
        {skills.map((group) => (
          <div key={group.area}>
            <p
              className="text-xs tracking-widest text-black/28 uppercase mb-4"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              {group.area}
            </p>
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-black/50"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
