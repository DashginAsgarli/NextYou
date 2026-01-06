import React from 'react';
import './About.css';

function About ()  {
  return (
    <section className="about-section">
      <div className="about-container">
    
        <div className="about-visual">
          <div className="nexus-logo-orb">
            <div className="inner-circle"></div>
            <div className="pulse-ring"></div>
            <span className="logo-text">N</span>
            <span className="logo-text">Y</span>

          </div>
     
        </div>

        <div className="about-content">
          <span className="about-subtitle">BİZ KİMİK?</span>
          <p className="about-description">
            NextYou sadəcə bir platforma deyil, texnologiya, incəsənət və dilin kəsişdiyi rəqəmsal bir dünyadır. 
            Bizim missiyamız, kod yazmaqdan musiqi dinləməyə, yeni dillər kəşf etməkdən rəqəmsal kitabxanalara qədər 
            hər şeyi bir nöqtədə birləşdirərək intellektual inkişafı hər kəs üçün əlçatan və futuristik etməkdir.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <h4>100%</h4>
              <p>İnnovativlik</p>
            </div>
            <div className="stat-item">
              <h4>24/7</h4>
              <p>Dəstək</p>
            </div>
            <div className="stat-item">
              <h4>∞</h4>
              <p>Resurs</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;