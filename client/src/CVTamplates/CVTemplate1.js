
import React from "react";
import "./styles/CVTemplate1.css";

const CVTemplate1 = ({data}) => {
  console.log(data);
  
  const {personal, education, skills, experience, projects} = data

  const getYear = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    return year;
  };

  const convertDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };
  
  return (
    <div className="cvb-template1-container">
      <div className="cvb-template1-header">
        <div className="cvb-template1-name-title">
          <h1 className="cvb-template1-name">{personal.fullName}</h1>
          <p className="cvb-template1-title">{experience[0].job_title}</p>
        </div>
      </div>
      <div className="cvb-template1-content">
      <div className="cvb-template1-left">
        <section className="cvb-template1-section">
          <h3 className="cvb-template1-heading red">ABOUT ME</h3>
          <p>{personal.summary}</p>
        </section>

        <section className="cvb-template1-section">
          <h3 className="cvb-template1-heading red">EXPERIENCE</h3>
          <ul>
            {experience.map((exp, index) => (
              <li key={index}>
                <p><strong>{exp.job_title}</strong></p>
                <p>{exp.company_name}</p>
                <p>{convertDate(exp.start_date)} - {convertDate(exp.end_date)}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="cvb-template1-section">
          <h3 className="cvb-template1-heading red">PROJECTS</h3>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <p><strong>{project.project_title}</strong></p>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="cvb-template1-section">
          <h3 className="cvb-template1-heading red">SKILLS</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}><strong>{skill.skill_name}</strong> - {skill.level}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="cvb-template1-right">
        <section className="cvb-template1-section">
          <h3 className="cvb-template1-heading right">CONTACTS</h3>
          <p><strong>Phone:</strong> {personal.phone}</p>
          <p><strong>Address:</strong> {personal.address}</p>
          <p><strong>LinkedIn:</strong> <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">{personal.linkedin}</a></p>
          <p><strong>GitHub:</strong> <a href={personal.github} target="_blank" rel="noopener noreferrer">{personal.github}</a></p>
        </section>

        <section className="cvb-template1-section">
          <h3 className="cvb-template1-heading right">PERSONAL</h3>
          <p><strong>Marital Status:</strong> Married</p>
          <p><strong>Birthday:</strong> 1-1-2000</p>
          <p><strong>Religion:</strong> Hindu</p>
        </section>

        <section className="cvb-template1-section">
          <h3 className="cvb-template1-heading right">EDUCATION</h3>
          <ul>
            {education.map((edu, index) => (
              <li key={index}>    
                <p><strong>{edu.degree}</strong></p>
                <p>{edu.institution}</p>
                <p>{getYear(edu.startDate)} - {getYear(edu.endDate)}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      </div>
    </div>
  );
};

export default CVTemplate1;
