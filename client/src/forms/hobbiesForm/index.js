import React, { useState } from 'react';
import { addHobbies } from '../../api/cvDetailsApi';
import './index.css';

const HobbiesForm = ({userId}) => {
  const [hobbies, setHobbies] = useState([
    {
      hobbyName: '',
      description: '',
    },
  ]);

  const handleChange = (index, e) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies[index][e.target.name] = e.target.value;
    setHobbies(updatedHobbies);
  };

  const handleAddProject = () => {
    setHobbies([
      ...hobbies,
      { hobbyName: '', description: ''},
    ]);
  };

  const handleRemoveProject = (index) => {
    const updatedhobbies = hobbies.filter((_, i) => i !== index);
    setHobbies(updatedhobbies);
  };

  const handleSubmit = async () => {
    try {
      const response = await addHobbies(userId, hobbies);
      if (response.ok) {
        alert("Projects added successfully!");
      } else {
        alert(response.message || "Failed to add projects");
      }
    } catch (error) {
      console.error('Error saving projects:', error);
    }
    console.log('Submitted projects:', hobbies);    
  };

  return (
    <div className="cvb-edu-form-container">
      <h2 className="cvb-edu-form-title">Hobbies</h2>
      <form className="cvb-edu-form">
        {hobbies.map((project, index) => (
          <div key={index} className="cvb-edu-form-block">
            <div className="cvb-edu-form-block-header">
              <h4 className="cvb-edu-form-block-title">Hobbie {index +1}</h4>
              {hobbies.length > 1 && (
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
              <label>Hobbie Name <span className='cvb-edu-mandatory'>*</span></label>
              <input
                type="text"
                name="hobbyName"
                placeholder="Enter hobbie name"
                value={hobbies.hobbyName}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div className="cvb-edu-form-group">
              <label>Description <span className='cvb-edu-mandatory'>*</span></label>
              <textarea
                name="description"
                placeholder="Enter project description"
                value={hobbies.description}
                onChange={(e) => handleChange(index, e)}
                rows="4"
                required
              />
            </div>
            <hr className="cvb-edu-divider" />
          </div>
        ))}

        <button type="button" className="cvb-edu-add-btn" onClick={handleAddProject}>
          ➕ Add New Hobbies
        </button>
      </form>
      <button type="button" onClick={handleSubmit} className="cvb-edu-submit-btn">
          Save Hobbies
        </button>
    </div>
  );
};

export default HobbiesForm;
