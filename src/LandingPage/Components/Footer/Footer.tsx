import React from 'react';
import './Footer.css'; // Asegúrate de que el CSS esté en un archivo separado

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <div className="title">
                            <h4>La compañia</h4>
                            <div className="line"></div>
                        </div>
                        <ul>
                            <li><a href="#">Sobre nosotros</a></li>
                            <li><a href="#">Nuestros servicios</a></li>
                            <li><a href="#">Política de privacidad</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <div className="title">
                            <h4>¿Necesitas ayuda?</h4>
                            <div className="line"></div>
                        </div>
                        <ul>
                            <li><a href="#">Ayuda</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <div className="title">
                            <h4>Obtener aplicación móvil</h4>
                            <div className="line"></div>
                        </div>
                        <ul>
                            <li><a href="#">Enlace para descargar</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <div className="title">
                            <h4>Nuestras redes</h4>
                            <div className="line"></div>
                        </div>
                        <ul className="social-links">
                            <li><i className='bx bxl-instagram'></i></li>
                            <li><i className='bx bxl-facebook'></i></li>
                            <li><i className='bx bxl-twitter'></i></li>
                            <li><i className='bx bxl-linkedin'></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
