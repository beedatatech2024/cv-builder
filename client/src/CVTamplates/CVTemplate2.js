import React from "react";
import { getYear, convertDate } from "../utils/DateModifications";
import "./styles/CVTemplate2.css";
import {
  FaPhoneAlt, FaGlobe, FaMapMarkerAlt,FaGithub,FaLinkedin
} from "react-icons/fa";

const CVTemplate2 = ({cvData}) => {

  const { personal, education, skills, experience, projects, achievements, references, certifications, extracurricular, hobbies } = cvData;

  return (
    <div className="cvb-second-resume-a4">
      {personal && <div className="cvb-second-header">
        {personal && <div className="cvb-second-info">
          <h1 className="cvb-second-name">{personal.fullName}</h1>
          <p className="cvb-second-desc">
            {personal.summary}
          </p>

          <div className="cvb-second-social">
            <span><a r href={personal.github}  ></a><FaGithub  /> GitHub</span>
            <span><a href={personal.linkedin} ></a><FaLinkedin /> LinkedIn</span>
          </div>
        </div>}
      </div>}

      <div className="cvb-second-content">
        <div className="cvb-second-left">
          {personal && <section>
            <h2 className="cvb-second-section-title">CONTACT</h2>
            <p className="cvb-second-contact"><FaMapMarkerAlt /> {personal.address}</p>
            <p className="cvb-second-contact"><FaPhoneAlt /> {personal.phone}</p>
            <p className="cvb-second-contact"><FaGlobe />{personal.linkedin}</p>
          </section>}
          {projects && projects.length>0 && <section>
            <h2 className="cvb-second-section-title">PROJECTS</h2>
            <ul>
              {projects.map((project, index) => (
                <li key={index}>
                  <p><strong>{project.project_title}</strong></p>
                  <p>{project.description}</p>
                </li>
              ))}
            </ul>
          </section>}
          {certifications && certifications.length>0 &&<section>
            <h2 className="cvb-second-section-title">CERTIFICATIONS</h2>
            {certifications.map((item, index) => (
              <p key={index}  style={{ background: "none", fontWeight: "normal" }}>
                ▪️ {item.course_name} – {item.issuing_organization},  <br />{item.date_of_completion}
                <br/>
                {item.certificate_link && (
                  <> <a href={item.certificate_link} target="_blank" rel="noopener noreferrer">View Certificate</a></>
                )}
              </p>
            ))}
          </section>}

          {hobbies && hobbies.length > 0 && <section>
            <h2 className="cvb-second-section-title">HOBBIES</h2>
            {hobbies.map((item, index) => (
              <div>
                <p>
                  {item.hobby}
                </p>
              </div>
            ))}
          </section>}
          {extracurricular && extracurricular.length >0 && <section>
            <h2 className="cvb-second-section-title">EXTRACURRICULAR</h2>
            {extracurricular.map((item, index) => (
              <p key={index} className="cvb-second-section-title" style={{ background: "none", fontWeight: "normal" }}>
                ▪️ {item.role} at {item.organization} – {item.performance}
              </p>
            ))}
          </section>}
          {references && references.length>0 && <section>
            <h2 className="cvb-second-section-title">REFERENCES</h2>
            {references.map((item, index) => (
              <p key={index} className="cvb-second-section-title" style={{ background: "none", fontWeight: "normal" }}>
                ▪️ {item.name} – {item.relationship}, Contact: {item.contact_info}
              </p>
            ))}
          </section>}


        </div>

        <div className="cvb-second-right">
          {experience && experience.length >0 && <section>
            <h2 className="cvb-second-section-title">EXPERIENCE</h2>
            <ul>
              {experience.map((exp, index) => (
                <li className="cvb-second-education" key={index}>
                  <strong>{exp.job_title}</strong>
                  <p>{exp.company_name}</p>
                  <p>{convertDate(exp.start_date)} - {convertDate(exp.end_date)}</p>
                </li>
              ))}
            </ul>

          </section>}
          {education && education.length >0 && <section>
            <h2 className="cvb-second-section-title">EDUCATION</h2>
            <ul>
              {education.map((edu, index) => (
                <li className="cvb-second-education" key={index}>
                  <p><strong>{edu.degree}</strong></p>
                  <p>{edu.institution}</p>
                  <p>{getYear(edu.startDate)} - {getYear(edu.endDate)}</p>
                </li>
              ))}
            </ul>
          </section>}

          {skills&& skills.length>0 &&<section>
            <h2 className="cvb-second-section-title">SKILLS | EXPERTISE</h2>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}><strong>{skill.skill_name}</strong> - {skill.level}</li>
              ))}
            </ul>
          </section>}
          {achievements && achievements.length>0 &&<section>
            <h2 className="cvb-second-section-title">ACHIEVEMENTS</h2>
            <ul>
              {achievements.map((item, index) => (
                <div>
                  <p>{item.title}-{item.description}</p>
                </div>
              ))}
            </ul>

          </section>}
        </div>
      </div>
    </div>
  );
};

export default CVTemplate2;
