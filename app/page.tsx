
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";

type Perspective = {
  id: string;
  suit: string;
  name: string;
  caption: string;
  color: string;
  headline: string;
  description: string;
};

const perspectives: Perspective[] = [
  {
    id: "strategist",
    suit: "♠",
    name: "The Strategist",
    caption: "Patterns & decisions",
    color: "#91BCE6",
    headline: "I see patterns in complexity.",
    description:
      "Systems thinking, game theory, leadership, and the art of making deliberate decisions.",
  },
  {
    id: "builder",
    suit: "♦",
    name: "The Builder",
    caption: "Engineering & creation",
    color: "#E1C19A",
    headline: "I turn ideas into working systems.",
    description:
      "Software engineering, product development, architecture, and building tools that solve real problems.",
  },
  {
    id: "researcher",
    suit: "♣",
    name: "The Researcher",
    caption: "Curiosity & discovery",
    color: "#B6A7EC",
    headline: "I question what lies beneath.",
    description:
      "Artificial intelligence, model behavior, experimentation, and understanding how complex systems work.",
  },
  {
    id: "creator",
    suit: "♥",
    name: "The Creator",
    caption: "Expression & imagination",
    color: "#D99EAD",
    headline: "I connect logic with expression.",
    description:
      "Design, music, psychology, and finding creative ways to make technology feel human.",
  },
];

const projects = [
  {
    number: "01",
    name: "Scheduler",
    description:
      "A visual scheduling application designed to make overlapping commitments easier to manage.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    number: "02",
    name: "Mandelbrot Explorer",
    description:
      "An interactive fractal visualizer built with Java and multithreaded rendering.",
    tags: ["Java", "JavaFX", "Multithreading"],
  },
  {
    number: "03",
    name: "Echoasis",
    description:
      "A Python desktop application combining voice recording, speech processing, and user management.",
    tags: ["Python", "MySQL", "Desktop UI"],
  },
];

const navLinks = [
  { label: "Perspectives", href: "#perspectives" },
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [activeId, setActiveId] = useState("strategist");
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const active =
    perspectives.find((item) => item.id === activeId) ??
    perspectives[0];

  const fadeIn = {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.65 },
  };

  return (
    <main>
      {/* NAVIGATION */}
      <header className="site-header">
        <nav className="container navbar" aria-label="Main navigation">
          <a className="brand" href="#home">
            <span className="brand-symbol" aria-hidden="true">◈</span>
            THE OBSERVER
          </a>

          <button
            className="menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "open" : ""}`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-orbit" aria-hidden="true" />

        <div className="container">
          <motion.div className="hero-content" {...fadeIn}>
            <div className="eyebrow">
              <span className="status-dot" />
              Computer Science · Research · Creation
            </div>

            <h1>
              I observe.
              <br />
              I understand.
              <br />
              <span className="highlight">I build.</span>
            </h1>

            <p className="hero-description">
              I'm Sasmit — a Computer Science student at Rochester
              Institute of Technology, exploring the intersection
              of software engineering, artificial intelligence,
              and human behavior.
            </p>

            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                Explore my work
                <ArrowUpRight size={16} />
              </a>

              <a href="#perspectives" className="btn btn-outline">
                Discover more
                <ArrowDown size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PERSPECTIVES */}
      <section className="section" id="perspectives">
        <div className="container">
          <p className="section-label">01 / Perspectives</p>

          <h2 className="section-title">
            One mind.
            <br />
            Multiple perspectives.
          </h2>

          <p className="section-description">
            People are more than a single title. Pick a card
            and discover a different side of how I think,
            create, and explore.
          </p>

          <div className="cards-grid">
            {perspectives.map((perspective, index) => (
              <motion.button
                key={perspective.id}
                type="button"
                className={`ace-card ${
                  activeId === perspective.id ? "active" : ""
                }`}
                style={
                  {
                    "--card-accent": perspective.color,
                  } as React.CSSProperties
                }
                aria-pressed={activeId === perspective.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 28 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                whileHover={
                  reduceMotion ? undefined : { y: -8 }
                }
                onClick={() => setActiveId(perspective.id)}
              >
                <span className="ace-corner">A</span>
                <span className="ace-symbol" aria-hidden="true">
                  {perspective.suit}
                </span>
                <div>
                  <div className="ace-name">
                    {perspective.name}
                  </div>
                  <div className="ace-caption">
                    {perspective.caption}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="perspective-panel" aria-live="polite">
            <p
              className="section-label"
              style={{ color: active.color }}
            >
              Selected / {active.name}
            </p>

            <h3>{active.headline}</h3>
            <p>{active.description}</p>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section" id="work">
        <div className="container">
          <p className="section-label">02 / Selected Work</p>

          <h2 className="section-title">
            Things I've built.
          </h2>

          <p className="section-description">
            A selection of projects where ideas became
            functioning software, interfaces, and systems.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="project-number">
                  {project.number} / PROJECT
                </span>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="section" id="research">
        <div className="container">
          <p className="section-label">03 / Research</p>

          <h2 className="section-title">
            Questions worth investigating.
          </h2>

          <p className="section-description">
            Exploring the behavior, limitations, and reliability
            of intelligent systems.
          </p>

          <article className="feature-panel">
            <p className="section-label">
              Undergraduate Research / 2026
            </p>

            <h3>
              Quantization Attacks and Defenses
              in Large Language Models
            </h3>

            <p>
              Evaluated model safety and utility under quantization
              using adversarial prompts and established benchmarks.
              Presented the research at the RIT Undergraduate
              Research Symposium.
            </p>

            <div className="project-tags">
              <span className="tag">PyTorch</span>
              <span className="tag">Hugging Face</span>
              <span className="tag">LLM Safety</span>
            </div>
          </article>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container">
          <p className="section-label">04 / The Person</p>

          <h2 className="section-title">
            Curious by nature.
            <br />
            Intentional by design.
          </h2>

          <p className="section-description">
            I'm interested in the patterns connecting technology,
            people, and ideas. Whether I'm building applications,
            investigating AI systems, or leading collaborative
            projects, I enjoy understanding complexity and
            turning it into something meaningful.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container">
          <p className="section-label">05 / Connect</p>

          <h2 className="section-title">
            Have an interesting problem?
            <br />
            <span className="highlight">Let's explore it.</span>
          </h2>

          <p className="section-description">
            Open to software engineering opportunities,
            research collaborations, and thoughtful conversations.
          </p>

          <div className="hero-actions">
            <a href="#home" className="btn btn-primary">
              Back to the beginning
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="container footer">
        <span>© 2026 Sasmit Mishra</span>
        <span>The Observer — Observe. Understand. Create.</span>
      </footer>
    </main>
  );
}
