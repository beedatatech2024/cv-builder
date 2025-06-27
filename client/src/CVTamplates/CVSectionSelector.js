import React, { useState, useEffect } from "react";
import "./styles/CVSectionSelector.css";

const CVSectionSelector = ({ cvData, onSelectionComplete }) => {
  const [selection, setSelection] = useState({
    personal: true,
    education: [],
    skills: [],
    experience: [],
    projects: [],
    achievements: [], 
    references: [], 
    certifications: [], 
    extracurricular: [], 
    hobbies: [],
  });

  console.log(cvData.achievements);
  

  useEffect(() => {
    if (cvData) {
      setSelection({
        personal: true,
        education: cvData.education.map(() => true),
        skills: cvData.skills.map(() => true),
        experience: cvData.experience.map(() => true),
        projects: cvData.projects.map(() => true),
        achievements: cvData.achievements.map(() => true),
        references: cvData.references.map(() => true),
        certifications: cvData.certifications.map(() => true),
        extracurricular: cvData.extracurricular.map(() => true),
        hobbies: cvData.hobbies.map(() => true),
      });
    }
  }, [cvData]);

  const handleItemToggle = (section, index) => {
    const updated = [...selection[section]];
    updated[index] = !updated[index];
    setSelection({ ...selection, [section]: updated });
  };

  const handleAllToggle = (section, value) => {
    setSelection({
      ...selection,
      [section]: cvData[section].map(() => value),
    });
  };

  const handleSubmit = () => {
    const filteredData = {
      personal: selection.personal ? cvData.personal : null,
      education: cvData.education.filter((_, i) => selection.education[i]),
      skills: cvData.skills.filter((_, i) => selection.skills[i]),
      experience: cvData.experience.filter((_, i) => selection.experience[i]),
      projects: cvData.projects.filter((_, i) => selection.projects[i]),
      achievements: cvData.achievements.filter((_, i) => selection.achievements[i]),
      references: cvData.references.filter((_, i) => selection.references[i]),
      certifications: cvData.certifications.filter((_, i) => selection.certifications[i]),
      extracurricular: cvData.extracurricular.filter((_, i) => selection.extracurricular[i]),
      hobbies: cvData.hobbies.filter((_, i) => selection.hobbies[i]),
    };
    onSelectionComplete(filteredData);
  };

  if (!cvData) return <p>Loading...</p>;

  return (
    <div className="cvb-section-selector">
      <h2>Select Details to Include in Resume</h2>

      {/* Personal Info */}
      <div className="cvb-section-block">
        <label>
          <input
            type="checkbox"
            checked={selection.personal}
            onChange={(e) =>
              setSelection({ ...selection, personal: e.target.checked })
            }
          />
          Personal Information
        </label>
      </div>

      {/* Education */}
      <div className="cvb-section-block">
        <div className="cvb-section-header">
          <label>Education</label>
          <button onClick={() => handleAllToggle("education", true)}>Select All</button>
          <button onClick={() => handleAllToggle("education", false)}>Unselect All</button>
        </div>
        {cvData.education.map((edu, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selection.education[index]}
              onChange={() => handleItemToggle("education", index)}
            />
            {edu.degree} - {edu.institution}
          </label>
        ))}
      </div>

      {/* Skills */}
      <div className="cvb-section-block">
        <div className="cvb-section-header">
          <label>Skills</label>
          <button onClick={() => handleAllToggle("skills", true)}>Select All</button>
          <button onClick={() => handleAllToggle("skills", false)}>Unselect All</button>
        </div>
        {cvData.skills.map((skill, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selection.skills[index]}
              onChange={() => handleItemToggle("skills", index)}
            />
            {skill.skill_name} ({skill.level})
          </label>
        ))}
      </div>

      {/* Experience */}
      <div className="cvb-section-block">
        <div className="cvb-section-header">
          <label>Experience</label>
          <button onClick={() => handleAllToggle("experience", true)}>Select All</button>
          <button onClick={() => handleAllToggle("experience", false)}>Unselect All</button>
        </div>
        {cvData.experience.map((exp, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selection.experience[index]}
              onChange={() => handleItemToggle("experience", index)}
            />
            {exp.job_title} - {exp.company_name}
          </label>
        ))}
      </div>

      {/* Projects */}
      <div className="cvb-section-block">
        <div className="cvb-section-header">
          <label>Projects</label>
          <button onClick={() => handleAllToggle("projects", true)}>Select All</button>
          <button onClick={() => handleAllToggle("projects", false)}>Unselect All</button>
        </div>
        {cvData.projects.map((project, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selection.projects[index]}
              onChange={() => handleItemToggle("projects", index)}
            />
            {project.project_title}
          </label>
        ))}
      </div>

      {/* Achievements */}
      <div className="cvb-section-block">
        <div className="cvb-section-header">
          <label>Achievements</label>
          <button onClick={() => handleAllToggle("achievements", true)}>Select All</button>
          <button onClick={() => handleAllToggle("achievements", false)}>Unselect All</button>
        </div>
        {cvData.achievements.map((achievement, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selection.achievements[index]}
              onChange={() => handleItemToggle("achievements", index)}
            />
            {achievement.title}
          </label>
        ))}
      </div>


      {/* Certifications */}
      <div className="cvb-section-block">
        <div className="cvb-section-header">
          <label>Certifications</label>
          <button onClick={() => handleAllToggle("certifications", true)}>Select All</button>
          <button onClick={() => handleAllToggle("certifications", false)}>Unselect All</button>
        </div>
        {cvData.certifications.map((certification, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selection.certifications[index]}
              onChange={() => handleItemToggle("certifications", index)}
            />
            {certification.course_name} - {certification.issuing_organization}
          </label>
        ))}
      </div>

      {/* Extracurricular */}
      <div className="cvb-section-block">
        <div className="cvb-section-header">
          <label>Extracurricular Activities</label>
          <button onClick={() => handleAllToggle("extracurricular", true)}>Select All</button>
          <button onClick={() => handleAllToggle("extracurricular", false)}>Unselect All</button>
        </div>
        {cvData.extracurricular.map((activity, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selection.extracurricular[index]}
              onChange={() => handleItemToggle("extracurricular", index)}
            />
            {activity.activities_performed}
          </label>
        ))}
      </div>

      {/* References */}
      <div className="cvb-section-block">
        <div className="cvb-section-header">
          <label>References</label>
          <button onClick={() => handleAllToggle("references", true)}>Select All</button>
          <button onClick={() => handleAllToggle("references", false)}>Unselect All</button>
        </div>
        {cvData.references.map((reference, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selection.references[index]}
              onChange={() => handleItemToggle("references", index)}
            />
            {reference.name} - {reference.relationship}
          </label>
        ))}
      </div>

      {/* Hobbies */}
      <div className="cvb-section-block">
        <div className="cvb-section-header">
          <label>Hobbies</label>
          <button onClick={() => handleAllToggle("hobbies", true)}>Select All</button>
          <button onClick={() => handleAllToggle("hobbies", false)}>Unselect All</button>
        </div>
        {cvData.hobbies.map((hobby, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selection.hobbies[index]}
              onChange={() => handleItemToggle("hobbies", index)}
            />
            {hobby.hobby_name}
          </label>
        ))}
      </div>

      <button className="cvb-submit-selection" onClick={handleSubmit}>
        Continue to Download
      </button>
    </div>
  );
};

export default CVSectionSelector;
