import React from 'react';
import './index.css';
import Navbar from '../../components/navbar';
import InstallButton from '../../components/InstallButton';

const HomePage = () => {
  return (
    <div className="cvb-home-container">
        <Navbar />
      <header className="cvb-hero-section">
        <h1>Create Your Professional Resume in Minutes</h1>
        <p>Craft a standout CV with ease using modern, customizable templates.</p>
        <div>
        <button className="cvb-cta-btn">Start Building</button>
        <InstallButton />
        </div>
      </header>

      <section id="features" className="cvb-features-section">
        <h2>Why Use CV Builder?</h2>
        <div className="cvb-features-grid">
          <div className="cvb-feature-card">
            <h3>Easy to Use</h3>
            <p>Intuitive interface designed for everyone.</p>
          </div>
          <div className="cvb-feature-card">
            <h3>Professional Templates</h3>
            <p>Choose from elegant, modern layouts.</p>
          </div>
          <div className="cvb-feature-card">
            <h3>Smart Sections</h3>
            <p>Pre-designed sections for all your info.</p>
          </div>
          <div className="cvb-feature-card">
            <h3>Instant Preview & PDF</h3>
            <p>Preview in real time and download easily.</p>
          </div>
        </div>
      </section>

      <section id="how" className="cvb-how-section">
        <h2>How It Works</h2>
        <div className="cvb-steps">
          <div className="cvb-step"><span>1</span><p>Sign Up or Log In</p></div>
          <div className="cvb-step"><span>2</span><p>Fill Out Your Details</p></div>
          <div className="cvb-step"><span>3</span><p>Choose a Template</p></div>
          <div className="cvb-step"><span>4</span><p>Preview & Download</p></div>
        </div>
      </section>

      <footer className="cvb-footer">
        <p>Your first impression starts with your CV – make it count.</p>
        <button className="cvb-footer-btn">Build My Resume</button>
      </footer>
    </div>
  );
};

export default HomePage;
