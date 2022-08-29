import { LitElement, html, css } from 'lit-element';
import './get-api';

export class PlaceHOlderApi extends LitElement {

    static styles = css`
        :host {
            display: block;
        }
    `;

    static get properties() {
        return {
            albums: {},
            numAlbums: { type: Number}
        };
    }

    constructor() {
        super()
        this.numAlbums = 2
        this.albums = []
        this.addEventListener('ApiData', event => {
            this.albums = event.detail.data
        }) 
    }

    paintAlbums() {
        return this.albums.map( (album, index) => {
            return index <= this.numAlbums ?
                html `
                    <div class="album">
                        <p>Albums</p>
                        <img src="https://fakeimg.pl/250x100/ff0000/">
                        <div class="album-info">
                            <p>${album.title}</p>
                            <p>${album.id}</p>
                           
                        </div>
                    </div>
                `
            :  ''
        }
    )}
    
    render() {
        return html`
            <h1>Hola desde placeholder api</h1>
            <get-api url='https://jsonplaceholder.typicode.com/photos'> method='GET'></get-api>
            ${this.paintAlbums()}       
        `;
    }
}

customElements.define('placeholder-api', PlaceHOlderApi);