import { LitElement, html } from 'lit-element';
import 'btn-primary'



export class TextButton extends LitElement {

    static styles = css`
        :host {
            display: block;
        }

        h2 {
            font-size: 36px;
            line-height: 40px; 
        }
        
        #text-block {
            padding: 64px 0;
            background: #f4f4f4;
        }
    `;

    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
        return {
            tilte: { type: String}
        };
    }

    render() {
        return html`
            <div class='container'>
                <div id='text-button'>
                    <h2>${this.title}</h2>
                    <btn-primary text='Hazte cliente' url='www.prueba.com'></btn-primary>
                </div>
            </div>
        `;
    }
}
customElements.define('text-button', TextButton);