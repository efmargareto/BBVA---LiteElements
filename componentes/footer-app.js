import { LitElement, html, css } from 'lit-element';

export class FooterApp extends LitElement {

    static styles = css`
        :host {
            display: block;
            background-color: rgb(7, 33, 70);
        }

        .logo {
            display: block;
            height: 40px;
            padding: 35px 0;
            margin: 0 auto;
        }
    `;

    render() {
        return html`
            <div class='container'>
                <img src="./images/logo-BBVA.svg" alt="logo" class='logo'>
            </div>
        
        `;
    }
}
customElements.define('footer-app', FooterApp);