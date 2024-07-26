import React from 'react';
import './Cards.css'; // Asegúrate de que el CSS esté en un archivo separado

const Cards = () => {
    return (
        <section className="card-section">
            <div className="card">
                <div className="icon">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/003/731/316/small_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg" alt="" />
                </div>
                <div className="card-title">
                    <h2>titulo</h2>
                </div>
                <div className="card-description">
                    <p>Soy la descripcion de la tarjeta lo ideas es que no sea tan larga pero puede ser mas y se va ajustando</p>
                </div>
            </div>
            <div className="card">
                <div className="icon">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/003/731/316/small_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg" alt="" />
                </div>
                <div className="card-title">
                    <h2>titulo</h2>
                </div>
                <div className="card-description">
                    <p>Soy la descripcion de la tarjeta lo ideas es que no sea tan larga pero puede ser mas y se va ajustando</p>
                </div>
            </div>
            <div className="card">
                <div className="icon">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/003/731/316/small_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg" alt="" />
                </div>
                <div className="card-title">
                    <h2>titulo</h2>
                </div>
                <div className="card-description">
                    <p>Soy la descripcion de la tarjeta lo ideas es que no sea tan larga pero puede ser mas y se va ajustando</p>
                </div>
            </div>
        </section>
    );
}

export default Cards;
