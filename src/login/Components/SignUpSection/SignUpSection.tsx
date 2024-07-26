import React, { useEffect } from 'react';
import './SignUpSection.css';
import SignUpFigure from '../SignUpFigure/SignUpFigure';
import SignUpForm from '../SignUpForm/SignUpForm';

interface SignUpSectionProps {
  onRegisterClick?: () => void;
}

const SignUpSection: React.FC<SignUpSectionProps> = ({ onRegisterClick = () => {} }) => {
  useEffect(() => {
    // Any side effects you want to handle
  }, []);

  return (
    <section className="sign-up">
      <SignUpForm onLogin={onRegisterClick} />
      <SignUpFigure />
    </section>
  );
};

export default SignUpSection;
