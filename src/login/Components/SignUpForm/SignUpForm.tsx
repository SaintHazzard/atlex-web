import React, { FormEvent, useState, useEffect } from 'react';
import './SignUpForm.css';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

interface SignUpFormProps {
  onLogin?: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onLogin }) => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const playerFormData = Object.fromEntries(formData.entries());
    console.log(playerFormData);
  };

  const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

  const handleLoginSuccess = (response: any) => {
    setUser(response);
  };

  const handleLoginError = () => {
    console.log('Login Error');
  };

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
          setProfile(res.data);
          if (onLogin) {
            onLogin();
          }
        })
        .catch((err) => console.log(err));
    }
  }, [user, onLogin]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div className="player-sign-up-form">
      <form onSubmit={handleSubmit} className="sign-up__form" id="player-form">
        <div className="sign-up__header">
          <h1 className="sign-up__title">Registrarse</h1>
          <div className="sign-up__social-icons">
            <button id='btn-google' onClick={() => login()}><i className='bx bxl-google' style={{ color: '#bfbfbf' }}></i></button>
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
      {profile && (
        <div className="sign-up__profile">
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <button onClick={logOut}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
