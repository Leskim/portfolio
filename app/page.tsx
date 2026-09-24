import Image from "next/image";

const skills = [
  { label: "Languages", items: "Python · C++ · JavaScript · PHP · HTML · CSS" },
  { label: "Frameworks", items: "React · Node.js" },
  { label: "Hardware", items: "Arduino · IoT · PCB design" },
  { label: "Tools", items: "GitHub · Jupyter · Anaconda · VS Code · Heroku · Netlify" },
];

const projects = [
  {
    number: "01",
    type: "Machine learning · University of Maine",
    title: "Plant Disease\nIdentification Model",
    description:
      "A deep learning model that classifies plant diseases from user-uploaded images, giving farmers a faster path to diagnosis.",
    stack: ["Python", "Deep learning", "Jupyter"],
    href: "/Resume.pdf",
    action: "Read in resume",
  },
  {
    number: "02",
    type: "Frontend Mentor · Practice build",
    title: "Responsive interface\nsystems",
    description:
      "A growing collection of polished frontend builds focused on rhythm, responsive layout, and accessible interactions.",
    stack: ["React", "CSS", "Responsive UI"],
    href: "https://www.frontendmentor.io/",
    action: "View challenge profile",
  },
  {
    number: "03",
    type: "GitHub · Experiments",
    title: "Software that stays\nclose to the hardware",
    description:
      "Small, practical experiments across JavaScript, Python, embedded systems, and IoT — documented as they evolve.",
    stack: ["JavaScript", "Arduino", "IoT"],
    href: "https://github.com/Leskim",
    action: "Browse GitHub",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Lesley Kimutai home">
          LK<span>.</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-resume" href="/Resume.pdf">
          Resume <Arrow />
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Computer engineer · Seattle area</p>
          <h1>Building thoughtful<br /><em>systems</em> end to end.</h1>
          <p className="hero-intro">
            I&apos;m Lesley — a computer engineering graduate student who likes working where software meets the physical world.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore my work <Arrow /></a>
            <a className="text-link" href="#contact">Let&apos;s connect <Arrow /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="image-frame">
            <Image src="/profile-photo.jpg" alt="Lesley Kimutai" fill priority sizes="(max-width: 700px) 82vw, 34vw" />
          </div>
          <div className="hero-note">
            <span>Currently learning</span>
            <strong>Embedded systems<br />&amp; intelligent tools</strong>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>
      </section>

      <div className="ticker" aria-label="Areas of focus">
        <span>Software engineering</span><b>✳</b><span>Embedded systems</span><b>✳</b><span>IoT automation</span><b>✳</b><span>Machine learning</span><b>✳</b><span>Software engineering</span>
      </div>

      <section className="about section-shell section-grid" id="about">
        <div className="section-label"><span>01</span><span>About me</span></div>
        <div className="about-content">
          <h2>Curious by nature,<br /><em>practical</em> by craft.</h2>
          <div className="about-columns">
            <p>
              I&apos;m a Computer Engineering graduate student at the University of Maine, with a foundation in microprocessor technology and instrumentation from the University of Nairobi.
            </p>
            <p>
              My work moves between Python models, React interfaces, Arduino boards, and the details that make systems reliable. I care about making complex technology feel clear and useful.
            </p>
          </div>
        </div>
      </section>

      <section className="experience section-shell section-grid" id="experience">
        <div className="section-label"><span>02</span><span>Experience</span></div>
        <div className="experience-content">
          <div className="experience-heading">
            <h2>Where I&apos;ve<br /><em>made an impact.</em></h2>
            <span className="date-range">2021 — 2023</span>
          </div>
          <article className="experience-card">
            <div className="company-mark">CF</div>
            <div>
              <p className="eyebrow">Cloud Factory Kenya</p>
              <h3>Citizen Radio Analyst</h3>
              <p className="role-description">Turned live police radio into accurate, actionable incident updates for Citizen, the #1 personal safety app in the U.S. Monitored major markets including Los Angeles, Chicago, and San Diego — averaging 50 incidents per shift.</p>
              <div className="tag-list"><span>Real-time operations</span><span>Quality review</span><span>Distributed teams</span></div>
            </div>
          </article>
        </div>
      </section>

      <section className="skills section-shell section-grid">
        <div className="section-label"><span>03</span><span>Skills &amp; toolkit</span></div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.label}>
              <span className="skill-label">{skill.label}</span>
              <p>{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="work section-shell section-grid" id="work">
        <div className="section-label"><span>04</span><span>Selected work</span></div>
        <div className="work-content">
          <div className="work-heading">
            <h2>A few things<br /><em>I&apos;ve built.</em></h2>
            <p>From a model that helps identify plant disease to the frontend details that make a product feel effortless.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-details">
                  <p className="eyebrow">{project.type}</p>
                  <h3>{project.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                    <a href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noreferrer" : undefined}>{project.action} <Arrow /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <p className="eyebrow"><span className="eyebrow-dot" /> Have a project in mind?</p>
        <h2>Let&apos;s make<br /><em>something useful.</em></h2>
        <a className="contact-email" href="mailto:leskimuti@gmail.com">leskimuti@gmail.com <Arrow /></a>
      </section>

      <footer className="site-footer section-shell">
        <span>© {new Date().getFullYear()} Lesley Kimutai</span>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/leskim/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="https://github.com/Leskim" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href="#instagram-placeholder" aria-label="Instagram placeholder">Instagram</a>
          <a href="#facebook-placeholder" aria-label="Facebook placeholder">Facebook</a>
        </div>
        <a href="#top" className="back-top">Back to top ↑</a>
      </footer>
    </main>
  );
}
