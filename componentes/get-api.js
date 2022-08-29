import { LitElement, html } from 'lit-element';

export class GetApi extends LitElement {

    static get properties() {
        return {
            url: { type: String },
            method: { type: String }
        };
    }

    // Revisar ciclo de vida de los componentes en Lit 
    // firstUpdated : Equivale al hook, useEfect, en la primera carga
    // Cuando nuestro componentes este montado y todas las propiedades cargadas se ejecuta

    firstUpdated() {
        this.getData()
    }

    constructor() {
        super();
    }

    // Bubbles y Composed se utilizan para que el evento pueda subir de hijos a padres

    sendResponse(data) {
        this.dispatchEvent(new CustomEvent('ApiData', {
            detail: { data }, bubbles: true, composed: true
        }));
    }

    getData() {
        fetch(this.url, { method : this.method })
            .then( reponse => {
                return reponse.ok ? reponse.json() : Promise.reject( reponse ) })
            .then( data => this.sendResponse( data ))
            .catch( err => console.error( 'Ha ocurrido un error', err ))
    }

}

customElements.define('get-api', GetApi);