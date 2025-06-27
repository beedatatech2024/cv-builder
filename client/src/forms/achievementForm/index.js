import React, { useState } from 'react';
import './index.css';
import { addAchievementDetails } from '../../api/cvDetailsApi';

const AchievementsForm = ({userId}) => {
  const [archivements, setArchivements] = useState([
    {
      title: '',
      description: '',
      date: '',
      link: '',
    },
  ]);

  const handleChange = (index, e) => {
    const updatedArchivement = [...archivements];
    updatedArchivement[index][e.target.name] = e.target.value;
    setArchivements(updatedArchivement);
  };

  const handleAddProject = () => {
    setArchivements([
      ...archivements,
      { title: '', description: '', link: '',date:'' },
    ]);
  };

  const handleRemoveProject = (index) => {
    const updatedProjects = archivements.filter((_, i) => i !== index);
    setArchivements(updatedProjects);
  };

  const handleSubmit = async () => {
    try {
      const response = await addAchievementDetails(userId, archivements);
      if (response.ok) {
        alert("Projects added successfully!");
      } else {
        alert(response.message || "Failed to add projects");
      }
    } catch (error) {
      console.error('Error saving projects:', error); 
    }
    console.log('Submitted projects:', archivements);    
  };

  return (
    <div className="cvb-edu-form-container">
      <h2 className="cvb-edu-form-title">Achievements</h2>
      <form className="cvb-edu-form">
        {archivements.map((archivement, index) => (
          <div key={index} className="cvb-edu-form-block">
            <div className="cvb-edu-form-block-header">
              <h4 className="cvb-edu-form-block-title">Award {index +1}</h4>
              {archivements.length > 1 && (
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
              <label>Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter award title"
                value={archivements.title}
                onChange={(e) => handleChange(index, e)}
                required
              />
              <div className="cvb-edu-form-group">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Enter Academic Award Hackathon Win Scholarship Publication"
                value={archivements.description}
                onChange={(e) => handleChange(index, e)}
                rows="4"
                required
              />
            </div>
            </div>
            <div className="cvb-edu-form-group">
              <label>Achievement Date</label>
              <input
                type="date"
                name="date"
                placeholder="Enter date"
                value={archivements.date}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div className="cvb-edu-form-group">
              <label>Link</label>
              <input
                type="url"
                name="link"
                placeholder="https://your-project-link.com"
                value={archivements.link}
                onChange={(e) => handleChange(index, e)}  
              />
            </div>
            <hr className="cvb-edu-divider" />
          </div>
        ))}

        <button type="button" className="cvb-edu-add-btn" onClick={handleAddProject}>
          ➕ Add New Achievements
        </button>
      </form>
      <button type="button" onClick={handleSubmit} className="cvb-edu-submit-btn">
          Save Achievements
        </button>
    </div>
  );
};

export default AchievementsForm;
