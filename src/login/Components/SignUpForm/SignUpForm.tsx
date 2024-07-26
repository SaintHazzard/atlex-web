// SignUpForm.tsx
import React, { FormEvent } from 'react';
import './SignUpForm.css';
import { GoogleLogin } from '@react-oauth/google';

interface SignUpFormProps {
  onLogin?: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onLogin }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const playerFormData = Object.fromEntries(formData.entries());
    console.log(playerFormData);
  };

  const  responseMessage = ( response: any ) => { 
        console . log (response); 
    }; 
    const  errorMessage = ( error: any ) => { 
        console . log ("Hola"); 
    }; 

  const handleGoogleLogin = () => {
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <div className="player-sign-up-form">
      <form onSubmit={handleSubmit} className="sign-up__form" id="player-form">
        <div className="sign-up__header">
          <h1 className="sign-up__title">Registrarse</h1>
          <div className="sign-up__social-icons">
            <GoogleLogin onSuccess={responseMessage}  />
          </div>
        </div>
        <div className="sign-up__body">
          <div className="sign-up__input-group">
            <input required type="text" className="sign-up__input" placeholder="Nombres" id="name" name="name-input" />
            <input required type="text" className="sign-up__input" placeholder="Apellidos" id="lastname" name="lastname-input" />
          </div>
          <input required type="email" className="sign-up__input" placeholder="Correo Electrónico" id="email" name="email-input" />
          <input required type="password" pattern=".{6,}" className="sign-up__input" placeholder="Contraseña" id="password" name="password-input" />
          <input required type="password" className="sign-up__input" placeholder="Confirmar Contraseña" id="confirm-password" name="confirm-password-input" />
          <div className="sign-up__terms">
            <input required type="checkbox" id="acceptance" name="acceptance" className="sign-up__checkbox" />
            <label htmlFor="acceptance" className="sign-up__label">Aceptar Términos & Condiciones</label>
          </div>
          <div className="sign-up__actions">
            <button type="submit" className="sign-up__button">Crear Cuenta</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
