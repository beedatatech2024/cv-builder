import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFileAlt, FaPalette, FaUserEdit, FaCog, FaSignOutAlt } from "react-icons/fa";
import ProgressBarChart from "../ProgressBarChart";
import LogoutConfirm from "../LogoutConfirm";
import "./index.css";

const Sidebar = () => {
  const [openLogoutConfirm, setOpenLogoutConfirm] = useState(false);

  const progressData = {
    education: 100,
    experience: 100,
    personalDetails: 100,
    projects: 100,
    skills: 60,
  };

  const isMobile = window.innerWidth >= 768;

  return (
    <aside className="cvb-sidebar">
      <div onClick={() => window.location.href = "/"} className="cvb-sidebar-logo">
        <img src="/logo.png" className="cvb-sidebar-logo-img" alt="CV Builder Logo" />
        <span className="cvb-sidebar-logo-text">Builder</span>
      </div>

      <nav className="cvb-sidebar-nav">
        <Link to="/dashboard" className="cvb-sidebar-nav-link">
          <FaFileAlt className="cvb-sidebar-icon" />
          <span className="cvb-sidebar-label">My CVs</span>
        </Link>
        <Link to="/dashboard/templates" className="cvb-sidebar-nav-link">
          <FaPalette className="cvb-sidebar-icon" />
          <span className="cvb-sidebar-label">Templates</span>
        </Link>
        <Link to="/dashboard/details" className="cvb-sidebar-nav-link">
          <FaUserEdit className="cvb-sidebar-icon" />
          <span className="cvb-sidebar-label">CV Details</span>
        </Link>
        <Link to="/dashboard/settings" className="cvb-sidebar-nav-link">
          <FaCog className="cvb-sidebar-icon" />
          <span className="cvb-sidebar-label">Settings</span>
        </Link>
      </nav>

      <div className="cvb-sidebar-progress-wrapper">
  <ProgressBarChart data={progressData} />
</div>

      <button onClick={() => setOpenLogoutConfirm(true)} className="cvb-sidebar-nav-logout-button">
        <FaSignOutAlt className="cvb-sidebar-icon" />
        <span className="cvb-sidebar-label">Logout</span>
      </button>

      {openLogoutConfirm && <LogoutConfirm onClose={() => setOpenLogoutConfirm(false)} />}
    </aside>
  );
};

export default Sidebar;
