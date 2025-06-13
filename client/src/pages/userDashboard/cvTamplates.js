import "./index.css";

const CVTamplates = () => {
  return (
    <div className="cvb-templates-container">
      <h2>Templates</h2>
      <div className="cvb-templates-grid">
        <div className="cvb-template-card">
            <img src="/images/cvTamplates/cv1.png" alt="Template 1" className="cvb-template-image" />
            <button className="cvb-template-button">Use Template</button>
        </div>
        <div className="cvb-template-card">
            <img src="/images/cvTamplates/cv2.png" alt="Template 2" className="cvb-template-image" />
            <button className="cvb-template-button">Use Template</button>
        </div>
        <div className="cvb-template-card">
            <img src="/images/cvTamplates/cv3.png" alt="Template 3" className="cvb-template-image" />
            <button className="cvb-template-button">Use Template</button>
            </div>
        <div className="cvb-template-card">
            <img src="/images/cvTamplates/cv4.png" alt="Template 4" className="cvb-template-image" />
            <button className="cvb-template-button">Use Template</button>
            </div>
        <div className="cvb-template-card">
            <img src="/images/cvTamplates/cv5.png" alt="Template 5" className="cvb-template-image" />
            <button className="cvb-template-button">Use Template</button>
            </div>
      </div>
    </div>
  );
}

export default CVTamplates;