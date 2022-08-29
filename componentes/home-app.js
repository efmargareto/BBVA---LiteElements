import { LitElement, html, css } from 'lit-element';
import './get-api' 
import './placeholder-api'


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
                        <text-image 
                            subtitle='Cuenta Online Sin Comisiones'
                            title='La cuenta sin comisiones y sin condiciones'
                            features='La cuenta que no te pide nada. Ni nómina, ni recibos. NADA. - Y ahora, con el Plan Invita a un Amigo, podrás ganar hasta 350 € por traer a tus amigos a BBVA y ellos se podrán llevar 15 € cada uno.'
                            image='hero-desktop'
                            btnText='Hazte cliente'
                        ></text-image>
                        <placeholder-api></placeholder-api>
                    `
                    :  html `
                    <text-image 
                        subtitle='Cuentas para autónomos y empresas'
                        title='Nuevo banco, cero comisiones en servicios habituales'
                        text='Seas autónomo, pyme o empresa estrenar banco tiene muchas ventajas.'
                        image='hero-desktop-blue'
                        class='blue'
                        secondaryText='Cero comisiones durante los 12 primeros meses para autónomos y empresas. Y si tu empresa factura menos de 5 millones de €, tampoco pagarás comisiones después.'
                        btnText='Saber más'
                    ></text-image>
                    `
                }
            </div>
        `;  
    }
}

customElements.define('home-app', HomeApp);