import React from 'react';

function Career() {
  return (
    <div className="section" id="career">
      <h2 className="section-title">Career Experience</h2>
      <p className="section-subtitle">
        My professional journey in software development and technology.
      </p>

      <div className="timeline">
        {/* Experience 1 */}
        <div className="timeline-item">
          <div className="card">
            <h3 className="card-title">Business Analyst</h3>
            <div className="card-subtitle">i.c Stars Chicago</div>
            <div className="card-meta">July 2025 - Present</div>
            <div className="card-content">
              <ul>
                <li>Assistes in maintaining web applications using React and Node.js</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                <li>Implemented responsive designs and optimized application performance</li>
                <li>Participated in code reviews and mentored junior developers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="timeline-item">
          <div className="card">
            <h3 className="card-title">Accounts Manager</h3>
            <div className="card-subtitle">Allstate</div>
            <div className="card-meta">2018 - Present</div>
            <div className="card-content">
              <ul>
                <li>Built responsive user interfaces using modern JavaScript frameworks</li>
                <li>Worked with RESTful APIs and integrated third-party services</li>
                <li>Debugged and resolved technical issues in production environments</li>
                <li>Contributed to agile development processes and sprint planning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="timeline-item">
          <div className="card">
            <h3 className="card-title">Accounts Manager</h3>
            <div className="card-subtitle">Allstate</div>
            <div className="card-meta">2018 - Present</div>
            <div className="card-content">
              <ul>
                <li>Built responsive user interfaces using modern JavaScript frameworks</li>
                <li>Worked with RESTful APIs and integrated third-party services</li>
                <li>Debugged and resolved technical issues in production environments</li>
                <li>Contributed to agile development processes and sprint planning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience 4 */}
        <div className="timeline-item">
          <div className="card">
            <h3 className="card-title">Lead Driver</h3>
            <div className="card-subtitle">Midwest Industrial Metals</div>
            <div className="card-meta">2023 - June 2025</div>
            <div className="card-content">
              <ul>
                <li>Assisted in developing web applications and internal tools</li>
                <li>Learned best practices in software development and version control</li>
                <li>Participated in daily standups and team collaboration sessions</li>
                <li>Gained hands-on experience with modern development workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
