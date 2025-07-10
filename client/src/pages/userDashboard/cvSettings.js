import { useState } from "react";
import "./index.css";
import CVData from "../../components/cvData";

const Settings = ({ cvData }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(null);
  const { personal, education, skills, experience, projects, certifications } =
    cvData;

  return (
    <div className="cvb-settings-container">
      <h1 className="cvb-settings-title">Sections</h1>
      <div className="cvb-settings-grid">
        <div className="cvb-settings-section" onClick={() => setIsOpenPopup("personal")}>
          <h2 className="cvb-settings-section-title">Personal Details</h2>
          <div>
            <p className="cvb-settings-section-field">
              Name: {personal.fullName}
            </p>
            <p className="cvb-settings-section-field">
              Email: {personal.email}
            </p>
            <p className="cvb-settings-section-field">
              Phone: {personal.phone}
            </p>
            <p className="cvb-settings-section-field">
              LinkedIn: {personal.linkedin}
            </p>
            <p className="cvb-settings-section-field">
              Address: {personal.address}
            </p>
          </div>
        </div>

        <div onClick={() => setIsOpenPopup("experience")} className="cvb-settings-section">
          <h2 className="cvb-settings-section-title">Work Experience</h2>
          <div className="cvb-settings-section-fields">
            {experience.map((experience, index) => (
              <div key={index}>
                <p className="cvb-settings-section-field">
                  <strong>{experience.job_title}</strong> -{" "}
                  {experience.company_name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div  onClick={() => setIsOpenPopup("education")} className="cvb-settings-section">
          <h2 className="cvb-settings-section-title">Education</h2>
          <div>
            {education.map((education, index) => (
              <div key={index}>
                <p className="cvb-settings-section-field">
                  <strong>{education.degree}</strong> - {education.institution}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div onClick={() => setIsOpenPopup("skills")} className="cvb-settings-section">
          <h2 className="cvb-settings-section-title">Skills</h2>
          <div>
            {skills.map((skill, index) => (
              <div key={index}>
                <p className="cvb-settings-section-field">{skill.skill_name}</p>
              </div>
            ))}
          </div>
        </div>

        <div onClick={() => setIsOpenPopup("projects")} className="cvb-settings-section">
          <h2 className="cvb-settings-section-title">Projects</h2>
          <div>
            {projects.map((project, index) => (
              <div key={index}>
                <p className="cvb-settings-section-field">
                  {project.project_title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div onClick={() => setIsOpenPopup("certifications")} className="cvb-settings-section">
          <h2 className="cvb-settings-section-title">Certifications</h2>
          <div>
            {certifications.map((certification, index) => (
              <div key={index}>
                <p className="cvb-settings-section-field">
                  {certification.certification_name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOpenPopup && <CVData isOpenPopup={isOpenPopup} cvData={cvData} setIsOpenPopup={setIsOpenPopup}/>}
    </div>
  );
};

export default Settings;
