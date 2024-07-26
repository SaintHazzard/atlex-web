export class SignUpFigure extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    async render() {
        this.innerHTML = `
        <style>
    sign-up-figure{
        width: 35%;
    }    
    .figure {
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, #C70D33, #DD212E, #C82318);
        border-radius: 200px 0 0 200px;
        display: grid;
        place-items: center;
        animation: fadeIn 1s ease;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    .figure__header {
        width: 100%;
        display: grid;
        place-items: center;
        color: white;
    }

    .figure__header__title {
        font-size: 2.7rem;
    }

    .figure__header__description {
        font-size: 1rem;
        font-weight: 300;
    }
        </style>
        <div class="figure">
            <div class="figure__header">
                <h2 class="figure__header__title"> !Hola,
                    soñador !</h2>
                <p class="figure__header__description">Registrate y lucha por cumplir tus sueños </p>
            </div>
        </div>
        `
    }
}
customElements.define("sign-up-figure", SignUpFigure);