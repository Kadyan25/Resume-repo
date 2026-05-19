import React from "react";
import {
  profile,
  skills,
  experience,
  projects,
  education,
  certifications,
} from "./data";
import "./App.css";

function App() {
  return (
    <div>
      {/* ── STICKY NAV ── */}
      <nav className="nav">
        <a href="#hero" className="nav-logo">MK.</a>
        <div className="nav-links">
          <a href="#skills"><span className="num">01.</span> Skills</a>
          <a href="#experience"><span className="num">02.</span> Experience</a>
          <a href="#projects"><span className="num">03.</span> Projects</a>
          <a href="#certifications"><span className="num">04.</span> Certifications</a>
          <a href="#education"><span className="num">05.</span> Education</a>
        </div>
        <a className="nav-cta" href="/Mohit_Resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="hero">
        <div className="hero-inner">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">{profile.name}.</h1>
          <h2 className="hero-tagline">Full-Stack Developer &amp; AI Engineer.</h2>
          <p className="hero-desc">{profile.summary}</p>
          <div className="hero-contact-row">
            <span>{profile.location}</span>
            <span className="sep">·</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span className="sep">·</span>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
          <div className="hero-cta">
            <a className="cta-primary" href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a className="cta-primary" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a className="cta-secondary" href="/Mohit_Resume.pdf" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="section">
        <h2 className="section-heading">
          <span className="section-num">01.</span> Skills
        </h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group} className="skill-category">
              <div className="skill-cat-label">{group}</div>
              <div className="skill-tags">
                {list.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="section">
        <h2 className="section-heading">
          <span className="section-num">02.</span> Experience
        </h2>
        <div className="timeline">
          {experience.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-date">{exp.duration}</div>
              <div>
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">{exp.company} · {exp.location}</div>
                <ul className="timeline-points">
                  {exp.description.map((line, j) => (
                    <li key={j}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="section">
        <h2 className="section-heading">
          <span className="section-num">03.</span> Projects
        </h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div
              key={p.name}
              className="project-card"
              onClick={() => p.liveUrl && window.open(p.liveUrl, "_blank", "noreferrer")}
              style={{ cursor: p.liveUrl ? "pointer" : "default" }}
            >
              {p.image && (
                <div className="project-thumb">
                  <img
                    src={`/images/projects/${p.image}`}
                    alt={p.name}
                    className="project-thumb-img"
                    onError={(e) => { e.currentTarget.parentElement.style.display = "none"; }}
                  />
                </div>
              )}
              <div className="project-body">
                <div className="project-top">
                  <div className="project-folder">⬡</div>
                  <div className="project-actions">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="action-link action-live"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live ↗
                      </a>
                    )}
                    {p.codeUrl && (
                      <a
                        href={p.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="action-link action-code"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Code ↗
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tech-list">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="section">
        <h2 className="section-heading">
          <span className="section-num">04.</span> Certifications
        </h2>
        <div className="cert-list">
          {certifications.map((cert) => (
            <div key={cert.name} className="cert-item">
              <div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-meta">{cert.issuer} · {cert.year}</div>
              </div>
              <div className="cert-links">
                {cert.links.map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="section">
        <h2 className="section-heading">
          <span className="section-num">05.</span> Education
        </h2>
        <div className="edu-list">
          {education.map((edu) => (
            <div key={edu.degree} className="edu-item">
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-meta">{edu.institute} · {edu.year}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-name">{profile.name}</div>
          <div className="footer-links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="footer-note">Open to remote work &amp; Delhi NCR</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
