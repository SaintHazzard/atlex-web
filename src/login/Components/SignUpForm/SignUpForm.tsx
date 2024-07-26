// SignUpForm.tsx
import React, { useRef, useEffect } from 'react';

interface SignUpFormProps {
  onLogin: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onLogin }) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const formElement = formRef.current;
    if (formElement) {
      formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(formElement);
        const playerFormData = Object.fromEntries(formData.entries());
        console.log(playerFormData);
      });
    }
    return () => {
      if (formElement) {
        formElement.removeEventListener('submit', () => {});
      }
    };
  }, []);

  return (
    <div className="sign-up-form-container">
      <style>
        {`
          .sign-up__form {
            max-width: 500px;
            display: flex;
            flex-direction: column;
            border-radius: 15px;
            padding: 2rem;
            color: white;
            border: 1px solid rgb(52, 52, 52);
            box-shadow: 5px 5px 15px #000000bb;
            animation: slideIn 0.5s ease-out;
          }

          @keyframes slideIn {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .sign-up__header {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            justify-content: center;
          }

          .sign-up__title {
            font-size: 2.7rem;
          }

          .sign-up__social-icons {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 2rem;
          }

          .bx {
            font-size: 40px;
          }

          .sign-up__body {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin: 1rem 0;
          }

          .sign-up__input {
            border-radius: 5px;
            padding: 1rem;
            border: none;
            margin: 0 .5rem;
          }

          .sign-up__input:focus {
            border: none;
            outline: none;
          }

          .sign-up__terms {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
          }

          .sign-up__actions {
            width: 100%;
            display: grid;
            place-items: center;
          }

          .sign-up__button {
            border: none;
            padding: 1rem 2rem;
            border-radius: 5px;
            background-color: #E2CA60;
            font-weight: 600;
            transition: 300ms ease;
          }

          .sign-up__button:hover {
            background-color: #e8d271;
            transition: 300ms ease;
            cursor: pointer;
          }
        `}
      </style>
      <form ref={formRef} className="sign-up__form">
        <div className="sign-up__header">
          <h1 className="sign-up__title">Registrarse</h1>
          <div className="sign-up__social-icons">
            <a href="" className="sign-up__social-icon sign-up__social-icon--facebook">
              <i className='bx bxl-facebook-circle' style={{ color: '#195df6' }}></i>
            </a>
            <a href="" className="sign-up__social-icon sign-up__social-icon--google">
              <i className='bx bxl-google' style={{ color: '#bfbfbf' }}></i>
            </a>
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
            <button type="button" className="sign-up__button" onClick={onLogin}>⚡ Sign in with Google</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
