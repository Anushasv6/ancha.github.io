import { useParams, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

// ── Thumbnail images (used as heroes for studies without dedicated hero image) ──
import imgOneindia from "figma:asset/oneindia.png";
import imgHotstarThumb from "figma:asset/hotstar-thumb.png";
import imgTextiles from "figma:asset/textiles.png";

// ── Disney+ Hotstar case study images ──────────────────────────────────────────
import imgHotstarHero from "figma:asset/hotstar-hero.png";
import imgHotstar1 from "figma:asset/	hotstar-1.png";
import imgHotstar2 from "figma:asset/	hotstar-2.png";
import imgHotstar3 from "figma:asset/	hotstar-3.png";
import imgHotstar4 from "figma:asset/	hotstar-4.png";

import caseStudies from "../data/caseStudies";

/** Map string keys → imported image URLs */
const imageMap: Record<string, string> = {
  oneindia_hero: imgOneindia,
  hotstar_hero: imgHotstarHero,
  hotstar_1: imgHotstar1,
  hotstar_2: imgHotstar2,
  hotstar_3: imgHotstar3,
  hotstar_4: imgHotstar3,  // reuse until dedicated asset added
  hotstar_5: imgHotstar4,
  textiles_hero: imgTextiles,
};

/** Placeholder block shown when no image is available yet */
function PlaceholderImage({ label = "Image placeholder" }: { label?: string }) {
  return (
    <div className="w-full rounded-2xl bg-[#f5f5f5] border border-black/6 flex flex-col items-center justify-center gap-3 py-20">
      <div className="w-10 h-10 rounded-full border border-dashed border-black/20 flex items-center justify-center">
        <span className="text-black/20 text-xl">+</span>
      </div>
      <p
        className="text-xs text-black/25 tracking-widest uppercase"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {label}
      </p>
    </div>
  );
}

/** Resolve a key to an <img> or a placeholder */
function CaseImage({ imgKey, alt }: { imgKey?: string; alt?: string }) {
  if (!imgKey || imgKey === "placeholder") {
    return <PlaceholderImage />;
  }
  const src = imageMap[imgKey];
  if (!src) return <PlaceholderImage />;
  return (
    <img
      src={src}
      alt={alt ?? ""}
      className="w-full rounded-2xl object-cover block"
    />
  );
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p
          className="text-black/35"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Case study not found.
        </p>
        <button
          onClick={() => navigate("/")}
          className="text-sm text-black hover:opacity-50 transition-opacity border-b border-black/20"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          ← Back to portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* ── Sticky minimal top bar ─────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/6">
        <div className="max-w-4xl mx-auto px-6 h-[64px] flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-black/40 hover:text-black transition-colors"
            style={{ fontWeight: 400 }}
          >
            <ArrowLeft size={15} strokeWidth={1.5} />
            Back
          </button>
          <span
            className="text-xs text-black/25 tracking-widest uppercase hidden sm:block"
            style={{ fontWeight: 400 }}
          >
            {study.category}
          </span>
          <span
            className="text-xs text-black/25"
            style={{ fontWeight: 400 }}
          >
            {study.year}
          </span>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <div className="pt-[64px]">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          {/* Category + role pill row */}
          <div className="flex flex-wrap items-center gap-2 mb-7">
            <span
              className="text-xs text-black/35 tracking-widest uppercase"
              style={{ fontWeight: 400 }}
            >
              {study.category}
            </span>
            <span className="text-black/15">·</span>
            <span
              className="text-xs text-black/25"
              style={{ fontWeight: 400 }}
            >
              {study.role}
            </span>
            <span className="text-black/15">·</span>
            <span
              className="text-xs text-black/25"
              style={{ fontWeight: 400 }}
            >
              {study.duration}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-[#141414] mb-5 max-w-2xl"
            style={{
              fontWeight: 600,
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              lineHeight: 1.2,
            }}
          >
            {study.title}
          </h1>

          {/* Subtitle */}
          <p
            className="text-black/45 max-w-xl leading-relaxed mb-9"
            style={{ fontWeight: 400, fontSize: "1.05rem" }}
          >
            {study.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-black/35 border border-black/10 px-3 py-1"
                style={{ fontWeight: 400 }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-4xl mx-auto px-6 pb-20">
          <CaseImage imgKey={study.heroImage} alt={study.title + " hero"} />
        </div>
      </div>

      {/* ── Sections ───────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-32 flex flex-col gap-28">
        {study.sections.map((section) => (
          <div key={section.number}>
            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 mb-10">
              {/* Number */}
              <div className="shrink-0 md:w-[80px]">
                <span
                  className="text-4xl text-black/8"
                  style={{ fontWeight: 700, fontVariantNumeric: "tabular-nums" }}
                >
                  {section.number}
                </span>
              </div>

              {/* Phase + title + description */}
              <div className="flex-1">
                <p
                  className="text-xs text-black/30 tracking-widest uppercase mb-3"
                  style={{ fontWeight: 400 }}
                >
                  {section.phase}
                </p>
                <h2
                  className="text-[#141414] mb-4"
                  style={{
                    fontWeight: 500,
                    fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                    lineHeight: 1.35,
                  }}
                >
                  {section.title}
                </h2>
                <p
                  className="text-black/45 leading-relaxed max-w-xl"
                  style={{ fontWeight: 400, fontSize: "0.95rem" }}
                >
                  {section.description}
                </p>
              </div>
            </div>

            {/* Image(s) */}
            {section.image2 ? (
              /* Two images side by side */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CaseImage imgKey={section.image} alt={`${section.phase} image 1`} />
                <CaseImage imgKey={section.image2} alt={`${section.phase} image 2`} />
              </div>
            ) : (
              /* Single full-width image */
              <CaseImage imgKey={section.image} alt={section.phase} />
            )}
          </div>
        ))}
      </div>

      {/* ── Footer strip ───────────────────────────────────────────────────── */}
      <div className="border-t border-black/6 bg-[#f7f7f7]">
        <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p
              className="text-xs text-black/25 mb-1"
              style={{ fontWeight: 400 }}
            >
              Next up
            </p>
            {/* Link to next project */}
            {(() => {
              const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
              const next = caseStudies[(currentIndex + 1) % caseStudies.length];
              return (
                <button
                  onClick={() => { navigate(`/case-study/${next.slug}`); window.scrollTo(0, 0); }}
                  className="text-sm text-[#141414]/70 hover:text-[#141414] transition-colors border-b border-black/10 hover:border-black pb-0.5"
                  style={{ fontWeight: 400 }}
                >
                  {next.title} →
                </button>
              );
            })()}
          </div>
          <button
            onClick={() => navigate("/")}
            className="text-xs text-black/25 hover:text-black transition-colors flex items-center gap-2"
            style={{ fontWeight: 400 }}
          >
            <ArrowLeft size={12} />
            Back to portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
