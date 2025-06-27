import React from "react";
import "./index.css";

const DashboardContent = () => {
  const data = {
    fullName: "John Doe",
    phone: "9876543210",
    linkedin: "https://linkedin.com/in/johndoe",
    portfolio: "https://johndoe.dev",
    sectionData: {
      personal: true,
      education: 2,
      skills: 3,
      experience: 1,
      projects: 2,
      achievements: 0,
      certifications: 1,
      extracurricular: 0,
      hobbies: 1,
      references: 0,
    },
    maxItems: {
      education: 3,
      skills: 5,
      experience: 2,
      projects: 3,
      achievements: 2,
      certifications: 2,
      extracurricular: 2,
      hobbies: 2,
      references: 1,
    }
  };

  const calculateSectionProgress = (key) => {
    const value = data.sectionData[key];
    const max = data.maxItems[key];

    if (typeof value === "boolean") return value ? 100 : 0;
    return Math.min(Math.floor((value / max) * 100), 100);
  };

  const getStatusIcon = (value) =>
    (typeof value === "boolean" && value) || (typeof value === "number" && value > 0)
      ? "✔️"
      : "❌";

  const totalSections = Object.keys(data.sectionData).length;
  const filledCount = Object.values(data.sectionData).filter(
    (v) => (typeof v === "boolean" && v) || (typeof v === "number" && v > 0)
  ).length;
  const progress = Math.floor((filledCount / totalSections) * 100);

  return (
    <div className="cvb-dh-wrapper">
        {/* Resume Progress */}
      <div className="cvb-dh-card cvb-dh-resume-progress">
          <h4>Resume Progress</h4>
          <div className="cvb-dh-progress-bar">
            <div className="cvb-dh-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <p>{progress}% Completed</p>
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
            {Object.entries(data.sectionData).map(([section, value]) => (
              <li
                key={section}
                className={
                  value && value !== 0 ? "cvb-dh-filled" : "cvb-dh-pending"
                }
              >
                <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                <span>
                  {getStatusIcon(value)} {calculateSectionProgress(section)}%
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
