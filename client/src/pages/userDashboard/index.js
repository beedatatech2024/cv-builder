import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import CVDetails from './cvDetails';
import CVTamplates from './cvTamplates';
import { getCVDetails } from '../../api/cvDetailsApi';
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import CVBuilderPage from '../../components/CVBuilderPage';

const UserDashboard = () => {
  const [cvData, setCvData] = useState(null);
    const token = Cookies.get("jwtToken");
    const userId = token ? jwtDecode(token).id : null;
  
    useEffect(() => {
      const fetchCVDetails = async () => {
        
        try {
          const response = await getCVDetails(userId);
          setCvData(response);
        } catch (error) {
          console.error("Error fetching CV details:", error);
        }
      };
  
      fetchCVDetails();
    }, [userId]);
  
    const handleSelectionComplete = (filteredCVData) => {
      console.log("Filtered CV Data to pass to Resume Template:", filteredCVData);
      setCvData(filteredCVData);
  
    };
  return (
    <div className="cvb-dashboard-container">
      <Sidebar />
      <main className="cvb-dashboard-main">
        <Header />
        <Routes>
          <Route path="/" element={<h2>Welcome to your dashboard!</h2>} />
          <Route path="/my-cvs" element={<CVDetails />} />
          <Route path="/templates" element={<CVBuilderPage cvData={cvData} onSelectionComplete={handleSelectionComplete} />} />
          <Route path="/create-cv" element={<h2>Create CV</h2>} />
          <Route path="/details" element={<CVDetails cvData={cvData} />} />
          <Route path="/cv-builder" element={<CVBuilderPage cvData={cvData} />} />
        </Routes>
      </main>
    </div>
  );
};

export default UserDashboard;
