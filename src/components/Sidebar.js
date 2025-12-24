import React from "react";
import "./Sidebar.css";

const Sidebar = ({ profile }) => (
  <aside className="sidebar">
    <div className="sidebar-header">
      <h1>{profile.name}</h1>
      <p className="sidebar-title">{profile.title}</p>
    </div>

    <div className="sidebar-block">
      <p className="sidebar-label">LOCATION</p>
      <p>{profile.location}</p>
    </div>

    <div className="sidebar-block">
      <p className="sidebar-label">PHONE</p>
      <a href={`tel:${profile.phone}`}>{profile.phone}</a>
    </div>

    <div className="sidebar-block">
      <p className="sidebar-label">EMAIL</p>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
    </div>

    <div className="sidebar-block">
      <p className="sidebar-label">LINKEDIN</p>
      <a href={profile.linkedin} target="_blank" rel="noreferrer">
        {profile.linkedin.replace("https://", "")}
      </a>
    </div>
  </aside>
);

export default Sidebar;
