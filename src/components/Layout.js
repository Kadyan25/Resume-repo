import React from "react";
import Sidebar from "./Sidebar";
import Section from "./Section";
import Tag from "./Tag";
import { profile, skills, experience, projects, education } from "../data";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="page">
      <Sidebar profile={profile} />

      <main className="content">
        <Section title="Profile">
          <p className="summary">{profile.summary}</p>
        </Section>

        <Section title="Skills">
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skills-group">
                <p className="skills-group-title">{group}</p>
                <div className="skills-tags">
                  {items.map((s) => (
                    <Tag key={s} label={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Experience">
          {experience.map((exp) => (
            <div key={exp.role} className="card">
              <div className="card-header">
                <p className="card-title">{exp.role}</p>
                <p className="card-subtitle">
                  {exp.company} • {exp.duration}
                </p>
              </div>
              <ul className="card-list">
                {exp.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Projects">
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.name} className="card">
                <div className="card-header">
                  <p className="card-title">{p.name}</p>
                  <p className="card-subtitle">{p.duration}</p>
                </div>

                <p className="card-text">{p.description}</p>

                <div className="skills-tags">
                  {p.tech.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>

                <div className="project-links">
                  {p.liveUrl && (
                    <a
                      className="btn-link primary"
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  {p.codeUrl && (
                    <a
                      className="btn-link"
                      href={p.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Education">
          {education.map((e) => (
            <div key={e.degree + e.year} className="card">
              <p className="card-title">{e.degree}</p>
              <p className="card-subtitle">{e.institute}</p>
              <p className="card-year">{e.year}</p>
            </div>
          ))}
        </Section>
      </main>
    </div>
  );
};

export default Layout;
