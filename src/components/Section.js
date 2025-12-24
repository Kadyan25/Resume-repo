import React from "react";
import "./Section.css";

const Section = ({ title, children }) => (
  <section className="section">
    <h2 className="section-title">{title}</h2>
    <div>{children}</div>
  </section>
);

export default Section;
