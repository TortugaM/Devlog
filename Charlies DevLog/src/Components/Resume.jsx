import React from 'react';
import { jsPDF } from 'jspdf';

function Resume() {
  const downloadResume = () => {
    const doc = new jsPDF();
    
    // Set font sizes
    const titleSize = 20;
    const headingSize = 14;
    const subheadingSize = 12;
    const bodySize = 10;
    
    let y = 20; // Starting Y position
    
    // Title
    doc.setFontSize(titleSize);
    doc.setFont(undefined, 'bold');
    doc.text('CHARLIE MEJIA', 105, y, { align: 'center' });
    y += 8;
    
    doc.setFontSize(subheadingSize);
    doc.setFont(undefined, 'normal');
    doc.text('Developer & Business Analyst', 105, y, { align: 'center' });
    y += 15;
    
    // Professional Summary
    doc.setFontSize(headingSize);
    doc.setFont(undefined, 'bold');
    doc.text('PROFESSIONAL SUMMARY', 20, y);
    y += 7;
    
    doc.setFontSize(bodySize);
    doc.setFont(undefined, 'normal');
    const summary = 'Passionate professional with experience in business analysis and technology. Strong problem-solving skills and commitment to continuous learning. Currently completing training at i.c. Stars with focus on technology, business analysis, and leadership development.';
    const splitSummary = doc.splitTextToSize(summary, 170);
    doc.text(splitSummary, 20, y);
    y += splitSummary.length * 5 + 10;
    
    // Experience
    doc.setFontSize(headingSize);
    doc.setFont(undefined, 'bold');
    doc.text('EXPERIENCE', 20, y);
    y += 7;
    
    // Job 1
    doc.setFontSize(subheadingSize);
    doc.setFont(undefined, 'bold');
    doc.text('Business Analyst', 20, y);
    doc.setFont(undefined, 'normal');
    doc.text('July 2025 - Present', 150, y);
    y += 5;
    doc.setFontSize(bodySize);
    doc.setFont(undefined, 'italic');
    doc.text('i.c Stars Chicago', 20, y);
    y += 5;
    doc.setFont(undefined, 'normal');
    doc.text('• Assists in maintaining web applications using React and Node.js', 20, y);
    y += 5;
    doc.text('• Collaborated with cross-functional teams to deliver solutions', 20, y);
    y += 5;
    doc.text('• Implemented responsive designs and optimized performance', 20, y);
    y += 10;
    
    // Job 2
    doc.setFontSize(subheadingSize);
    doc.setFont(undefined, 'bold');
    doc.text('Accounts Manager', 20, y);
    doc.setFont(undefined, 'normal');
    doc.text('2018 - Present', 150, y);
    y += 5;
    doc.setFontSize(bodySize);
    doc.setFont(undefined, 'italic');
    doc.text('Allstate', 20, y);
    y += 5;
    doc.setFont(undefined, 'normal');
    doc.text('• Built responsive user interfaces using modern frameworks', 20, y);
    y += 5;
    doc.text('• Worked with RESTful APIs and third-party services', 20, y);
    y += 10;
    
    // Education
    doc.setFontSize(headingSize);
    doc.setFont(undefined, 'bold');
    doc.text('EDUCATION', 20, y);
    y += 7;
    
    doc.setFontSize(subheadingSize);
    doc.text('i.c. Stars Internship Program', 20, y);
    doc.setFont(undefined, 'normal');
    doc.text('2023 - 2024', 150, y);
    y += 5;
    doc.setFontSize(bodySize);
    doc.text('Technology Leadership Training', 20, y);
    y += 10;
    
    // Skills
    doc.setFontSize(headingSize);
    doc.setFont(undefined, 'bold');
    doc.text('TECHNICAL SKILLS', 20, y);
    y += 7;
    
    doc.setFontSize(bodySize);
    doc.setFont(undefined, 'normal');
    doc.text('Frontend: React, JavaScript, HTML/CSS, TypeScript', 20, y);
    y += 5;
    doc.text('Backend: Node.js, Express, SQL, REST APIs, MongoDB', 20, y);
    y += 5;
    doc.text('Tools: Git, VS Code, npm, Vite', 20, y);
    y += 5;
    doc.text('Soft Skills: Communication, Teamwork, Problem Solving, Adaptability', 20, y);
    
    // Save the PDF
    doc.save('Charlie_Mejia_Resume.pdf');
  };

  return (
    <div className="section" id="resume">
      <h2 className="section-title">Resume</h2>
      <p className="section-subtitle">
        A comprehensive overview of my education, experience, and skills.
      </p>

      {/* Professional Summary */}
      <div className="card mb-xl">
        <h3 className="card-title">Professional Summary</h3>
        <p className="card-content">
          Passionate software developer with experience in building modern web applications 
          using React, JavaScript, and Node.js. Strong problem-solving skills and a commitment 
          to writing clean, maintainable code. Eager to contribute to innovative projects and 
          continue growing as a developer. Experienced in collaborating with cross-functional 
          teams and delivering high-quality solutions.
        </p>
      </div>

      {/* Education */}
      <h3 className="card-title mb-md">Education</h3>
      <div className="mb-xl">
        <div className="card mb-md">
          <h4 className="card-title">i.c. Stars Internship Program</h4>
          <div className="card-subtitle">Technology Leadership Training</div>
          <div className="card-meta mb-sm">2023 - 2024</div>
          <p className="card-content">
            Intensive technology and leadership training program focused on full-stack 
            development, business acumen, and professional skills. Completed hands-on 
            projects and real-world client work.
          </p>
        </div>

        <div className="card mb-md">
          <h4 className="card-title">Bachelor of Science in Computer Science</h4>
          <div className="card-subtitle">University Name</div>
          <div className="card-meta mb-sm">2019 - 2023</div>
          <p className="card-content">
            Studied computer science fundamentals including algorithms, data structures, 
            software engineering, and web development. Participated in hackathons and 
            coding competitions.
          </p>
        </div>
      </div>

      {/* Experience */}
      <h3 className="card-title mb-md">Professional Experience</h3>
      <div className="mb-xl">
        <div className="card mb-md">
          <h4 className="card-title">Software Developer</h4>
          <div className="card-subtitle">Tech Company Inc.</div>
          <div className="card-meta mb-sm">January 2024 - Present</div>
          <div className="card-content">
            <ul>
              <li>Developed and maintained web applications using React and Node.js</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
              <li>Implemented responsive designs and optimized application performance</li>
              <li>Participated in code reviews and mentored junior developers</li>
            </ul>
          </div>
        </div>

        <div className="card mb-md">
          <h4 className="card-title">Junior Developer</h4>
          <div className="card-subtitle">Startup Solutions LLC</div>
          <div className="card-meta mb-sm">June 2023 - December 2023</div>
          <div className="card-content">
            <ul>
              <li>Built responsive user interfaces using modern JavaScript frameworks</li>
              <li>Worked with RESTful APIs and integrated third-party services</li>
              <li>Debugged and resolved technical issues in production environments</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills */}
      <h3 className="card-title mb-md">Technical Skills</h3>
      <div className="grid grid-2 mb-xl">
        <div className="card">
          <h4 className="card-subtitle mb-sm">Frontend</h4>
          <div className="skill-tags">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">HTML/CSS</span>
            <span className="skill-tag">TypeScript</span>
          </div>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">Backend</h4>
          <div className="skill-tags">
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">REST APIs</span>
          </div>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">Tools</h4>
          <div className="skill-tags">
            <span className="skill-tag">Git</span>
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag">npm</span>
            <span className="skill-tag">Vite</span>
          </div>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">Soft Skills</h4>
          <div className="skill-tags">
            <span className="skill-tag">Communication</span>
            <span className="skill-tag">Teamwork</span>
            <span className="skill-tag">Problem Solving</span>
            <span className="skill-tag">Adaptability</span>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="text-center">
        <button className="btn btn-primary" onClick={downloadResume}>
          📄 Download Resume (PDF)
        </button>
      </div>
    </div>
  );
}

export default Resume;
