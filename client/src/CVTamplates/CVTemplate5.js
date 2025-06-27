import React from "react";
import { getYear, convertDate } from "../utils/DateModifications";
import "./styles/CVTemplate5.css";

const CVTemplate5 = ({ cvData }) => {
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
    <div className="more-resume-container">
      <div className="more-resume-header">
        <div className="more-header-top">
          {personal && (
            <h1 className="more-header-name">{personal.fullName}</h1>
          )}
          <hr className="more-header-line" />
        </div>

        <div className="more-header-details">
          {experience && experience.length > 0 && (
            <div className="more-header-left">
              <h3 className="more-header-job">{experience[0].job_title}</h3>
              <p className="more-header-location">
                <i className="fa fa-map-marker"></i>
                {experience[0].location}
              </p>
            </div>
          )}

          {personal && (
            <div className="more-header-right">
              <p className="more-header-phone">
                <i className="fa fa-phone"></i> {personal.phone}
              </p>
              <p className="more-header-email">
                <i className="fa fa-envelope"></i>
                {personal.linkedin}
              </p>
              <p className="more-header-age">
                <i className="fa fa-user"></i>
                {personal.portfolio}
              </p>
            </div>
          )}
        </div>
      </div>

      {education && education.length > 0 && (
        <section className="more-section">
          <h2 className="more-section-title">Education</h2>
          {education &&
            education.length > 0 &&
            education.map((item) => (
              <div>
                <p className="more-section-paragraph">
                  <strong>
                    {getYear(item.startDate)} - {getYear(item.endDate)}
                  </strong>{" "}
                  - <strong>{item.institution}</strong>, {item.degree}
                </p>
                <p className="more-section-paragraph">{item.description}</p>
              </div>
            ))}
        </section>
      )}

      {experience && experience.length > 0 && (
        <section className="more-section">
          <h2 className="more-section-title">Professional Experience</h2>
          {experience.map((item, index) => (
            <div>
              <p className="more-section-paragraph">
                <strong>
                  {" "}
                  {convertDate(item.start_date)} - {convertDate(item.end_date)}
                </strong>
                {item.company_name} <strong>{item.job_title}</strong>
              </p>
              <ul className="more-section-list">
                <li className="more-section-list-item">{item.description}</li>
              </ul>
            </div>
          ))}
        </section>
      )}

      {projects && projects.length > 0 && (
        <section className="more-section">
          <h2 className="more-section-title">Projects</h2>
          {projects.map((item, index) => (
            <div>
              <p className="more-section-paragraph">
                <strong>{item.project_name}</strong>
              </p>
              <ul className="more-section-list">
                <li className="more-section-list-item">{item.description}</li>
              </ul>
            </div>
          ))}
        </section>
      )}

      {skills && skills.length > 0 && (
        <section className="more-section">
          <h2 className="more-section-title">Skills</h2>
          {skills.map((item, index) => (
            <div>
              <p className="more-section-paragraph">
                {item.skill_name} - {item.level}
              </p>
            </div>
          ))}
        </section>
      )}

      {personal && (
        <section className="more-section">
          <h2 className="more-section-title">Professional Summary</h2>
          <ul className="more-section-list">
            {personal && (
              <li className="more-section-list-item">{personal.summary}</li>
            )}
          </ul>
        </section>
      )}

      {hobbies && hobbies.length > 0 && (
        <section className="more-section">
          <h2 className="more-section-title">Hobbies</h2>
          {hobbies.map((item, index) => (
            <div>
              <ul className="more-section-list">
                <li className="more-section-list-item">{item.hobby}</li>
              </ul>
            </div>
          ))}
        </section>
      )}

      {certifications && certifications.length > 0 && (
        <section className="more-section">
          <h2 className="more-section-title">Certifications</h2>
          {certifications.map((item, index) => (
            <ul className="more-section-list">
              <li className="more-section-list-item">
                ▪️ Certified in {item.course_name} at{" "}
                {item.issuing_organization} from {item.from_date} to{" "}
                {item.to_date}
                {item.certificate_link && (
                  <>
                    {" "}
                    –{" "}
                    <a
                      href={item.certificate_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </>
                )}
              </li>
            </ul>
          ))}
        </section>
      )}

      {achievements && achievements.length > 0 && (
        <section className="more-section">
          <h2 className="more-section-title">Achievements</h2>
          {achievements.map((item) => (
            <div>
              <ul className="more-section-list">
                <li className="more-section-list-item">{item.title}</li>
                <li className="more-section-list-item">{item.description}</li>
              </ul>
            </div>
          ))}
        </section>
      )}

      {extracurricular && extracurricular.length > 0 && (
        <section className="more-section">
          <h2 className="more-section-title">Cultural Activities</h2>
          {extracurricular.map((item, index) => (
            <div key={index}>
              <p className="more-section-paragraph">
                ▪️ Participated as {item.role} at {item.organization} –{" "}
                {item.performance}
              </p>
            </div>
          ))}
        </section>
      )}

      {references && references.length > 0 && (
        <section className="more-section">
          <h2 className="more-section-title">References</h2>
          {references.map((item, index) => (
            <div key={index}>
              <p className="more-section-paragraph">
                ▪️ {item.name} – {item.relationship}, Contact:{" "}
                {item.contact_info}
              </p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default CVTemplate5;
