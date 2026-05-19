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
    <div className="app-shell">
      {/* Aurora background blobs */}
      <div className="aurora">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <main className="app-container">
        {/* ── LEFT COLUMN ── */}
        <div className="left">

          {/* Hero */}
          <header>
            <div className="chip">
              <span className="chip-dot" />
              OPEN TO FULL‑TIME &amp; FREELANCE
            </div>

            <h1 className="hero-title">{profile.name}</h1>
            <div className="hero-subtitle">{profile.title}</div>

            <div className="hero-meta">
              <span>{profile.location}</span>
              <span>B.Tech CSE · 2023 · Chandigarh University</span>
            </div>

            <div className="hero-links">
              <a className="button button-filled" href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a className="button button-filled" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a className="button button-outline" href="/Mohit_Resume.pdf" target="_blank" rel="noreferrer">
                Download CV
              </a>
            </div>

            <p className="hero-summary">{profile.summary}</p>
          </header>

          {/* Skills */}
          <section className="section">
            <div className="section-header">
              <div className="section-title">Technical Skills</div>
              <div className="section-badge">8 categories</div>
            </div>
            <div className="skill-groups">
              {Object.entries(skills).map(([group, list]) => (
                <div key={group} className="skill-row">
                  <div className="skill-row-label">{group}</div>
                  <div className="skill-row-tags">
                    {list.map((item) => (
                      <span key={item} className="skill-pill">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="section">
            <div className="section-header">
              <div className="section-title">Selected Projects</div>
              <div className="section-badge">Live Demos + Source</div>
            </div>
            <div className="projects-list">
              {projects.map((project) => (
                <article key={project.name} className="project-card">
                  <div className="project-name">{project.name}</div>
                  <div className="project-meta">
                    {project.duration} · {project.tech.slice(0, 4).join(" · ")}
                  </div>
                  <div className="project-desc">{project.description}</div>
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-pill skill-pill-sm">{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.liveUrl && (
                      <a className="project-link primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                        Live Demo ↗
                      </a>
                    )}
                    {project.codeUrl && (
                      <a className="project-link" href={project.codeUrl} target="_blank" rel="noreferrer">
                        Source Code ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="right">

          {/* Contact */}
          <section className="section">
            <div className="section-header">
              <div className="section-title">Contact</div>
            </div>
            <div className="contact-list">
              <div className="contact-name">{profile.name}</div>
              <div style={{ color: "var(--muted)", fontSize: "0.82rem" }}>{profile.location}</div>
              <a className="contact-link" href={`tel:${profile.phone}`}>{profile.phone}</a>
              <a className="contact-link" href={`mailto:${profile.email}`}>{profile.email}</a>
              <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </section>

          {/* Experience */}
          <section className="section">
            <div className="section-header">
              <div className="section-title">Experience</div>
              <div className="section-badge">3 roles</div>
            </div>
            <div className="list">
              {experience.map((exp) => (
                <article key={exp.role + exp.company}>
                  <div className="list-item-title">{exp.role}</div>
                  <div className="list-item-company">{exp.company}</div>
                  <div className="list-item-sub">{exp.duration} · {exp.location}</div>
                  <ul className="list-item-points">
                    {exp.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="section">
            <div className="section-header">
              <div className="section-title">Certifications</div>
            </div>
            <div className="list">
              {certifications.map((cert) => (
                <article key={cert.name}>
                  <div className="list-item-title">{cert.name}</div>
                  <div className="list-item-sub">{cert.issuer} · {cert.year}</div>
                  <div className="cert-links">
                    {cert.links.map((link) => (
                      <a key={link.label} className="contact-link" href={link.url} target="_blank" rel="noreferrer"
                        style={{ marginRight: "0.7rem", display: "inline-block" }}>
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="section">
            <div className="section-header">
              <div className="section-title">Education</div>
            </div>
            <div className="list">
              {education.map((edu) => (
                <article key={edu.degree}>
                  <div className="list-item-title">{edu.degree}</div>
                  <div className="list-item-sub">{edu.institute} · {edu.year}</div>
                </article>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default App;
