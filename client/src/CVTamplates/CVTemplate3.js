import React from "react";
import { getYear, convertDate } from "../utils/DateModifications";
import "./styles/CVTemplate3.css";

const CVTemplate3 = ({ cvData }) => {
  const {
    personal,
    education,
    skills,
    experience,
    projects,
    achievements,
    references,
    certifications,
    extracurricular,
    hobbies,
  } = cvData;

  return (
    <div className="cvb-william-resume">
      {personal && (
        <div className="cvb-william-header">
          {experience && (
            <h3 className="cvb-william-position">{experience[0].job_title}</h3>
          )}
          <h1 className="cvb-william-name">{personal.fullName}</h1>
          <p className="cvb-william-summary">{personal.summary}</p>
          <div className="cvb-william-contacts">
            <p className="cvb-william-contact-item">
              <strong>EMAIL</strong>
              <br />
              <span className="cvb-william-contact-value">
                {personal.email || "kalingaramarao181@gmail.com"}
              </span>
            </p>
            <p className="cvb-william-contact-item">
              <strong>PHONE</strong>
              <br />
              <span className="cvb-william-contact-value">
                {personal.phone}
              </span>
            </p>
            <p className="cvb-william-contact-item">
              <strong>LINKEDIN</strong>
              <br />
              <span className="cvb-william-contact-value">
                {personal.linkedin}
              </span>
            </p>
          </div>
        </div>
      )}

      {experience && experience.length > 0 && (
        <div className="cvb-william-section">
          <h2 className="cvb-william-section-title">Experience</h2>
          {experience.map((exp, index) => (
            <div key={index}>
              <h3 className="cvb-william-job-title">{exp.job_title}</h3>
              <span className="cvb-william-company">{exp.company}</span>
              <span className="cvb-william-dates">
                {convertDate(exp.start_date)} - {convertDate(exp.end_date)}
              </span>
              <ul className="cvb-william-job-list">
                <li className="cvb-william-job-item">{exp.description}</li>
              </ul>
            </div>
          ))}
        </div>
      )}

      {projects && projects.length > 0 && (
        <div className="cvb-william-section">
          <h2 className="cvb-william-section-title">PROJECTS</h2>
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="cvb-william-job-title">{project.project_title}</h3>
              <span className="cvb-william-company">
                {project.project_description}
              </span>
              <ul className="cvb-william-job-list">
                <li className="cvb-william-job-item">{project.description}</li>
              </ul>
            </div>
          ))}
        </div>
      )}

      {education && education.length > 0 && (
        <div className="cvb-william-section">
          <h2 className="cvb-william-section-title">EDUCATION</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <h3 className="cvb-william-edu-degree">{edu.degree}</h3>
              <p className="cvb-william-edu-details">
                {edu.institution} , {edu.percentage}
                <br />
                <span className="cvb-william-dates">
                  {getYear(edu.startDate)} - {getYear(edu.endDate)}
                </span>
              </p>
              <p className="cvb-william-edu-sub">{edu.description}</p>
            </div>
          ))}
        </div>
      )}

      {skills && skills.length > 0 && (
        <div className="cvb-william-section">
          <h2 className="cvb-william-section-title">SKILLS</h2>
          <ul className="cvb-william-skills">
            {skills.map((skill, index) => (
              <li key={index} className="cvb-william-skill-item">
                <strong>{skill.skill_name}</strong> - {skill.level}
              </li>
            ))}
          </ul>
        </div>
      )}

      {certifications && certifications.length > 0 && (
        <div className="cvb-william-section">
          <h2 className="cvb-william-section-title">CERTIFICATE</h2>
          {certifications.map((cert, index) => (
            <p key={index} className="cvb-william-courses">
              ▪️ {cert.course_name} – {cert.issuing_organization},{" "}
              {cert.date_of_completion}
              {cert.certificate_link && (
                <>
                  {" "}
                  –{" "}
                  <a
                    href={cert.certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </>
              )}
            </p>
          ))}
        </div>
      )}
      {achievements && achievements.length > 0 && (
        <div className="cvb-william-section">
          <h2 className="cvb-william-section-title">ACHIEVEMENTS</h2>
          {achievements.map((item, index) => (
            <div>
              <p key={index} className="cvb-william-courses">
                ▪️ {item.title} – {item.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {extracurricular && extracurricular.length > 0 && (
        <div className="cvb-william-section">
          <h2 className="cvb-william-section-title">EXTRACURRICULAR</h2>
          {extracurricular.map((item, index) => (
            <div>
              <p key={index} className="cvb-william-courses">
                ▪️ {item.role} at {item.organization} – {item.performance}
              </p>
            </div>
          ))}
        </div>
      )}
      {hobbies && hobbies.length > 0 && (
        <div className="cvb-william-section">
          <h2 className="cvb-william-section-title">HOBBIES</h2>
          {hobbies.map((item, index) => (
            <ul>
              <li>{item.hobby_name}</li>
            </ul>
          ))}
        </div>
      )}

      {references && references.length > 0 && (
        <div className="cvb-william-section">
          <h2 className="cvb-william-section-title">REFERENCES</h2>
          {references.map((item, index) => (
            <p key={index} className="cvb-william-courses">
              ▪️ {item.name} – {item.relationship}, Contact: {item.contact_info}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CVTemplate3;
