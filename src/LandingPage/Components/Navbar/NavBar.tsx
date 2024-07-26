// NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Ensure CSS file is imported

const NavBar: React.FC = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <img src={require("../../storage/logos/header__logo.png")} className="main-logo"/>
                    </Link>
                </div>
                <ul className="navlinks">
                    <li><Link to="#inicio">Inicio</Link></li>
                    <li><Link to="#quienes-somos">¿Quiénes somos?</Link></li>
                    <li><Link to="#servicios">Servicios</Link></li>
                    <li><Link to="#contacto">Contacto</Link></li>
                    <li id='log-in'><Link to="/enrollment">Ingresar</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
