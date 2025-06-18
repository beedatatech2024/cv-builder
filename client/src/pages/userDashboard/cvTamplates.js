
import { useState } from "react";
import "./index.css";

const CVTamplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const templateImages = [
    "cv1",
    "cv2",
    "cv3",
    "cv4",
    "cv5",
  ]

  switch (selectedTemplate) {
    case "cv1":
      window.location.href = "/dashboard/templates/cv1";
      break;
    case "cv2":
      window.location.href = "/dashboard/templates/cv2";
      break;
    case "cv3":
      window.location.href = "/dashboard/templates/cv3";
      break;
    case "cv4":
      window.location.href = "/dashboard/templates/cv4";
      break;
    case "cv5":
      window.location.href = "/dashboard/templates/cv5";
      break;
    default:
      break;
  }
  
  return (
    <div className="cvb-templates-container">
      <div className="cvb-templates-grid">
        {templateImages.map((image, index) => (
          <div key={index} className="cvb-template-card">
            <img src={`/images/cvTamplates/${image}.png`} alt={`Template ${index + 1}`} className="cvb-template-image" />
            <button onClick={() => setSelectedTemplate(image)} className="cvb-template-button">Use Template</button>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default CVTamplates;