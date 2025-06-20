import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import CVDetails from './cvDetails';
import { getCVDetails } from '../../api/cvDetailsApi';
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import CVBuilderPage from '../../components/CVBuilderPage';
import Settings from './cvSettings';

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
      setCvData(filteredCVData);
  
    };
  return (
    <div className="cvb-dashboard-container">
      <Sidebar />
      <main className="cvb-dashboard-main">
        <Header userName={cvData?.personal?.fullName} />
        <Routes>
          
          <Route path="/" element={<h2>Welcome to your dashboard!</h2>} />
          <Route path="/my-cvs" element={<CVDetails />} />
          {cvData && <Route path="/templates" element={<CVBuilderPage cvData={cvData} onSelectionComplete={handleSelectionComplete} />} />}
          <Route path="/create-cv" element={<h2>Create CV</h2>} />
          {cvData && <Route path="/details" element={<CVDetails cvData={cvData} />} />}
          {cvData && <Route path="/cv-builder" element={<CVBuilderPage cvData={cvData} />} />}
          {cvData && <Route path="/settings" element={<Settings cvData={cvData}/>} />}
        </Routes>
      </main>
    </div>
  );
};

export default UserDashboard;
