import React, { useState } from 'react';
import { addSkillsDetails } from '../../api/cvDetailsApi';
import './index.css';

const SkillsForm = ({userId, onClose}) => {
  const [skills, setSkills] = useState([{ skill_name: '', level: '' }]);

  const handleChange = (index, e) => {
    const newSkills = [...skills];
    newSkills[index][e.target.name] = e.target.value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, { skill_name: '', level: '' }]);
  };

  const handleRemoveSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const handleSubmit = async () => {
    try {
      const response = await addSkillsDetails(userId, skills);
      if (response.ok) {
        alert("Skills added successfully!");
        onClose();
      } else {
        alert(response.message || "Failed to add skills");
      }
    } catch (error) {
      console.error('Error saving skills:', error);
    }
    console.log('Submitted skills:', skills);
    
  };

  return (
    <div className="cvb-edu-form-container">
      <h2 className="cvb-edu-form-title">Skills</h2>
      <form className="cvb-edu-form">
        {skills.map((skill, index) => (
          <div key={index} className="cvb-edu-form-block">
            <div className="cvb-edu-form-block-header">
              <h4 className="cvb-edu-form-block-title">Skill {index + 1}</h4>
              {skills.length > 1 && (
                <button
                  type="button"
                  className="cvb-edu-remove-btn"
                  onClick={() => handleRemoveSkill(index)}
                >
                  🗑️ Remove
                </button>
              )}
            </div>

            <div className="cvb-edu-form-group">
              <label>Skill Name</label>
              <input
                type="text"
                name="skill_name"
                placeholder="e.g., JavaScript"
                value={skill.skill_name}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>

            <div className="cvb-edu-form-group">
              <label>Proficiency Level</label>
              <input
                type="text"
                name="level"
                placeholder="e.g., Beginner, Intermediate, Expert"
                value={skill.level}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>

            <hr className="cvb-edu-divider" />
          </div>
        ))}

        <button type="button" className="cvb-edu-add-btn" onClick={handleAddSkill}>
          ➕ Add New Skill
        </button>
      </form>
      <button type="button" onClick={handleSubmit} className="cvb-edu-submit-btn">
          Save Skills
        </button>
    </div>
  );
};

export default SkillsForm;
