import React from "react";
import { Dumbbell, Brain, BookOpen, Moon, Camera, Mountain, Music, Utensils, Plane, Gamepad2 } from "lucide-react";

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
          <h4 className="card-subtitle mb-sm" style={{ display: 'flex', alignItems: 'center' }}>
            <Dumbbell size={20} color="var(--accent)" style={{ marginRight: '8px' }} /> Physical Fitness
          </h4>
          <p className="card-content">
            Regular exercise routine including strength training and cardio to maintain 
            physical health and energy levels.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm" style={{ display: 'flex', alignItems: 'center' }}>
            <Brain size={20} color="var(--accent)" style={{ marginRight: '8px' }} /> Mindfulness
          </h4>
          <p className="card-content">
            Daily meditation and mindfulness practices to reduce stress and improve 
            focus and mental clarity.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm" style={{ display: 'flex', alignItems: 'center' }}>
            <BookOpen size={20} color="var(--accent)" style={{ marginRight: '8px' }} /> Continuous Learning
          </h4>
          <p className="card-content">
            Reading books, taking courses, and staying updated with industry trends 
            to grow both personally and professionally.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm" style={{ display: 'flex', alignItems: 'center' }}>
            <Moon size={20} color="var(--accent)" style={{ marginRight: '8px' }} /> Rest & Recovery
          </h4>
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
          <h4 className="card-subtitle mb-sm" style={{ display: 'flex', alignItems: 'center' }}>
            <Camera size={20} color="var(--accent)" style={{ marginRight: '8px' }} /> Sports
          </h4>
          <p className="card-content">
            I love to play ALL sports! I have played everything from water polo to chess.
            Sports have been a great way to stay healthy and meet new people. 
            Fun Fact - I considered going pro in pickleball 1.5 years ago.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm" style={{ display: 'flex', alignItems: 'center' }}>
            <Mountain size={20} color="var(--accent)" style={{ marginRight: '8px' }} /> Acquiring Certs
          </h4>
          <p className="card-content">
            Ever since starting i.c. Stars I have been making a strenuous effort to accelerate my growth through certificats.
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm" style={{ display: 'flex', alignItems: 'center' }}>
            <Music size={20} color="var(--accent)" style={{ marginRight: '8px' }} /> Music
          </h4>
          <p className="card-content">
            Listening to various genres, I feel like music connects us all and allows us to share deep thoughts and emotions in just a few minutes. 
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm" style={{ display: 'flex', alignItems: 'center' }}>
            <Utensils size={20} color="var(--accent)" style={{ marginRight: '8px' }} /> Cooking
          </h4>
          <p className="card-content">
            Experimenting with new recipes and getting a low of help from my mom; not to be bias but shes kind of a pro. 
          </p>
        </div>

        <div className="card">
          <h4 className="card-subtitle mb-sm" style={{ display: 'flex', alignItems: 'center' }}>
            <Plane size={20} color="var(--accent)" style={{ marginRight: '8px' }} /> Travel
          </h4>
          <p className="card-content">
            I love traveling ever since I was over the road as a truck driver.
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
