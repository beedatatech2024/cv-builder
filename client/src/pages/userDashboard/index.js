import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import CVDetails from './cvDetails';
import { getCVDetails, getCVProgress } from '../../api/cvDetailsApi';
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import CVBuilderPage from '../../components/CVBuilderPage';
import Settings from './cvSettings';
import DashboardContent from './homePage';
import CVLoader from '../../components/Loader';

const UserDashboard = () => {
  const [cvData, setCvData] = useState(null);
   const [progress, setProgress] = useState(null);
    const token = Cookies.get("jwtToken");
    const userId = token ? jwtDecode(token).id : null;
  
  
    useEffect(() => {
      const fetchCVDetails = async () => {
        try {
          const detailsResponse = await getCVDetails(userId);
          const response = await getCVProgress(userId);
          setProgress(response.progress);
          setCvData(detailsResponse);
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
      {!cvData ? (
        <CVLoader />
      ) : (
        <>
          <Header userName={cvData?.personal?.fullName} />
          <Routes>
            {!progress ? <CVLoader /> : <Route path="/" element={<DashboardContent progress={progress}/>} />}
            <Route path="/my-cvs" element={<CVDetails />} />
            <Route path="/templates" element={<CVBuilderPage cvData={cvData} onSelectionComplete={handleSelectionComplete} />} />
            <Route path="/create-cv" element={<h2>Create CV</h2>} />
            <Route path="/details" element={<CVDetails cvData={cvData} />} />
            {!progress ? <CVLoader /> : <Route path="/cv-builder" element={<CVBuilderPage progress={progress} cvData={cvData} />} />}
            <Route path="/settings" element={<Settings cvData={cvData}/>} />
          </Routes>
        </>
      )}
    </main>
  </div>
  );
};

export default UserDashboard;
