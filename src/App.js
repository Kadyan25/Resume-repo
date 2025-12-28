import React from "react";
import {
  profile,
  skills,
  experience,
  projects,
  education,
certifications,
  roadmap
} from "./data";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <main className="app-container">
        {/* LEFT */}
        <section className="left">
          {/* Hero */}
          <header>
            <div className="chip">
              <span className="chip-dot" />
              OPEN TO FULL‑TIME & FREELANCE
            </div>
            <h1 className="hero-title">{profile.name}</h1>
            <div className="hero-subtitle">{profile.title}</div>
            <div className="hero-meta">
              <span>{profile.location}</span>
              <span>B.Tech CSE · 2023 · Chandigarh University</span>
              {/* <span>1–2 year practical project experience (self‑driven)</span> */}
            </div>

            <div className="hero-links">
              <a
                className="button button-filled link-with-tip"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="code">Github</span>
              </a>
              <a
                className="button button-filled link-with-tip"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="button button-filled" href="/Mohit_Resume.pdf">
                Download Resume
              </a>
            </div>

            <p style={{ marginTop: 14, fontSize: 13, color: "#9ca3af" }}>
              {profile.summary}
            </p>

            <div>
              <span className="upskilling">
                Currently upskilling: Docker · Kubernetes · Cloud · AI‑assisted
                full‑stack
              </span>
            </div>
          </header>

          {/* Skills */}
          <section className="section" style={{ marginTop: "1rem" }}>
            <div className="section-header">
              <div className="section-title">Technical skills</div>
              <div className="section-badge">Java‑centric full‑stack</div>
            </div>
            <div className="skill-groups">
              {Object.entries(skills).map(([group, list]) => (
                <div key={group} className="skill-row">
                  <div className="skill-row-label">{group}</div>
                  <div className="skill-row-tags">
                    {list.map((item) => (
                      <span key={item} className="skill-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="section">
            <div className="section-header">
              <div className="section-title">Selected projects</div>
              <div className="section-badge">Live Demos + Source Code</div>
            </div>
            <div className="projects-list">
              {projects.map((project) => (
                <article key={project.name} className="project-card">
                  <div className="project-name">{project.name}</div>
                  <div className="project-meta">
                    {project.duration} · {project.tech.join(" · ")}
                  </div>
                  <div className="project-desc">{project.description}</div>
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.liveUrl && (
                      <a
                        className="project-link highlight-link primary"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo  
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        className="project-link highlight-link"
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>

        {/* RIGHT */}
        <section className="right">
                    {/* Contact */}
          <section className="section">
            <div className="section-header">
              <div className="section-title">Contact</div>
            </div>
            <div className="contact-list">
              <div>{profile.name}</div>
              <div>{profile.location}</div>
              <a className="contact-link" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
              <a className="contact-link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a
                className="contact-link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="contact-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </section>
          {/* Experience */}
          <section className="section">
            <div className="section-header">
              <div className="section-title">Experience</div>
              <div className="section-badge">Internship + self‑projects</div>
            </div>
            <div className="list">
              {experience.map((exp) => (
                <article key={exp.role}>
                  <div className="list-item-title">
                    {exp.role} · {exp.company}
                  </div>
                  <div className="list-item-sub">
                    {exp.duration} · {exp.location}
                  </div>
                  <ul className="list-item-points">
                    {exp.description.map((line) => (
                      <li key={line}>{line}</li>
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
                  <div className="list-item-sub">
                    {cert.issuer} · {cert.year}
                  </div>
                  {cert.links &&
                    cert.links.map((link) => (
                      <a
                        key={link.label}
                        className="contact-link"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: "inline-block", marginRight: "0.6rem" }}
                      >
                        {link.label}
                      </a>
                    ))}
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
                  <div className="list-item-sub">
                    {edu.institute ? `${edu.institute} · ` : ""}
                    {edu.year}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Roadmap */}
          <section className="section">
            <div className="section-header">
              <div className="section-title">Future roadmap</div>
              <div className="section-badge">Upskilling in progress</div>
            </div>
            <p className="roadmap-text">{roadmap.text}</p>
            {roadmap.link && (
              <a
                className="roadmap-link"
                href={roadmap.link}
                target="_blank"
                rel="noreferrer"
              >
                → {roadmap.linkLabel}
              </a>
            )}
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
