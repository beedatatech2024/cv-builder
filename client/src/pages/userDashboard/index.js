import React from 'react';
import './index.css';
import UserForms from './userForms';

const UserDashboard = () => {
  return (
    <div className="cvb-dashboard-container">
      {/* Sidebar */}
      <aside className="cvb-sidebar">
        <div className="cvb-sidebar-logo">CV Builder</div>
        <nav className="cvb-sidebar-nav">
          <a href="#1">My CVs</a>
          <a href="#2">Templates</a>
          <a href="#3">Create New</a>
          <a href="#4">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="cvb-dashboard-main">
        <header className="cvb-dashboard-topbar">
          <div className="cvb-dashboard-welcome">
            <h2>Welcome back</h2>
            <p>Start building your resume or continue editing your drafts.</p>
          </div>
          <div className="cvb-dashboard-profile">
            <img src="https://i.pravatar.cc/40" alt="user" />
          </div>
        </header>

        {/* CV Cards */}
        <section className="cvb-cv-section">
          <h3>Your Resumes</h3>
          <div className="cvb-cv-grid">
            <div className="cvb-cv-card">
              <div className="cvb-cv-thumbnail">CV Preview</div>
              <div className="cvb-cv-meta">
                <p className="cvb-cv-title">Marketing Resume</p>
                <div className="cvb-cv-actions">
                  <button>Open</button>
                  <button>Download</button>
                </div>
              </div>
            </div>
            <div className="cvb-cv-card cvb-cv-add-new">
              <div>➕</div>
              <p>Create New CV</p>
            </div>
          </div>
        </section>
        <UserForms />
      </main>
    </div>
  );
};

export default UserDashboard;
