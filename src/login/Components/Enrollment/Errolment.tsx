// Enrollment.tsx
import React, { useEffect } from 'react';
import './Enrollment.css'; // Asegúrate de importar el archivo CSS

interface EnrollmentProps {
  onRegisterClick: () => void;
}

const Enrollment: React.FC<EnrollmentProps> = ({ onRegisterClick }) => {
  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('.rol, .mid-icon');
    elementsToAnimate.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('slide-in');
      }, index * 100);
    });
  }, []);

  return (
    <div className="container">
      <div className="section right"></div>
      <section className="enroll">
        <div className="rol-selector">
          <div className="rol">
            <div className="rol-icon">
              <img src="./storage/icons/soccer-player.png" alt="No disp." />
            </div>
            <div className="rol-title">
              <h2>Ser jugador</h2>
            </div>
            <div className="rol-description">
              <p>Accede a grandes oportunidades nacionales e internacionales</p>
            </div>
            <div className="register-btn">
              <button id="player-register-btn" onClick={onRegisterClick}>Registrarme</button>
            </div>
          </div>
          <div className="mid-icon">
            <img src="./storage/icons/mid-icon-rol-selector.png" alt="" />
          </div>
          <div className="rol">
            <div className="rol-icon">
              <img src="./storage/icons/strategy.png" alt="" />
            </div>
            <div className="rol-title">
              <h2>Ser club</h2>
            </div>
            <div className="rol-description">
              <p>Encuentra talentos de talla mundial</p>
            </div>
            <div className="register-btn">
              <button id="player-register-btn" onClick={onRegisterClick}>Registrarme</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enrollment;
