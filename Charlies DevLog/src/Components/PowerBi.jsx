import React from 'react';

function PowerBi() {
  return (
    <div className="section" id="powerbi">
      <h2 className="section-title">PowerBI Resume</h2>
      <p className="section-subtitle">
        An interactive visualization of my professional experience and skills.
      </p>

      <div className="card">
        <div className="video-container" style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
          <iframe 
            title="Resume Power Bi" 
            src="https://app.powerbi.com/reportEmbed?reportId=84366654-077c-479c-9cf1-b76b06308587&autoAuth=true&ctid=88227c99-d157-4dbe-8e33-d8b3fcc29577" 
            frameBorder="0" 
            allowFullScreen={true}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default PowerBi;
