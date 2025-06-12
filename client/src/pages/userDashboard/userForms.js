import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import EducationDetailsForm from "../../forms/educationDetails";
import PersonalInfoForm from "../../forms/personalInfo";
import SkillsForm from "../../forms/skillsForm";
import ExperienceForm from "../../forms/experienceForm";
import ProjectsForm from "../../forms/projectsForm";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const UserForms = () => {
    const [isOpenPopup, setIsOpenPopup] = useState(null);
    const token = Cookies.get("jwtToken")
    const userId = token ? jwtDecode(token).id : null;

    const renderForms = () => {
      switch (isOpenPopup) {
        case "personalDetails":
          return <PersonalInfoForm userId={userId} onClose={() => setIsOpenPopup(false)} />;
        case "educationDetails":
          return <EducationDetailsForm userId={userId} onClose={() => setIsOpenPopup(false)} />;
        case "skills":
          return <SkillsForm userId={userId} onClose={() => setIsOpenPopup(false)} />;
        case "experience":
          return <ExperienceForm userId={userId} onClose={() => setIsOpenPopup(false)} />;
        case "projects":
          return <ProjectsForm userId={userId} onClose={() => setIsOpenPopup(false)} />;
        default:
          return null;
      }
    };
  return (
    <div className="user-forms-buttons">
      <button className="user-form-btn" onClick={() => setIsOpenPopup("personalDetails")}>Add Professional Details</button>
      <button className="user-form-btn" onClick={() => setIsOpenPopup("educationDetails")}>Add Education Details</button>
      <button className="user-form-btn" onClick={() => setIsOpenPopup("skills")}>Add Skills</button>
      <button className="user-form-btn" onClick={() => setIsOpenPopup("experience")}>Add Experience</button>
      {/* <button className="user-form-btn" onClick={() => setIsOpenPopup("achievements")}>Add Achievements</button> */}
      <button className="user-form-btn" onClick={() => setIsOpenPopup("projects")}>Add Projects</button>
      {isOpenPopup && (
        <div className="cvb-login-popup-overlay">
          <div className="cvb-login-popup">
            <button
              className="cvb-login-close-button"
              onClick={() => setIsOpenPopup(false)}
            >
              <MdClose />
            </button>
            <div className="cvb-login-page">
                {renderForms()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserForms;
