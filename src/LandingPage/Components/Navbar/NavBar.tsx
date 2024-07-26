import React, { useEffect } from 'react';
import './NavBar.css'; // Asegúrate de que el CSS esté en un archivo separado

const NavBar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (header) {
                header.classList.toggle('sticky', window.scrollY > 0);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <a href="./index.html" className="logo-link">
                        <img src="LandingPage/storage/logos/header__logo.png" alt="Athlex" className="main-logo" />
                    </a>
                </div>
                <ul className="navlinks">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#quienes-somos">¿Quiénes somos?</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                    <li id="log-in">Ingresar</li>
                </ul>
                <button className="menu-btn expanded">☰</button>
            </nav>
        </header>
    );
};

export default NavBar;
