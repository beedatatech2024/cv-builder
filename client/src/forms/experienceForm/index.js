import React, { useState } from 'react';
import './index.css';
import { addExperienceDetails } from '../../api/cvDetailsApi';

const ExperienceForm = ({userId, onClose}) => {
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

  const handleSubmit = async () => {
    try {
      const response = await addExperienceDetails(userId, experiences);
      if (response.ok) {
        alert("Experience details added successfully!");
        onClose();
      } else {
        alert(response.message || "Failed to add experience details");
      }
    } catch (error) {
      console.error('Error saving experience details:', error);
    }
    console.log('Submitted experience details:', experiences);
  };

  return (
    <div className="cvb-edu-form-container">
      <h2 className="cvb-edu-form-title">Experience</h2>
      <form className="cvb-edu-form">
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
      </form>
       <button type="button" onClick={handleSubmit} className="cvb-edu-submit-btn">
          Save Experience
        </button>
    </div>
  );
};

export default ExperienceForm;
