import React, { useState } from 'react';
import { addExtracurricularActivitiesDetails } from '../../api/cvDetailsApi';
import './index.css';

const ExtraCulturalForm = ({userId}) => {
  const [culturals, setCulturals] = useState([
    {
      organizationName: '',
      role: '',
      startDate: '',
      endDate: '',
      activitiesPerformed:'',
    },
  ]);

  const handleChange = (index, e) => {
    const updatedculturals = [...culturals];
    updatedculturals[index][e.target.name] = e.target.value;
    setCulturals(updatedculturals);
  };

  const handleAddProject = () => {
    setCulturals([
      ...culturals,
      { organizationName: '', role: '', startDate: '' , endDate:'',activitiesPerformed:''},
    ]);
  };

  const handleRemoveProject = (index) => {
    const updatedCulturals = culturals.filter((_, i) => i !== index);
    setCulturals(updatedCulturals);
  };

  const handleSubmit = async () => {
    try {
      const response = await addExtracurricularActivitiesDetails(userId, culturals);
      if (response.ok) {
        alert("Projects added successfully!");
      } else {
        alert(response.message || "Failed to add projects");
      }
    } catch (error) {
      console.error('Error saving projects:', error);
    }
    console.log('Submitted projects:', culturals);    
  };

  return (
    <div className="cvb-edu-form-container">
      <h2 className="cvb-edu-form-title">extracurricular</h2>
      <form className="cvb-edu-form">
        {culturals.map((cultural, index) => (
          <div key={index} className="cvb-edu-form-block">
            <div className="cvb-edu-form-block-header">
              <h4 className="cvb-edu-form-block-title">Activities {index +1}</h4>
              {culturals.length > 1 && (
                <button
                  type="button"
                  className="cvb-edu-remove-btn"
                  onClick={() => handleRemoveProject(index)}
                >
                  🗑️ Remove
                </button>
              )}
            </div>

            <div className="cvb-edu-form-group">
              <label>Organization Name</label>
              <input
                type="text"
                name="organizationName"
                placeholder="Enter Organization Name"
                value={culturals.organizationName}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div className="cvb-edu-form-group">
              <label>Role</label>
              <input
                type="text"
                name="role"
                placeholder="Enter rolename"
                value={culturals.culturalsRole}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div className="cvb-edu-form-group">
              <label>Strating Date</label>
              <input
                type="date"
                name="startDate"
                placeholder="Enter starting date"
                value={culturals.startDate}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div className="cvb-edu-form-group">
              <label>Ending Date</label>
              <input
                type="date"
                name="endDate"
                placeholder="Enter ending date"
                value={culturals.endDate}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>

            <div className="cvb-edu-form-group">
              <label>Activities Performed</label>
              <input
                type="text"
                name="activitiesPerformed"
                placeholder="enter Activities Performed"
                value={culturals.activitiesPerformed}
                onChange={(e) => handleChange(index, e)}
              />
            </div>

            <hr className="cvb-edu-divider" />
          </div>
        ))}

        <button type="button" className="cvb-edu-add-btn" onClick={handleAddProject}>
          ➕ Add New Activities
        </button>
      </form>
      <button type="button" onClick={handleSubmit} className="cvb-edu-submit-btn">
          Save Activities
        </button>
    </div>
  );
};

export default ExtraCulturalForm;
