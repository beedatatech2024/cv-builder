import React, { useState } from 'react';
import './index.css';
import { addPersonalDetails } from '../../api/cvDetailsApi';

const PersonalInfoForm = ({userId, onClose}) => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    phone: '',
    address: '',
    summary: '',
    linkedin: '',
    github: '',
    email: '',
    declaration: '',
  });

  const handleChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await addPersonalDetails(userId, personalInfo);
      if (response.ok) {
        alert("Personal information added successfully!");
        onClose();
      } else {
        alert(response.message || "Failed to add offer");
      }
    }
    catch (error) {
      alert('Error saving personal information:', error);


    }
      
    
  };

  return (
    <div className="cvb-edu-form-container">
      <h2 className="cvb-edu-form-title">Personal Information</h2>
      <form className="cvb-edu-form" onSubmit={handleSubmit}>
        <div className="cvb-edu-form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={personalInfo.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="cvb-edu-form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={personalInfo.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="cvb-edu-form-group">
          <label>Email</label>
          <input
            type="url"
            name="email"
            placeholder="Enter email address"
            value={personalInfo.email}
            onChange={handleChange}
          />
        </div>

        <div className="cvb-edu-form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter address"
            value={personalInfo.address}
            onChange={handleChange}
            required
          />
        </div>
        

        <div className="cvb-edu-form-group">
          <label>Summary</label>
          <textarea
            name="summary"
            placeholder="Write a short summary about yourself"
            value={personalInfo.summary}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <div className="cvb-edu-form-group">
          <label>LinkedIn Profile</label>
          <input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/yourprofile"
            value={personalInfo.linkedin}
            onChange={handleChange}
          />
        </div>

        <div className="cvb-edu-form-group">
          <label>GitHub Profile</label>
          <input
            type="url"
            name="github"
            placeholder="https://github.com/yourusername"
            value={personalInfo.github}
            onChange={handleChange}
          />
        </div>
        
         <div className="cvb-edu-form-group">
          <label>Declaration</label>
          <textarea
            name="declaration"
            placeholder="Write a short declaration about yourself"
            value={personalInfo.declaration}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
      </form>
      <button type="button" onClick={handleSubmit} className="cvb-edu-submit-btn">
          Save Personal Info
        </button>
    </div>
  );
};

export default PersonalInfoForm;
