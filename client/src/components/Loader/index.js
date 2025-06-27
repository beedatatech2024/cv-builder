// src/components/CVLoader.jsx
import React from 'react';
import './index.css';

const CVLoader = () => {
  return (
    <div className="cv-loader-wrapper">
      <div className="cv-loader">
        <div className="cv-page"></div>
        <div className="cv-page"></div>
        <div className="cv-page"></div>
        <span className="cv-loader-text">Loading Please Wait...</span>
      </div>
    </div>
  );
};

export default CVLoader;
