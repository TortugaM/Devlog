import React from 'react';

function Wellness() {
  return (
    <div className="section" id="wellness">
      <h2 className="section-title">Wellness & Interests</h2>
      <p className="section-subtitle">
        Maintaining balance and pursuing passions outside of work.
      </p>

      {/* Wellness Practices */}
      <h3 className="card-title mb-md">Wellness Practices</h3>
      <div className="grid grid-2 mb-xl">
        <div className="card">
          <h4 className="card-subtitle mb-sm">💪 Physical Fitness</h4>
          <p className="card-content">
            Regular exercise routine including strength training and cardio to maintain 
            physical health and energy levels.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">🧘 Mindfulness</h4>
          <p className="card-content">
            Daily meditation and mindfulness practices to reduce stress and improve 
            focus and mental clarity.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">📚 Continuous Learning</h4>
          <p className="card-content">
            Reading books, taking courses, and staying updated with industry trends 
            to grow both personally and professionally.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">😴 Rest & Recovery</h4>
          <p className="card-content">
            Prioritizing quality sleep and regular breaks to maintain productivity 
            and prevent burnout.
          </p>
        </div>
      </div>

      {/* Hobbies & Interests */}
      <h3 className="card-title mb-md">Hobbies & Interests</h3>
      <div className="grid grid-3 mb-xl">
        <div className="card">
          <h4 className="card-subtitle mb-sm">📸 Sports</h4>
          <p className="card-content">
            I love to play ALL sports! I have played everything from water polo to chess.
            Sports have been a great way to stay healthy and meet new people. 
            Fun Fact - I considered going pro in pickleball 1.5 years ago.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">🥾 Hiking</h4>
          <p className="card-content">
            Exploring nature trails and enjoying outdoor adventures on weekends.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">🎵 Music</h4>
          <p className="card-content">
            Listening to various genres and discovering new artists across different platforms.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">🍳 Cooking</h4>
          <p className="card-content">
            Experimenting with new recipes and cuisines as a creative outlet.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">✈️ Travel</h4>
          <p className="card-content">
            Exploring new places and experiencing different cultures when possible.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm">🎮 Gaming</h4>
          <p className="card-content">
            Enjoying video games as a way to unwind and connect with friends.
          </p>
        </div>
      </div>

      {/* Goals */}
      <div className="card">
        <h3 className="card-title">Personal & Professional Goals</h3>
        <div className="card-content">
          <ul>
            <li><strong>Professional:</strong> Advance my skills in the BA field and contribute to meaningful projects</li>
            <li><strong>Learning:</strong> Obtain my Bachelors Degree</li>
            <li><strong>Health:</strong> Maintain a consistent fitness routine and improve overall wellness</li>
            <li><strong>Personal:</strong> Travel to at least one new place this upcoming year and actually document my experience.</li>
            <li><strong>Community:</strong> Give back through mentoring and sharing knowledge with aspiring tech fellows</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Wellness;
