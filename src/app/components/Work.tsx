import { useState } from "react";
import { useNavigate } from "react-router";
import imgRectangle1 from "figma:asset/1ac84b35e4813ee694dcb7885949ea78bd3d05d6.png";
import imgRectangle2 from "figma:asset/5e03363da1f9055f09c3dd9cfff0d33a11239483.png";
import imgRectangle3 from "figma:asset/1d2f1fb553bf14a0193be32b44161c2ee545325d.png";

const projects = [
  {
    id: 1,
    slug: "oneindia",
    title: "Oneindia — Digital News Platform",
    category: "Mobile Design",
    year: "2024",
    description:
      "Redesigned the core reading experience for one of India's largest news platforms. Focused on reducing cognitive load across multilingual audiences through structured hierarchy and contextual navigation.",
    tags: ["Research", "Interaction Design", "Prototyping"],
    img: imgRectangle1,
    accent: "#f3f0fa",
  },
  {
    id: 2,
    slug: "hotstar",
    title: "Disney+ Hotstar — Subscription Journey",
    category: "Product Design",
    year: "2024",
    description:
      "Optimised the end-to-end subscription and onboarding flow to reduce drop-off. Led 3 rounds of usability testing and redesigned the paywall experience to improve conversion clarity.",
    tags: ["Journey Mapping", "Usability Testing", "A/B Testing"],
    img: imgRectangle2,
    accent: "#eef5f0",
  },
  {
    id: 3,
    slug: "circular-textiles",
    title: "Circular Textiles — Platform Design",
    category: "End-to-End UX",
    year: "2023",
    description:
      "Designed a B2B platform connecting textile manufacturers and recyclers, making waste diversion workflows intuitive. Conducted 18 user interviews across the supply chain.",
    tags: ["Systems Design", "User Research", "Design System"],
    img: imgRectangle3,
    accent: "#f0f5ee",
  },
];

export function Work() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section id="work" className="max-w-5xl mx-auto px-6 py-24">
      {/* Section header */}
      <div className="flex items-end justify-between mb-14 border-b border-black/8 pb-5">
        <div>
          <p
            className="text-xs tracking-widest text-black/30 uppercase mb-1"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            Selected Work
          </p>
          <h2
            className="text-[#141414]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "1.25rem" }}
          >
            Case Studies
          </h2>
        </div>
        <span
          className="text-sm text-black/25 hidden sm:block"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
        >
          2023 — 2025
        </span>
      </div>

      {/* Projects */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group cursor-pointer"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div
              className={`grid md:grid-cols-[1fr_1.3fr] gap-8 md:gap-12 py-10 border-b border-black/8 transition-opacity duration-300 cursor-pointer ${
                hoveredId !== null && hoveredId !== project.id
                  ? "opacity-25"
                  : "opacity-100"
              }`}
              onClick={() => { navigate(`/case-study/${project.slug}`); window.scrollTo(0, 0); }}
            >
              {/* Left: info */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs text-black/25"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="w-6 h-px bg-black/12" />
                    <span
                      className="text-xs text-black/35 tracking-widest uppercase"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3
                    className="text-[#141414] mb-4"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: "1.05rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm text-black/45 leading-relaxed max-w-xs"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                  >
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-black/35 border border-black/10 px-2.5 py-1 tracking-wide"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: image */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ backgroundColor: project.accent }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ display: "block", minHeight: "220px", objectPosition: "top" }}
                />
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <span
                    className="text-xs text-black/45"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                  >
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}