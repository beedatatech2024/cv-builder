import React, { useState, useEffect, useRef } from "react";
import { getCVDetails } from "../../api/cvDetailsApi";
import html2pdf from "html2pdf.js";
import "./index.css";
import DownloadCVDocx from "../../utils/DownloadCVDocx";

const CVPreview = ({ userId }) => {
  const [cvData, setCvData] = useState(null);
  const cvRef = useRef();

  const handleDownloadPDF = () => {
    if (!cvData) return;
    const { personal } = cvData;

    const element = cvRef.current;
    const opt = {
      margin: 0.1,
      filename: `${personal.fullName.replace(/\s/g, "_")}_CV.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
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

  const getYear = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    return year;
  };

  useEffect(() => {
    const fetchCVDetails = async () => {
      try {
        const response = await getCVDetails(userId);
        setCvData(response);
      } catch (error) {
        console.error("Error fetching CV details:", error);
      }
    };

    fetchCVDetails();
  }, [userId]);

  return (
    <div className="cvb-preview-main-container">
      {cvData && (() => {
        const { personal, education, skills, experience, projects } = cvData;
        return (
          <>
            <div className="cvb-preview-container" ref={cvRef}>
              {/* Personal Info */}
              {personal && <section className="cvb-preview-section">
                <h2>{personal.fullName}</h2>
                <p><strong>Phone:</strong> {personal.phone}</p>
                <p><strong>Address:</strong> {personal.address}</p>
                <p><strong>LinkedIn:</strong> <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">{personal.linkedin}</a></p>
                <p><strong>GitHub:</strong> <a href={personal.github} target="_blank" rel="noopener noreferrer">{personal.github}</a></p>
              </section>}

              {/* Summary */}
              {personal && <section className="cvb-preview-section">
                <h3>Summary</h3>
                <p>{personal.summary}</p>
              </section>}

              {/* Education */}
              {education && <section className="cvb-preview-section">
                <h3>Education</h3>
                {education.map((edu, i) => (
                  <div key={i} className="cvb-preview-card">
                    <h4>{edu.degree} in {edu.field}</h4>
                    <p>{edu.institution}</p>
                    <p>{getYear(edu.startDate)} - {getYear(edu.endDate)}</p>
                    <p>CGPA/Percentage: {edu.percentage}</p>
                  </div>
                ))}
              </section>}

              {/* Skills */}
              {skills && <section className="cvb-preview-section">
                <h3>Skills</h3>
                <ul className="cvb-skill-list">
                  {skills.map((skill, i) => (
                    <li key={i}><strong>{skill.skill_name}</strong> - {skill.level}</li>
                  ))}
                </ul>
              </section>}

              {/* Experience */}
              {experience && <section className="cvb-preview-section">
                <h3>Experience</h3>
                {experience.map((exp, i) => (
                  <div key={i} className="cvb-preview-card">
                    <h4>{exp.job_title} at {exp.company_name}</h4>
                    <p>{convertDate(exp.start_date)} - {convertDate(exp.end_date)}</p>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </section>}

              {/* Projects */}
              {projects && <section className="cvb-preview-section">
                <h3>Projects</h3>
                {projects.map((project, i) => (
                  <div key={i} className="cvb-preview-card">
                    <h4>{project.project_title}</h4>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">Visit Project</a>
                  </div>
                ))}
              </section>}

              {/* Declaration */}
              {personal && <section className="cvb-preview-section">
                <h3>Declaration</h3>
                <p>{personal.declaration}</p>
              </section>}
            </div>

            {/* Download Buttons */}
            <div className="cvb-download-buttons">
              <button onClick={handleDownloadPDF}>Download as PDF</button>
              <DownloadCVDocx cvData={cvData} />
            </div>
          </>
        );
      })()}
    </div>
  );
};

export default CVPreview;
