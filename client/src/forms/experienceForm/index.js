import React, { useState } from 'react';
import './index.css';

const ExperienceForm = () => {
  const [experiences, setExperiences] = useState([
    {
      companyName: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ]);

  const handleChange = (index, e) => {
    const newExperiences = [...experiences];
    newExperiences[index][e.target.name] = e.target.value;
    setExperiences(newExperiences);
  };

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      { companyName: '', jobTitle: '', startDate: '', endDate: '', description: '' },
    ]);
  };

  const handleRemoveExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted experience data:', experiences);
    // send to backend or parent component
  };

  return (
    <div className="cvb-edu-form-container">
      <h2 className="cvb-edu-form-title">Experience</h2>
      <form className="cvb-edu-form" onSubmit={handleSubmit}>
        {experiences.map((exp, index) => (
          <div key={index} className="cvb-edu-form-block">
            <div className="cvb-edu-form-block-header">
              <h4 className="cvb-edu-form-block-title">Experience {index + 1}</h4>
              {experiences.length > 1 && (
                <button
                  type="button"
                  className="cvb-edu-remove-btn"
                  onClick={() => handleRemoveExperience(index)}
                >
                  🗑️ Remove
                </button>
              )}
            </div>

            <div className="cvb-edu-form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter company name"
                value={exp.companyName}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>

            <div className="cvb-edu-form-group">
              <label>Job Title</label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Enter job title"
                value={exp.jobTitle}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>

            <div className="cvb-edu-form-row">
              <div className="cvb-edu-form-group">
                <label>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={exp.startDate}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
              </div>
              <div className="cvb-edu-form-group">
                <label>End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={exp.endDate}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
              </div>
            </div>

            <div className="cvb-edu-form-group">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Describe your role and responsibilities"
                value={exp.description}
                onChange={(e) => handleChange(index, e)}
                rows="4"
                required
              />
            </div>

            <hr className="cvb-edu-divider" />
          </div>
        ))}

        <button type="button" className="cvb-edu-add-btn" onClick={handleAddExperience}>
          ➕ Add New Experience
        </button>

        <button type="submit" className="cvb-edu-submit-btn">
          Save Experience
        </button>
      </form>
    </div>
  );
};

export default ExperienceForm;
