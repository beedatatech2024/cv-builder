
import "./index.css";

const CVTamplates = ({onSelectTemplate}) => {
  const templateImages = [
    "cv",
    "cv1",
    "cv2",
    "cv3",
    "cv4",
    "cv5",
  ]
  
  return (
    <div className="cvb-templates-container">
      <div className="cvb-templates-grid">
        {templateImages.map((image, index) => (
          <div key={index} className="cvb-template-card">
            <img src={`/images/cvTamplates/${image}.png`} alt={`Template ${index}`} className="cvb-template-image" />
            <button onClick={() => onSelectTemplate(image)} className="cvb-template-button">Use Template</button>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default CVTamplates;