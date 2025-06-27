import React from "react";
import "./index.css";

// Mapping backend keys to internal keys
const keyMapping = {
  personalDetails: "personal",
  education: "education",
  skills: "skills",
  experience: "experience",
  projects: "projects",
  achievements: "achievements",
  certifications: "certifications",
  extraCurricularActivities: "extracurricular",
  hobbies: "hobbies",
  references: "references", // optional
};

const DashboardContent = ({ progress }) => {
  const sectionData = Object.entries(keyMapping).reduce((acc, [backendKey, localKey]) => {
    acc[localKey] = progress[backendKey] ?? 0;
    return acc;
  }, {});

  const getStatusIcon = (value) => (value > 0 ? "✔️" : "❌");

  const totalSections = Object.keys(sectionData).length;
  const overallProgress = Math.floor(
    Object.values(sectionData).reduce((acc, val) => acc + val, 0) / totalSections
  );

  const getProgressColorClass = () => {
    if (overallProgress < 30) return "progress-red";
    if (overallProgress < 60) return "progress-orange";
    return "progress-green";
  };

  const getProgressMessage = () => {
    if (overallProgress < 30) return "Fill more to start your cv";
    if (overallProgress < 60) return "Fill few to strengthen your cv";
    return "Looking good, complete the rest!";
  };

  return (
    <div className="cvb-dh-wrapper">
      {/* Resume Progress */}
      <div className="cvb-dh-card cvb-dh-resume-progress">
        <h4>Resume Progress</h4>
        <div className={`cvb-dh-progress-bar ${getProgressColorClass() === "progress-red" ? "progress-red-border" : ""}`}>
          <div
            className={`cvb-dh-progress-fill ${getProgressColorClass()}`}
            style={{ width: `${overallProgress}%` }}
          />
        </div>
        <p>{overallProgress}% Completed – {getProgressMessage()}</p>
      </div>

      <div className="cvb-dh-grid">
        {/* Quick Actions */}
        <div className="cvb-dh-card cvb-dh-actions">
          <h4>Quick Actions</h4>
          <button className="cvb-dh-btn cvb-dh-primary">Create Resume</button>
          <button className="cvb-dh-btn cvb-dh-download">⬇ Download Resume</button>
        </div>

        {/* Section Status */}
        <div className="cvb-dh-card cvb-dh-section-status">
          <h4>Section Completion</h4>
          <ul>
            {Object.entries(sectionData).map(([section, value]) => (
              <li
                key={section}
                className={value > 0 ? "cvb-dh-filled" : "cvb-dh-pending"}
              >
                <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                <span>
                  {getStatusIcon(value)} {value}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
