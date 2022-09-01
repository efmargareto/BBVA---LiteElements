import { LitElement, html, css } from 'lit-element';
import './get-api';

export class PlaceHOlderApi extends LitElement {

    static styles = css`
        :host {
            display: block;
        }

        .container {
            width: 1176px;
            margin-left: auto;
            margin-right: auto;
            max-width: 100%;
            margin-bottom: 40px;
        }

        .album {
            width: 31%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
        }

        .albums-block {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .album_img {
            width: 250px;
            height: 100px;
            position: relative;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            border: 1px solid rgb(90, 196, 196);
            border-radius: 4px;
        }

        .album_id {
            position: absolute;
            top: 8px;
            left: 8px;
            color: rgb(2, 132, 132);
            font-size: 11px;
        }

        h2 {
            font-size: 36px;
            line-height: 40px;
            color: #121212;
            margin-bottom: 34px;
        }

        .title {
            font-size: 15px;
            line-height: 24px;
            color:#1973b8;
            text-align: left;
            text-decoration: none;
            display: block;
            font-weight: 700;
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
        this.numAlbums = 5
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
                        <div class='album_img' style='background: url(https://fakeimg.pl/250x100/f4f4f4)'>
                            <span class='album_id'>${album.id}</span>
                        </div>
                        <div class="album-info">
                            <p class='title'>${album.title}</p>
                        </div>
                    </div>
                `
            :  ''
        }
    )}
    
    render() {
        return html`
        <div class="container">
            <h2>Paint Api Data</h2>
            <get-api url='https://jsonplaceholder.typicode.com/photos'> method='GET'></get-api>
            <div class='albums-block'>
                ${this.paintAlbums()}       
            </div>
        </div>
        `;
    }
}

customElements.define('placeholder-api', PlaceHOlderApi);