import React, { useEffect, useState } from "react";
import CVModal from "../../components/CVModal";
import CVPreview from "../../components/CVPreview";
import { getCVDetails } from "../../api/cvDetailsApi";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const CVDetails = ({ cvData: propData }) => {
  const [cvData, setCvData] = useState(propData || null);
  const [loading, setLoading] = useState(!propData);

  const token = Cookies.get("jwtToken");
  const userId = token ? jwtDecode(token).id : null;

  useEffect(() => {
    if (!propData && userId) {
      const fetchCVData = async () => {
        try {
          const response = await getCVDetails(userId);
          setCvData(response);
        } catch (error) {
          console.error("Failed to fetch CV details:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchCVData();
    }
  }, [userId, propData]);

  if (loading) return <p>Loading CV...</p>;

  return (
    <div className="cvb-cv-details">
      <CVModal userId={userId} />
      {cvData ? (
        <CVPreview cvData={cvData} selectedTemplate={"cv"} />
      ) : (
        <p>No CV data available.</p>
      )}
    </div>
  );
};

export default CVDetails;
