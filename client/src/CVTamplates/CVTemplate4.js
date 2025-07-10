import React from "react";
import { getYear, convertDate } from "../utils/DateModifications";
import "./styles/CVTemplate4.css";

const CVTemplate4 = ({ cvData }) => {
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
    <div className="cvb-first-resume-container">
      <div className="cvb-first-sidebar">
        {personal && (
          <div className="cvb-first-contact">
            <p className="cvb-first-contact-item">{personal.address}</p>
            <p className="cvb-first-contact-item">Tel: {personal.phone}</p>
            <p className="cvb-first-contact-item">
              {" "}
              {personal.email}
            </p>
            <p className="cvb-first-contact-item">{personal.linkedin}</p>
          </div>
        )}

        {skills && skills.length > 0 && (
          <div className="cvb-first-section">
            <h3 className="cvb-first-section-heading">Design & Coding</h3>
            {skills.map((skill, index) => (
              <div>
                <p>
                  <strong>{skill.skill_name}</strong> - {skill.level}
                </p>
              </div>
            ))}
          </div>
        )}
        {certifications && certifications.length > 0 && (
          <div className="cvb-first-section">
            <h3 className="cvb-first-section-heading">CERTIFICATIONS</h3>
            {certifications.map((item, index) => (
              <p key={index}>
                ▪️ {item.course_name} – {item.issuing_organization},{" "}
                {item.date_of_completion},{" "}
                <a
                  href={item.certificate_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.certificate_link}
                </a>
              </p>
            ))}
          </div>
        )}

        {hobbies && hobbies.length > 0 && (
          <div className="cvb-first-section">
            <h3 className="cvb-first-section-heading">HOBBIES</h3>
            {hobbies.map((item, index) => (
              <div>
                <p>{item.hobby_name}</p>
              </div>
            ))}
          </div>
        )}
        {references && references.length > 0 && (
          <div className="cvb-first-section">
            <h3 className="cvb-first-section-heading">REFERENCES</h3>
            {references.map((item, index) => (
              <div>
                <p>
                  {item.name},{item.relationship} -{item.contact_info}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="cvb-first-main-content">
        {personal && <h1 className="cvb-first-name">{personal.fullName}</h1>}
        {experience && experience.length > 0 && (
          <h2 className="cvb-first-role">{experience[0].job_title}</h2>
        )}

        {personal && (
          <section className="cvb-first-profile-section">
            <h3 className="cvb-first-section-title">Profile</h3>
            <p className="cvb-first-paragraph">{personal.summary}</p>
          </section>
        )}

        {experience && experience.length > 0 && (
          <section className="cvb-first-experience-section">
            <h3 className="cvb-first-section-title">Experience</h3>
            {experience.map((job, index) => (
              <div key={index} className="cvb-first-job">
                <h4 className="cvb-first-job-title">{job.job_title}</h4>
                <span className="cvb-first-job-duration">
                  {convertDate(job.start_date)} - {convertDate(job.end_date)}
                </span>
                <p className="cvb-first-job-location">{job.location}</p>
                <ul className="cvb-first-job-list">
                  <li className="cvb-first-job-item">{job.description}</li>
                </ul>
              </div>
            ))}
          </section>
        )}

        {education && education.length > 0 && (
          <section className="cvb-first-education-section">
            <h3 className="cvb-first-section-title">Education</h3>
            {education.map((item, index) => (
              <p key={index}>
                ▪️ <strong>{item.degree} </strong> <br /> {item.institution} –{" "}
                <strong>{item.percentage}</strong>, <br />{" "}
                {getYear(item.startDate)} to {getYear(item.endDate)}
              </p>
            ))}
          </section>
        )}
        {projects && projects.length > 0 && (
          <section className="cvb-first-education-section">
            <h3 className="cvb-first-section-title">PROJECTS</h3>
            {projects.map((item) => (
              <div>
                <p>
                  <strong>{item.project_title}</strong>
                </p>
                <p>{item.description}</p>
                <p>{item.link}</p>
              </div>
            ))}
          </section>
        )}
        {achievements && achievements.length > 0 && (
          <section className="cvb-first-education-section">
            <h3 className="cvb-first-section-title">ACHIEVEMENTS</h3>
            {achievements.map((item, index) => (
              <p key={index}>
                ▪️ {item.title} – {item.description}
              </p>
            ))}
          </section>
        )}
        {extracurricular && extracurricular.length > 0 && (
          <section className="cvb-first-education-section">
            <h3 className="cvb-first-section-title">EXTRACURRICULAR</h3>
            {extracurricular.map((item, index) => (
              <div>
                <p>
                  {item.role} at {item.organization} - {item.performance}{" "}
                </p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default CVTemplate4;
