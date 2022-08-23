import { LitElement, html } from "lit";


class NavBar extends LitElement {

    constructor() {
        super()
    }

    render() {
        return html `<h1>Hola mundo desde el navBar</h1>`;
    }

}

customElements.define('nav-bar', NavBar)