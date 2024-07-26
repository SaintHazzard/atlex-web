export class SignUpSection extends HTMLElement {
    constructor() {
        super() 
        this.render()
    }

    async render() {
        this.innerHTML = ` 
<style>
    .sign-up {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
        background-color: #151515;
    }
</style>
<section class="sign-up">
    <player-sign-up-form player-sign-up-form></player-sign-up-form>
    <sign-up-figure></sign-up-figure>
</section>`
    }
}

customElements.define("signup-section", SignUpSection);