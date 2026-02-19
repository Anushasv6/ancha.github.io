import { useNavigate } from "react-router";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Work } from "../components/Work";
import { About } from "../components/About";
import { Connect } from "../components/Connect";

export default function Home() {
  const navigate = useNavigate();

  const scrollTo = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen relative" style={{ fontFamily: "Inter, sans-serif" }}>
      <Nav onNavigate={scrollTo} />
      <div className="h-[72px]" />
      <Hero onNavigate={scrollTo} />
      <Work />
      <About />
      <Connect />
    </div>
  );
}
