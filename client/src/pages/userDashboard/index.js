import React from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import CVDetails from './cvDetails';

const UserDashboard = () => {
  return (
    <div className="cvb-dashboard-container">
      <Sidebar />
      <main className="cvb-dashboard-main">
        <Header />
        <Routes>
          <Route path="/" element={<h2>Welcome to your dashboard!</h2>} />
          <Route path="/my-cvs" element={<CVDetails />} />
          <Route path="/templates" element={<h2>Templates</h2>} />
          <Route path="/create-cv" element={<h2>Create CV</h2>} />
          <Route path="/details" element={<CVDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default UserDashboard;
