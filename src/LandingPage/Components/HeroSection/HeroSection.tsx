import React from 'react';
import './HeroSection.css'; // Asegúrate de que el CSS esté en un archivo separado

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="text">
                <h2>Descubre el Futuro del Fútbol</h2>
                <p>Sube tus videos y muestra tu talento al mundo</p>
                <br />
                <button id="get-started">
                    <a href="./Login/register.html">Empezar ahora</a>
                </button>
            </div>
        </div>
    );
}

export default HeroSection;
