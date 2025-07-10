import React, { useState } from 'react';
import { addProjectsDetails } from '../../api/cvDetailsApi';
import './index.css';

const ProjectsForm = ({userId, onClose}) => {
  const [projects, setProjects] = useState([
    {
      projectTitle: '',
      description: '',
      link: '',
    },
  ]);

  const handleChange = (index, e) => {
    const updatedProjects = [...projects];
    updatedProjects[index][e.target.name] = e.target.value;
    setProjects(updatedProjects);
  };

  const handleAddProject = () => {
    setProjects([
      ...projects,
      { projectTitle: '', description: '', link: '' },
    ]);
  };

  const handleRemoveProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleSubmit = async () => {
    try {
      const response = await addProjectsDetails(userId, projects);
      if (response.ok) {
        alert("Projects added successfully!");
        onClose();
      } else {
        alert(response.message || "Failed to add projects");
      }
    } catch (error) {
      console.error('Error saving projects:', error);
    }
    console.log('Submitted projects:', projects);    
  };

  return (
    <div className="cvb-edu-form-container">
      <h2 className="cvb-edu-form-title">Projects</h2>
      <form className="cvb-edu-form">
        {projects.map((project, index) => (
          <div key={index} className="cvb-edu-form-block">
            <div className="cvb-edu-form-block-header">
              <h4 className="cvb-edu-form-block-title">Project {index + 1}</h4>
              {projects.length > 1 && (
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
              <label>Project Title <span className='cvb-edu-mandatory'>*</span></label>
              <input
                type="text"
                name="projectTitle"
                placeholder="Enter project title"
                value={project.projectTitle}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>

            <div className="cvb-edu-form-group">
              <label>Description <span className='cvb-edu-mandatory'>*</span></label>
              <textarea
                name="description"
                placeholder="Enter project description"
                value={project.description}
                onChange={(e) => handleChange(index, e)}
                rows="4"
                required
              />
            </div>

            <div className="cvb-edu-form-group">
              <label>Project Link <span className='cvb-edu-mandatory'>*</span></label>
              <input
                type="url"
                name="link"
                placeholder="https://your-project-link.com"
                value={project.link}
                onChange={(e) => handleChange(index, e)}
              />
            </div>

            <hr className="cvb-edu-divider" />
          </div>
        ))}

        <button type="button" className="cvb-edu-add-btn" onClick={handleAddProject}>
          ➕ Add New Project
        </button>
      </form>
      <button type="button" onClick={handleSubmit} className="cvb-edu-submit-btn">
          Save Projects
        </button>
    </div>
  );
};

export default ProjectsForm;
