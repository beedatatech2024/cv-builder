import React from "react";
import { getYear, convertDate } from "../utils/DateModifications";
import "./styles/CVTemplate1.css";

const CVTemplate1 = ({ cvData }) => {
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
    <div className="cvb-template1-container">
      <div className="cvb-template1-header">
        <div className="cvb-template1-name-title">
          {personal && (
            <h1 className="cvb-template1-name">{personal.fullName}</h1>
          )}
          {experience && experience.length > 0 && (
            <p className="cvb-template1-title">{experience[0].job_title}</p>
          )}
        </div>
      </div>
      <div className="cvb-template1-content">
        <div className="cvb-template1-left">
          <section className="cvb-template1-section">
            <h3 className="cvb-template1-heading red">ABOUT ME</h3>
            <p>{personal.summary}</p>
          </section>

          {experience && experience.length > 0 && (
            <section className="cvb-template1-section">
              <h3 className="cvb-template1-heading red">EXPERIENCE</h3>
              <ul>
                {experience.map((exp, index) => (
                  <li key={index}>
                    <p>
                      <strong>{exp.job_title}</strong>
                    </p>
                    <p>{exp.company_name}</p>
                    <p>
                      {convertDate(exp.start_date)} -{" "}
                      {convertDate(exp.end_date)}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {projects && projects.length > 0 && (
            <section className="cvb-template1-section">
              <h3 className="cvb-template1-heading red">PROJECTS</h3>
              <ul>
                {projects.map((project, index) => (
                  <li key={index}>
                    <p>
                      <strong>{project.project_title}</strong>
                    </p>
                    <p>{project.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {skills && skills.length > 0 && (
            <section className="cvb-template1-section">
              <h3 className="cvb-template1-heading red">SKILLS</h3>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>
                    <strong>{skill.skill_name}</strong> - {skill.level}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {certifications && certifications.length > 0 && (
            <section className="cvb-template1-section">
              <h3 className="cvb-template1-heading red">Certifications</h3>
              {certifications.map((Certificate, index) => (
                <p key={index} className="cvb-template1-heading sub white">
                  ▪️ Certified <strong>{Certificate.course_name}</strong> from{" "}
                  {Certificate.issuing_organization} on{" "}
                  {Certificate.date_of_completion}
                  {Certificate.certificate_link && (
                    <>
                      {" "}
                      – <br />{" "}
                      <a
                        href={Certificate.certificate_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </>
                  )}
                </p>
              ))}
            </section>
          )}

          {hobbies && hobbies.length > 0 && (
            <section className="cvb-template1-section">
              <h3 className="cvb-template1-heading red">HOBBIES</h3>
              <ul>
                {hobbies.map((hobbie, index) => (
                  <li key={index}>
                    <strong>{hobbie.hobby_name}</strong>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="cvb-template1-right">
          {personal && (
            <section className="cvb-template1-section">
              <h3 className="cvb-template1-heading right">CONTACTS</h3>
              <p>
                <strong>Phone:</strong> {personal.phone}
              </p>
              <p>
                <strong>Address:</strong> {personal.address}
              </p>
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {personal.linkedin}
                </a>
              </p>
              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {personal.github}
                </a>
              </p>
            </section>
          )}

          {education && education.length > 0 && (
            <section className="cvb-template1-section">
              <h3 className="cvb-template1-heading right">EDUCATION</h3>
              <ul>
                {education.map((edu, index) => (
                  <li key={index}>
                    <p>
                      <strong>{edu.degree}</strong>
                    </p>
                    <p>{edu.institution}</p>
                    <p>
                      {getYear(edu.startDate)} - {getYear(edu.endDate)}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {achievements && achievements.length > 0 && (
            <section className="cvb-template1-section">
              <h3 className="cvb-template1-heading right">ACHIEVEMENTS</h3>
              <ul>
                {achievements.map((item, index) => (
                  <li key={index}>
                    <p>
                      <strong>{item.title}</strong>
                    </p>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {extracurricular && extracurricular.length > 0 && (
            <section className="cvb-template1-section">
              <h3 className="cvb-template1-heading right">EXTRACURRICULAR</h3>
              {extracurricular.map((item, index) => (
                <p key={index} className="cvb-template1-paragraph">
                  ▪️ Participated as {item.role} at {item.organization} –{" "}
                  {item.performance}
                </p>
              ))}
            </section>
          )}

          {references && references.length > 0 && (
            <section className="cvb-template1-section">
              <h3 className="cvb-template1-heading right">REFERENCES</h3>
              {references.map((item, index) => (
                <p key={index} className="cvb-template1-paragraph">
                  ▪️ <strong>{item.name}</strong> – {item.relationship}, <br />{" "}
                  Contact: {item.contact_info}
                </p>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CVTemplate1;
