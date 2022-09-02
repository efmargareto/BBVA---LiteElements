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
            urlSelected: {},
            success: { type: Boolean}
        }
    }

    constructor() {
        super(),
        this.urlSelected = 'personas'
        this.success = false
    }

    urlChanged(e) {
        this.urlSelected = e.detail
    }

    startApp() {
        this.success = true
    }

    render() {
        return html `
            <div id="home">
                ${ this.success 
                    ? html `
                        <nav-bar urlSelected=${this.urlSelected} @change=${this.urlChanged}></nav-bar>
                        ${this.urlSelected === 'personas'
                            ? html `
                                <text-image 
                                    subtitle='Cuenta Online Sin Comisiones'
                                    title='La cuenta sin comisiones y sin condiciones'
                                    features='La cuenta que no te pide nada. Ni nómina, ni recibos. NADA. - Y ahora, con el Plan Invita a un Amigo, podrás ganar hasta 350 € por traer a tus amigos a BBVA y ellos se podrán llevar 15 € cada uno.'
                                    image='hero-desktop.jpg'
                                    btnText='Hazte cliente'
                                ></text-image>

                                <placeholder-api numAlbums='5'></placeholder-api>

                                <text-button 
                                    title='Más de 1 millón de clientes disfrutan de una Cuenta Online sin comisiones ni condiciones'>
                                </text-button>

                                <text-image 
                                    subtitle='Cuenta Online Sin Comisiones'
                                    class='small-img'
                                    title='Hazte cliente con la Cuenta Online Sin Comisiones'
                                    features='Sin comisión de administración y mantenimiento de la cuenta. 0 % TIN 0 % TAE. 
                                            - Sin comisión por emisión y mantenimiento de la tarjeta de débito. 
                                            - Sin comisión por retirar efectivo a débito en los más de 4.500 cajeros BBVA en España. 
                                            - Sin comisión por transferencias online en el Espacio Económico Europeo. 
                                            - Ábrela en menos de 10 minutos'
                                    image='section0.png'
                                    btnText='Hazte cliente'
                                ></text-image>
                            `
                            :  html `
                                <text-image 
                                    subtitle='Cuentas para autónomos y empresas'
                                    title='Nuevo banco, cero comisiones en servicios habituales'
                                    text='Seas autónomo, pyme o empresa estrenar banco tiene muchas ventajas.'
                                    image='hero-desktop-blue.jpg'
                                    class='blue'
                                    secondaryText='Cero comisiones durante los 12 primeros meses para autónomos y empresas. Y si tu empresa factura menos de 5 millones de €, tampoco pagarás comisiones después.'
                                    btnText='Saber más'
                                ></text-image>

                                <text-image 
                                    subtitle='Cuenta Online Sin Comisiones'
                                    class='small-img'
                                    title='Y llévate hasta 350 € con el Plan Invita a un Amigo'
                                    features='Hazte cliente con la Cuenta Online Sin Comisiones. 
                                            - Accede al área privada de cliente en "Mis promociones" 
                                            - Comparte tu código con amigos y familiares.'
                                    image='section1.svg'
                                    secondaryText='Para llevaros el premio, tus amigos tendrán que utilizar tu código al hacerse clientes y realizar una compra superior a 15 € con su nueva tarjeta BBVA.'
                                    btnText='Hazte cliente'
                                ></text-image>

                                <text-button 
                                    title='Más de 1 millón de clientes disfrutan de una Cuenta Online sin comisiones ni condiciones'>
                                </text-button>

                                <placeholder-api numAlbums='2'></placeholder-api>
                            `
                        }`
                    : html `<login-app @sign=${this.startApp}></login-app>`
                }

                <footer-app></footer-app>
            </div>
        `;  
    }
}

customElements.define('home-app', HomeApp);