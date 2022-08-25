import { LitElement, html, css } from 'lit-element';

export class TextImage extends LitElement {

    static styles = css`
        :host {
            display: block;
            background: #fff;
            position: relative
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
            background-size: cover;
            min-width: 50%;
            max-width: 50vw;
            position: absolute;
            right: 0;
            height: 100%;
            background: url('./images/hero-desktop.jpg');
            background-position-y: -63px;   
            background-size: cover !important;
        } 

        .links {
            color: #1973b8;
            text-decoration: none;
            font-weight: 700;
        }

        .btn-green {
            font-size: 15px;
            line-height: 24px;
            will-change: background-position;
            background-size: 210% 100%;
            background-position: 99% center;
            background-repeat: no-repeat;
            -webkit-transition: background-position .66667s cubic-bezier(.24,.22,.31,1.07);
            transition: background-position .66667s cubic-bezier(.24,.22,.31,1.07);
            background-color: #028484;
            background-image: linear-gradient(100deg,#02a5a5 50%,#028484 50%);
            color: #fff;
            text-align: center;
            padding: 16px 32px;
            background-color: #028484;
            cursor: pointer;
            margin-right: 25px;
            text-decoration: none;
        }

        .btn-green:hover {
            background-position: 0 center;
        }

        .textImage-links {
            display: flex;
            width: 100%;
            margin-top: 40px;
            justify-content: flex-start;
            align-items: center;
            margin-top: 40px;
        }
    `;

    render() {
        return html`
            <div id="textImage">
                <div class="container">

                    <div class="textImage-block">

                        <div class="textImage-info">
                            <div class="textImage-text">
                                <p class="subtitle">Cuenta Online Sin Comisiones</p>
                                <h1>La cuenta sin comisiones y sin condiciones</h1>
                                <ul>
                                    <li>La cuenta que no te pide nada. Ni nómina, ni recibos. NADA.</li>
                                    <li>Y ahora, con el Plan Invita a un Amigo, podrás ganar hasta 350 € por traer a tus amigos a BBVA y ellos se podrán llevar 15 € cada uno.</li>
                                </ul>
                                <a class='links' href="#">Consulta condiciones</a>
                            </div>
                
                            <div class="textImage-links">
                                <a class='btn-green' href="#">Hazte cliente</a>
                                <a class='links' href="#" class="links">Más informacion</a>
                            </div>
                        </div>
                        
                        <div class="textImage-img"></div>

                    </div>

                </div>
            </div>
        `;
    }
}

customElements.define('text-image', TextImage);