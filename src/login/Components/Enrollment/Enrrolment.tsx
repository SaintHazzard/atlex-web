import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Enrrolment.css'; // Verifica el nombre del archivo CSS

interface EnrollmentProps {
  onRegisterClick?: () => void;
}

const Enrollment: React.FC<EnrollmentProps> = ({ onRegisterClick = () => {} }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('.rol, .mid-icon');
    elementsToAnimate.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('slide-in');
      }, index * 100);
    });
  }, []);

  const handleRegisterClick = () => {
    onRegisterClick();
    navigate('/signup'); // Cambia la ruta a '/signup'
  };

  return (
    <div className="containerEnroll">
      <div className="section right"></div>
      <section className="enroll">
        <div className="rol-selector">
          <div className="rol">
            <div className="rol-icon">
              <img src={require('../../../assets/login/icons/soccer-player.png')} alt="No disp." />
            </div>
            <div className="rol-title">
              <h2>Ser jugador</h2>
            </div>
            <div className="rol-description">
              <p>Accede a grandes oportunidades nacionales e internacionales</p>
            </div>
            <div className="register-btn">
              <button id="player-register-btn" onClick={handleRegisterClick}>Registrarme</button>
            </div>
          </div>
          <div className="mid-icon">
            <img src={require('../../../assets/login/icons/mid-icon-rol-selector.png')} alt="" />
          </div>
          <div className="rol">
            <div className="rol-icon">
              <img src={require('../../../assets/login/icons/strategy.png')} alt="" />
            </div>
            <div className="rol-title">
              <h2>Ser club</h2>
            </div>
            <div className="rol-description">
              <p>Encuentra talentos de talla mundial</p>
            </div>
            <div className="register-btn">
              <button id="player-register-btn" onClick={handleRegisterClick}>Registrarme</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enrollment;
