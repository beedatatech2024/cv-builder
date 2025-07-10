import React, { useState } from 'react';
import { addCertificationDetails } from '../../api/cvDetailsApi';
import './index.css';

const CertificationForm = ({ userId, onClose }) => {
    const [certificates, setCertificates

        
    ] = useState([
        {
            courseName: '',
            issuingOrganization: '',
            certificateLink: '',
            dateOfCompletion:''
        },
    ]);

    const handleChange = (index, e) => {
        const updatedcertificate = [...certificates];
        updatedcertificate[index][e.target.name] = e.target.value;
        setCertificates(updatedcertificate);
    };

    const handleAddProject = () => {
        setCertificates([
            ...certificates,
            { courseName: '', issuingOrganization: '', certificateLink: '',dateOfCompletion:'' },
        ]);
    };

    const handleRemoveProject = (index) => {
        const updatedProjects = certificates.filter((_, i) => i !== index);
        setCertificates(updatedProjects);
    };

    const handleSubmit = async () => {
        try {
            const response = await addCertificationDetails(userId, certificates);
            if (response.ok) {
                alert("Projects added successfully!");
                onClose()
            } else {
                alert(response.message || "Failed to add projects");
            }
        } catch (error) {
            console.error('Error saving projects:', error);
        }
        console.log('Submitted projects:', certificates);
    };

    return (
        <div className="cvb-edu-form-container">
            <h2 className="cvb-edu-form-title">Certifications & Courses</h2>
            <form className="cvb-edu-form">
                {certificates.map((certificate, index) => (
                    <div key={index} className="cvb-edu-form-block">
                        <div className="cvb-edu-form-block-header">
                            <h4 className="cvb-edu-form-block-title">Course {index + 1}</h4>
                            {certificates.length > 1 && (
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
                            <label>Course Name <span className='cvb-edu-mandatory'>*</span></label>
                            <input
                                type="text"
                                name="courseName"
                                placeholder="Enter Course Name"
                                value={certificate.courseName}
                                onChange={(e) => handleChange(index, e)}
                                required
                            />
                        </div>
                        <div className="cvb-edu-form-group">
                            <label>Date of Completion <span className='cvb-edu-mandatory'>*</span></label>
                            <input
                                type="date"
                                name="dateOfCompletion"
                                placeholder="Select date"
                                value={certificate.dateOfCompletion}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </div>
                         <div className="cvb-edu-form-group">
                            <label>Issuing Organization <span className='cvb-edu-mandatory'>*</span></label>
                            <textarea
                                name="issuingOrganization"
                                placeholder="Enter Course description"
                                value={certificate.issuingOrganization}
                                onChange={(e) => handleChange(index, e)}
                                rows="4"
                                required
                            />
                        </div>
                        <div className="cvb-edu-form-group">
                            <label>Certificate Link</label>
                            <input
                                type="url"
                                name="certificateLink"
                                placeholder="https://your-project-link.com"
                                value={certificate.certificateLink}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </div>
                        
                        <hr className="cvb-edu-divider" />
                    </div>
                ))}

                <button type="button" className="cvb-edu-add-btn" onClick={handleAddProject}>
                    ➕ Add New Certificate
                </button>
            </form>
            <button type="button" onClick={handleSubmit} className="cvb-edu-submit-btn">
                Save Certificates
            </button>
        </div>
    );
};

export default CertificationForm;
