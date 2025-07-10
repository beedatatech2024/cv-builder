import React, { useState } from "react";
import "./index.css";

const questions = [
  "Tell me about yourself.",
  "Why do you want this job?",
  "What are your strengths?",
  "Describe a challenge you faced and how you overcame it.",
  "Where do you see yourself in 5 years?",
];

export default function InterviewPage() {
  const [current, setCurrent] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setIsRecording(false);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="interview-page-container">
      <nav className="interview-navbar">
        <div className="interview-logo">Mockup Interview</div>
        <ul className="interview-nav-links">
          <li>Home</li>
          <li>Interview</li>
          <li>Logout</li>
        </ul>
      </nav>

      <div className="interview-main">
        <div className="interview-box">
          <h2 className="interview-question-title">Interview Question</h2>
          <div className="interview-question-text">
            {questions[current]}
          </div>

          <div className="interview-controls">
            <button
              onClick={toggleRecording}
              className={`interview-record-btn ${isRecording ? "recording-active" : ""}`}
            >
              🎤 {isRecording ? "Recording..." : "Start Recording"}
            </button>

            <button
              onClick={handleNext}
              className="interview-next-btn"
              disabled={current === questions.length - 1}
            >
              Next ➡️
            </button>
          </div>

          {isRecording && (
            <div className="interview-waveform">
              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
              <div className="bar bar3"></div>
              <div className="bar bar4"></div>
              <div className="bar bar5"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
