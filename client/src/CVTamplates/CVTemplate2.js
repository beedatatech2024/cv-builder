import React from "react";
import "./styles/CVTemplate2.css";
import {
  FaFacebookF, FaInstagram, FaTwitter, FaBehance,
  FaPhoneAlt, FaGlobe, FaMapMarkerAlt
} from "react-icons/fa";

const CVTemplate2 = ({data}) => {
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
    <div className="cvb-second-resume-a4">
      <div className="cvb-second-header">
        <div className="cvb-second-info">
          <h1 className="cvb-second-name">{personal.fullName}</h1>
          <p className="cvb-second-desc">
            {personal.summary}
          </p>

          <div className="cvb-second-social">
            <span><FaBehance /> Behance</span>
            <span><FaInstagram /> Instagram</span>
            <span><FaTwitter /> Twitter</span>
            <span><FaFacebookF /> Facebook</span>
          </div>
        </div>
      </div>

      <div className="cvb-second-content">
        <div className="cvb-second-left">
          <section>
            <h2 className="cvb-second-section-title">CONTACT</h2>
            <p className="cvb-second-contact"><FaMapMarkerAlt /> {personal.address}</p>
            <p className="cvb-second-contact"><FaPhoneAlt /> {personal.phone}</p>
            {/* <p className="cvb-second-contact"><FaEnvelope />{personal.mail}</p> */}
            <p className="cvb-second-contact"><FaGlobe />{personal.linkedin}</p>

          </section>
          <section>
            <h2 className="cvb-second-section-title">PROJECTS</h2>
            <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <p><strong>{project.project_title}</strong></p>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
          </section>
        </div>

        <div className="cvb-second-right">
          <section>
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
            
          </section>
          <section>
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
            {/* <p className="cvb-second-education"><strong>2008-2012</strong> College | Design Department<br />
              Specialized in visual communication and digital media.</p>
            <p className="cvb-second-education"><strong>2012-2015</strong> Example University | Fine Arts<br />
              Final year thesis on "Modern Typography in Digital Space".</p> */}
          </section>
          
          <section>
            <h2 className="cvb-second-section-title">SKILLS | EXPERTISE</h2>
           <ul>
            {skills.map((skill, index) => (
              <li key={index}><strong>{skill.skill_name}</strong> - {skill.level}</li>
            ))}
          </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CVTemplate2;
