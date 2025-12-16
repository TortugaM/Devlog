import React from 'react';

function Tech() {
  return (
    <div className="section" id="tech">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        Technologies and tools I work with to build modern applications.
      </p>

      {/* Frontend Skills */}
      <div className="mb-xl">
        <h3 className="card-title mb-md">Frontend Development</h3>
        <div className="skill-tags">
          <span className="skill-tag">React</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">HTML5</span>
          <span className="skill-tag">CSS</span>
          <span className="skill-tag">TypeScript</span>
          <span className="skill-tag">Responsive Design</span>
        </div>
      </div>

      {/* Backend Skills */}
      <div className="mb-xl">
        <h3 className="card-title mb-md">Backend Development</h3>
        <div className="skill-tags">
          <span className="skill-tag">Node.js</span>
          <span className="skill-tag">Express</span>
          <span className="skill-tag">SQL</span>
          <span className="skill-tag">REST APIs</span>
          <span className="skill-tag">Postman</span>
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="mb-xl">
        <h3 className="card-title mb-md">Tools & Platforms</h3>
        <div className="skill-tags">
          <span className="skill-tag">Git & GitHub</span>
          <span className="skill-tag">VS Code</span>
          <span className="skill-tag">antigravity</span>
          <span className="skill-tag">Vite</span>
          <span className="skill-tag">Postman</span>
          <span className="skill-tag">Power Bi</span>
        </div>
      </div>

      {/* Currently Learning */}
      <div className="mb-xl">
        <h3 className="card-title mb-md">Currently Learning</h3>
        <div className="skill-tags">
          <span className="skill-tag">Next.js</span>
          <span className="skill-tag">Comp TIA</span>
          <span className="skill-tag">Azure</span>
          <span className="skill-tag">AWS</span>
          <span className="skill-tag">Prompting</span>
          <span className="skill-tag">AI</span>
        </div>
      </div>

      {/* Projects Section */}
      <h3 className="section-title mt-xl mb-lg">Featured Projects</h3>
      <div className="grid grid-2">
        <div className="card">
          <h4 className="card-title">Developer Portfolio</h4>
          <p className="card-meta mb-md">React, Vite, CSS</p>
          <p className="card-content">
            A modern, responsive portfolio website showcasing my work and skills. 
            Features dark mode, smooth animations, and clean design.
          </p>
        </div>

        <div className="card">
          <h4 className="card-title">Dash by Metis</h4>
          <p className="card-meta mb-md">React, Node.js, MongoDB</p>
          <p className="card-content">
            Full-stack application for collecting feedback from multiple sources in one place.
            App created for United Airlines and WINNER for C58. https://dash-by-metis.netlify.app/
          </p>
        </div>

        <div className="card">
          <h4 className="card-title">Resume BI</h4>
          <p className="card-meta mb-md">Power BI</p>
          <p className="card-content">
            Part of my resume interpreted in a power bi format. Something simple.
            Feel free to cheeckout the Power BI dashboard in the Dash by Metis project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tech;
