import { LitElement, html, css } from 'lit-element';

export class TextImage extends LitElement {

    static styles = css`

        :host {
            display: block;
            background: #fff;
            position: relative
        }

        .blue {
            background: #d4edfc;
        }

        .blue .links {
            display: none;
        }

        .blue .subtitle {
            color: #121212;
        }

        .container {
            width: 1176px;
            margin-left: auto;
            margin-right: auto;
            max-width: 100%;
        }

        .textImage-block {
            display: flex;
            justify-content: space-between; 
        }

        h1 {
            font-weight: 700;
            margin-bottom: 16px;
            font-size: 45px;
            line-height: 48px;
            color: rgb(0, 68, 129);
            margin-top: 0px;
            line-height: 110%;
        }

        .subtitle {
            font-size: 15px;
            line-height: 24px;
            color: #5ac4c4;
            font-weight: 700;
            margin-top: 72px;
        }

        .textImage-info {
            width: 50%;
            padding-bottom: 80px;
        }
        
        .textImage-img {
            width: 50%;
            min-width: 50%;
            max-width: 50vw;
            position: absolute;
            right: 0;
            height: 100%;
            background-size: cover;
            background-position-y: -57px !important;   
            background-size: cover !important;
            background-repeat: no-repeat !important;
        } 

        .links {
            color: #1973b8;
            text-decoration: none;
            font-weight: 700;
        }

        .textImage-links {
            display: flex;
            width: 100%;
            margin-top: 40px;
            justify-content: flex-start;
            align-items: center;
            margin-top: 40px;
        }

        .feature {
            position: relative;
            list-style: none;
            margin-bottom: 10px;
        }

        .feature:before {
            content: "";
            position: absolute;
            left: -30px;
            transform: scaleY(1) rotate(0deg);
            background: url(./images/check-icon.png);
            width: 15px;
            height: 25px;
            background-size: contain;
            background-repeat: no-repeat;
            top: 6px;
        }

        .bold {
            font-weight: 700;
        }
    `;

    static get properties() {
        return {
            subtitle: { type: String },
            title: { type: String },
            features: { type: String },
            image: { type: String },
            text: { type: String },
            secondaryText: { type: String },
            class: { type: String },
            btnText: { type: String }
        }
    }

    constructor() {
        super();
    }

    paintFeatures() {
        if ( !this.features ) return ''
        let featuresList = this.features.split('-')
        return featuresList.map( item => {
            const clenSpaces = item.toLowerCase().trim()
            const formatedItem = clenSpaces.charAt(0).toUpperCase() + clenSpaces.slice(1)
            return html `<li class='feature'>${formatedItem}</li>`
        })
    }

    render() {
        return html`
            <div id="textImage" class=${this.class}>
                <div class="container">
                    <div class="textImage-block">
                        <div class="textImage-info">
                            <div class="textImage-text">
                                <p class="subtitle">${this.subtitle}</p>
                                <h1>${this.title}</h1>
                                <ul>${this.paintFeatures()}</ul>
                                <p>${this.text}</p>
                                <a class='links' href="#">Consulta condiciones</a>
                            </div>
                            <div class="textImage-links">
                                <btn-primary class='${this.class}' text=${this.btnText} url='www.prueba.com'></btn-primary>
                                <a class='links' href="#" class="links">Más informacion</a>
                            </div>
                            <p class='bold'>${this.secondaryText}</p>
                        </div>
                        <div class="textImage-img" style="background: url('./images/${this.image}.jpg')"></div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('text-image', TextImage);