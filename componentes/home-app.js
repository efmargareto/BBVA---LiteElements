import { LitElement, html, css } from 'lit-element';

export class HomeApp extends LitElement {

    static styles = css`
        :host {
            display: block;
        }
        .container {
            width: 1176px;
            margin-left: auto;
            margin-right: auto;
            max-width: 100%;
        }
        h3, h1 {
            color: red;
        }
    `;

    static get properties() {
        return {
            urlSelected: {}
        }
    }

    constructor() {
        super(),
        this.urlSelected = 'personas'
    }

    urlChanged(e) {
        this.urlSelected = e.detail
    }

    render() {
        return html `
            <div id="home">
                <nav-bar urlSelected=${this.urlSelected} @change=${this.urlChanged}></nav-bar>
                ${this.urlSelected === 'personas'
                    ? html `
                        <h3>Hola desde personas</h3>
                        <text-image></text-image>
                    `
                    :  html `
                        <h3>Hola desde otro sitio</h3>
                        <h3>Hola mundo</h3>
                    `
                }
            </div>
        `;  
    }
}

customElements.define('home-app', HomeApp);