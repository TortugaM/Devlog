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
          <span className="skill-tag">JavaScript (ES6+)</span>
          <span className="skill-tag">HTML5</span>
          <span className="skill-tag">CSS3</span>
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
          <span className="skill-tag">MongoDB</span>
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="mb-xl">
        <h3 className="card-title mb-md">Tools & Platforms</h3>
        <div className="skill-tags">
          <span className="skill-tag">Git & GitHub</span>
          <span className="skill-tag">VS Code</span>
          <span className="skill-tag">npm/yarn</span>
          <span className="skill-tag">Vite</span>
          <span className="skill-tag">Postman</span>
          <span className="skill-tag">Chrome DevTools</span>
        </div>
      </div>

      {/* Currently Learning */}
      <div className="mb-xl">
        <h3 className="card-title mb-md">Currently Learning</h3>
        <div className="skill-tags">
          <span className="skill-tag">Next.js</span>
          <span className="skill-tag">GraphQL</span>
          <span className="skill-tag">Docker</span>
          <span className="skill-tag">AWS</span>
          <span className="skill-tag">Testing (Jest/Vitest)</span>
          <span className="skill-tag">CI/CD</span>
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
          <h4 className="card-title">Task Management App</h4>
          <p className="card-meta mb-md">React, Node.js, MongoDB</p>
          <p className="card-content">
            Full-stack application for managing tasks and projects. Includes user 
            authentication, real-time updates, and responsive design.
          </p>
        </div>

        <div className="card">
          <h4 className="card-title">Weather Dashboard</h4>
          <p className="card-meta mb-md">JavaScript, API Integration</p>
          <p className="card-content">
            Interactive weather application using external APIs. Features location 
            search, 5-day forecast, and dynamic UI updates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tech;
