import React, { useEffect } from 'react';
import './SignUpSection.css';

import SignUpFigure from '../SignUpFigure/SignUpFigure';
import SignUpForm from '../SignUpForm/SignUpForm';

interface SignUpSectionProps {
  onRegisterClick?: () => void;
}

const SignUpSection: React.FC<SignUpSectionProps> = ({ onRegisterClick = () => {} }) => {
  useEffect(() => {
    // Aquí puedes poner lógica adicional si es necesario
  }, []);

  return (
    <section className="sign-up">
      <SignUpForm></SignUpForm>
      <SignUpFigure></SignUpFigure>
    </section>
  );
};

export default SignUpSection;
