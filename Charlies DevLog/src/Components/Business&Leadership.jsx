import React from 'react';

function BusinessLeadership() {
  return (
    <div className="section" id="business">
      <h2 className="section-title">Business & Leadership</h2>
      <p className="section-subtitle">
        My approach to leadership, collaboration, and professional development.
      </p>

      {/* Leadership Philosophy */}
      <div className="card mb-xl">
        <h3 className="card-title">Leadership Philosophy</h3>
        <p className="card-content">
          I believe in leading by example and fostering an environment of continuous 
          learning and growth. Effective leadership combines clear communication, 
          empathy, and the ability to empower team members to reach their full potential. 
          I strive to create collaborative spaces where innovation thrives and everyone 
          feels valued.
        </p>
      </div>

      {/* Key Competencies */}
      <h3 className="card-title mb-md">Key Competencies</h3>
      <div className="grid grid-3 mb-xl">
        <div className="card">
          <h4 className="card-subtitle mb-sm">Team Collaboration</h4>
          <p className="card-content">
            Working effectively with diverse teams to achieve common goals and deliver results.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">Project Management</h4>
          <p className="card-content">
            Planning, organizing, and executing projects from conception to completion.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">Communication</h4>
          <p className="card-content">
            Clear and effective communication across technical and non-technical stakeholders.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">Problem Solving</h4>
          <p className="card-content">
            Analytical thinking and creative approaches to overcome challenges and obstacles.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">Strategic Thinking</h4>
          <p className="card-content">
            Long-term planning and decision-making aligned with organizational objectives.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">Mentoring</h4>
          <p className="card-content">
            Guiding and supporting others in their professional growth and skill development.
          </p>
        </div>
      </div>

      {/* Initiatives & Projects */}
      <h3 className="card-title mb-md">Leadership Initiatives</h3>
      <div className="grid grid-2">
        <div className="card">
          <h4 className="card-title">Code Review Program</h4>
          <p className="card-meta mb-sm">Team Initiative</p>
          <p className="card-content">
            Established a structured code review process that improved code quality 
            and knowledge sharing across the development team.
          </p>
        </div>

        <div className="card">
          <h4 className="card-title">Onboarding Mentor</h4>
          <p className="card-meta mb-sm">Mentorship Role</p>
          <p className="card-content">
            Mentored new team members through their onboarding process, helping them 
            integrate into the team and understand our development workflows.
          </p>
        </div>

        <div className="card">
          <h4 className="card-title">Tech Talk Series</h4>
          <p className="card-meta mb-sm">Knowledge Sharing</p>
          <p className="card-content">
            Organized and presented technical talks on modern development practices 
            and emerging technologies to promote continuous learning.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BusinessLeadership;
