import { LitElement, html, css } from 'lit-element';

export class TextImage extends LitElement {

    static styles = css`
        :host {
            display: block;
        }
    `;

    render() {
        return html`
            <div id="textImage">
                <div class="container">

                    <div class="textImage-info">
                        <div class="textImage-text">
                            <p class="subtitle"></p>
                            <h1>La cuenta sin comisiones si sin condiciones</h1>
                            <ul>
                                <li>La cuenta que no te pide nada. Ni nómina, ni recibos. NADA.</li>
                                <li>Y ahora, con el Plan Invita a un Amigo, podrás ganar hasta 350 € por traer a tus amigos a BBVA y ellos se podrán llevar 15 € cada uno.</li>
                            </ul>
                            <a href="#">Consulta condiciones</a>
                        </div>
            
                        <div class="textImage-links">
                            <a href="#">Hazte cliente</a>
                            <a href="#">Más informacion</a>
                        </div>
                    </div>
                    
                    <div class="textImage-img"></div>
                </div>
            </div>
        `;
    }
}

customElements.define('text-image', TextImage);