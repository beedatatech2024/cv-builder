import ProgressBarChart from "../ProgressBarChart";
import "./index.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const progressData = {
  education: 100,
  experience: 100,
  personalDetails: 100,
  projects: 100,
  skills: 60,
};
  return (
    <aside className="cvb-sidebar">
      <div className="cvb-sidebar-logo">CV Builder</div>
      <nav className="cvb-sidebar-nav">
        <Link to="#1" className="cvb-sidebar-nav-link">My CVs</Link>
        <Link to="#2" className="cvb-sidebar-nav-link">Templates</Link>
        <Link to="/dashboard/details" className="cvb-sidebar-nav-link">CV Details</Link>
        <Link to="#4" className="cvb-sidebar-nav-link">Settings</Link>
      </nav>
      <ProgressBarChart data={progressData} />
    </aside>
  );
}

export default Sidebar;