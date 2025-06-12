const MyCV = () => {
    return (
        <>
        

        {/* CV Cards */}
        <section className="cvb-cv-section">
          <h3>Your Resumes</h3>
          <div className="cvb-cv-grid">
            <div className="cvb-cv-card">
              <div className="cvb-cv-thumbnail">CV Preview</div>
              <div className="cvb-cv-meta">
                <p className="cvb-cv-title">Marketing Resume</p>
                <div className="cvb-cv-actions">
                  <button>Open</button>
                  <button>Download</button>
                </div>
              </div>
            </div>
            <div className="cvb-cv-card cvb-cv-add-new">
              <div>➕</div>
              <p>Create New CV</p>
            </div>
          </div>
        </section></>
    )
}


export default MyCV