import React, { useState } from "react";
import { addRefferencesInfoDetails } from "../../api/cvDetailsApi";
import "./index.css";

const ReferenceForm = ({ userId }) => {
  const [references, setReferences] = useState([
    {
      name: "",
      relationship: "",
      contactInfo: "",
      designation: "",
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedReferences = [...references];
    updatedReferences[index][name] = value;
    setReferences(updatedReferences);
  };

  const handleAddProject = () => {
    setReferences([
      ...references,
      { name: "", relationship: "", contactInfo: "", designation: "" },
    ]);
  };

  const handleRemoveProject = (index) => {
    const updatedReferences = references.filter((_, i) => i !== index);
    setReferences(updatedReferences);
  };

  const handleSubmit = async () => {
    try {
      const response = await addRefferencesInfoDetails(userId, references);
      if (response.ok) {
        alert("Projects added successfully!");
      } else {
        alert(response.message || "Failed to add projects");
      }
    } catch (error) {
      console.error("Error saving projects:", error);
    }
    console.log("Submitted projects:", references);
  };

  return (
    <div className="cvb-edu-form-container">
      <h2 className="cvb-edu-form-title">References</h2>
      <form className="cvb-edu-form">
        {references.map((project, index) => (
          <div key={index} className="cvb-edu-form-block">
            <div className="cvb-edu-form-block-header">
              <h4 className="cvb-edu-form-block-title">
                Reference {index + 1}
              </h4>
              {references.length > 1 && (
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
              <label>Reference Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Reference name"
                value={references.name}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>

            <div className="cvb-edu-form-group">
              <label>Relationship</label>
              <input
                type="text"
                name="relationship"
                placeholder="Enter Relationship"
                value={references.relationship}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>

            <div className="cvb-edu-form-group">
              <label>Contact</label>
              <input
                type="text"
                name="contactInfo"
                placeholder="Enter contact details"
                value={references.contactInfo}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>

            <div className="cvb-edu-form-group">
              <label>Designation</label>
              <input
                type="text"
                name="designation"
                placeholder="Enter designation"
                value={references.designation}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>

            <hr className="cvb-edu-divider" />
          </div>
        ))}

        <button
          type="button"
          className="cvb-edu-add-btn"
          onClick={handleAddProject}
        >
          ➕ Add Reference
        </button>
      </form>

      <button
        type="button"
        onClick={handleSubmit}
        className="cvb-edu-submit-btn"
      >
        Save Reference
      </button>
    </div>
  );
};

export default ReferenceForm;
