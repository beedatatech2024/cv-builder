import React, { useState } from 'react';
import { addEducationDetails } from '../../api/cvDetailsApi';
import './index.css';

const EducationDetailsForm = ({userId, onClose}) => {
  const [educations, setEducations] = useState([
    { institution: '', degree: '', field: '', percentage: '', startDate: '', endDate: '' },
  ]);

  const handleChange = (index, e) => {
    const newEducations = [...educations];
    newEducations[index][e.target.name] = e.target.value;
    setEducations(newEducations);
  };

  const handleAddDegree = () => {
    setEducations([
      ...educations,
      { institution: '', degree: '', field: '', percentage: '', startDate: '', endDate: '' },
    ]);
  };

  const handleRemoveDegree = (index) => {
    const newEducations = educations.filter((_, i) => i !== index);
    setEducations(newEducations);
  };

  const handleSubmit = async() => {
   const response = await addEducationDetails(userId, educations);
    if (response.ok) {
      alert("Education details added successfully!");
      onClose();
    } else {
      alert(response.message || "Failed to add education details");
    }
    console.log('Submitted education details:', educations);

  };

  return (
    <div className="cvb-edu-form-container">
      <h2 className="cvb-edu-form-title">Education Details</h2>
      <form className="cvb-edu-form">
        {educations.map((edu, index) => (
          <div key={index} className="cvb-edu-form-block">
            <div className="cvb-edu-form-block-header">
              <h4 className="cvb-edu-form-block-title">Degree {index + 1}</h4>
              {educations.length > 1 && (
                <button
                  type="button"
                  className="cvb-edu-remove-btn"
                  onClick={() => handleRemoveDegree(index)}
                >
                  🗑️ Remove
                </button>
              )}
            </div>

            <div className="cvb-edu-form-group">
              <label>School / University<span className='cvb-edu-mandatory'>*</span></label>
              <input
                type="text"
                name="institution"
                placeholder="Enter institution name"
                value={edu.institution}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>

            <div className="cvb-edu-form-group">
              <label>Degree<span className='cvb-edu-mandatory'>*</span></label>
              <input
                type="text"
                name="degree"
                value={edu.degree}
                placeholder='Enter degree (e.g., B.Tech, M.Sc)'
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>

            <div className="cvb-edu-form-group">
              <label>Field of Study<span className='cvb-edu-mandatory'>*</span></label>
              <input
                type="text"
                name="field"
                placeholder='Enter field of study (e.g., Computer Science)'
                value={edu.field}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>

            <div className="cvb-edu-form-group">
              <label>Percentage / CGPA<span className='cvb-edu-mandatory'>*</span></label>
              <input
                type="text"
                name="percentage"
                placeholder='Enter percentage or CGPA (e.g., 85%, 3.5)'
                value={edu.percentage}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>

            <div className="cvb-edu-form-row">
              <div className="cvb-edu-form-group">
                <label>Start Date<span className='cvb-edu-mandatory'>*</span></label>
                <input
                  type="date"
                  name="startDate"
                  value={edu.startDate}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
              </div>
              <div className="cvb-edu-form-group">
                <label>End Date<span className='cvb-edu-mandatory'>*</span></label>
                <input
                  type="date"
                  name="endDate"
                  value={edu.endDate}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
              </div>
            </div>

            <hr className="cvb-edu-divider" />
          </div>
        ))}

        <button type="button" className="cvb-edu-add-btn" onClick={handleAddDegree}>
          ➕ Add New Degree
        </button>
      </form>
      <button type="button"  onClick={handleSubmit} className="cvb-edu-submit-btn">
          Save Education Details
        </button>
    </div>
  );
};

export default EducationDetailsForm;
