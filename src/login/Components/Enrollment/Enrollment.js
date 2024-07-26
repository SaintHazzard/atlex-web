export class Enrollment extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.showSignUpSection();
    }

    connectedCallback() {
        this.classList.add('fade-in');
        const elementsToAnimate = this.querySelectorAll('.rol, .mid-icon');
        elementsToAnimate.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('slide-in');
            }, index * 100); 
        });
    }
    async showSignUpSection() {
        const root = document.querySelector("#root");
        const playerRegisterBtn = document.querySelector("#player-register-btn")
        playerRegisterBtn.addEventListener("click", (e) => {
            root.innerHTML =` <signup-section></signup-section>`
        })
    }
    async render() {
        this.innerHTML = `
        <style>
      body,
      html {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: Arial, sans-serif;
        background-color: #1a1f25;
      }

      .container {
        position: relative;
        height: 100vh;
      }

      .section {
        position: absolute;
        width: 100%;
        height: 100%;
      }

      .right {
        background: linear-gradient(#c70d33 0%, #dd212e 50%, #c82318 100%);
        clip-path: polygon(
          50% 0%,
          49% 2.5%,
          48.1% 5%,
          47.5% 7.5%,
          47.4% 8%,
          47.2% 9%,
          47.05% 10%,
          46.8% 12.5%,
          46.6% 15%,
          46.4% 17.5%,
          46.2% 20%,
          46.1% 22.5%,
          46% 25%, /*Curva 1*/
          46.1% 27.5%,
          46.2% 30%,
          46.4% 32.5%,
          46.6% 35%,
          46.8% 37.5%,
          47.05% 40%,
          47.2% 41%,
          47.4% 42%,
          47.5% 42.5%,
          48.1% 45%,
          49% 47.5%,
          50% 50%, /* Curva 2 */
          51% 52.5%,
          51.9% 55%,
          52.5% 57.5%,
          52.6% 58%,
          52.8% 59%,
          52.95% 60%,
          53.2% 62.5%,
          53.4% 65%,
          53.6% 67.5%,
          53.8% 70%,
          53.9% 72.5%,
          54% 75%, /*Curva 3*/
          53.9% 77.5%,
          53.8% 80%,
          53.6% 82.5%,
          53.4% 85%,
          53.2% 87.5%,
          52.95% 90%,
          52.8% 91%,
          52.6% 92%,
          52.5% 92.5%,
          51.9% 95%,
          51% 97.5%,
          50% 100%, /*Curva 4*/
          100% 100%,
          100% 0%
        );
        z-index: 1;
      }

      .enroll {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        opacity: 1;
        transition: opacity 1s ease-in-out;
      }

      .fade-in {
        opacity: 0;
        animation: fadeIn 1s forwards;
      }

      .fade-out {
        animation: fadeOut 1s forwards;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      .slide-in {
        opacity: 0;
        transform: translateY(50px);
        animation: slideIn 1s forwards;
      }

      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .rol-selector {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
      }

      .rol {
        height: auto;
        display: grid;
        gap: 1.5rem;
        max-width: 300px;
      }

      .rol:hover {
        cursor: pointer;
      }

      .rol-icon {
        width: 250px;
        justify-self: center;
      }

      .rol-icon img {
        width: 100%;
        height: 100%;
        filter: drop-shadow(5px 5px 5px #222222);
      }

      .rol-title {
        width: 100%;
      }

      .rol-title h2 {
        text-align: center;
        font-size: 2.7rem;
        font-weight: 600;
      }

      .rol-description {
        width: 80%;
        place-self: center;
      }

      .rol-desciption p {
        width: 100%;
        text-align: justify;
      }

      .register-btn {
        width: 100%;
        display: grid;
        margin-bottom: 1rem;
      }

      .register-btn #player-register-btn {
        justify-self: center;
        border: 1.5px solid white;
        border-radius: 15px;
        background-color: transparent;
        padding: 0.5rem 2.24rem;
        font-size: 1rem;
        color: white;
      }

      .register-btn #player-register-btn:hover {
        background-color: rgba(255, 255, 255, 0.115);
        cursor: pointer;
      }

      .mid-icon {
        width: 400px;
      }

      .mid-icon img {
        width: 100%;
        height: 100%;
      }

      #log-in {
        display: none;
      }

      header {
        position: absolute !important;
      }
    </style>
        <nav-bar></nav-bar>

    <div class="container">
      <div class="section right"></div>
      <section class="enroll">
        <div class="rol-selector">
            <div class="rol">
                <div class="rol-icon">
                    <img src="./storage/icons/soccer-player.png" alt="No disp.">
                </div>
                <div class="rol-title">
                    <h2>Ser jugador</h2>
                </div>
                <div class="rol-description">
                    <p>Accede a grandes oportunidades nacionales e internacionales</p>
                </div>
                <div class="register-btn">
                    <button id="player-register-btn">Registrarme</button>
                </div>
            </div>
            <div class="mid-icon">
                <img src="./storage/icons/mid-icon-rol-selector.png" alt="">
            </div>
            <div class="rol">
                <div class="rol-icon">
                    <img src="./storage/icons/strategy.png" alt="">
                </div>
                <div class="rol-title">
                    <h2>Ser club</h2>
                </div>
                <div class="rol-description">
                    <p>Encuentra talentos de talla mundial</p>
                </div>
                <div class="register-btn">
                    <button id="player-register-btn">Registrarme</button>
                </div>
            </div>
        </div>
    </section>
    </div>
        `;
    }
}

customElements.define('enrollment-selector', Enrollment);
