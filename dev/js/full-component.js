import { LitElement, html, css } from 'lit';

export class FullComponent extends LitElement {
    static styles = css `
        :host {
            display: inline-block;
            padding: 18px;
            background: lightgray;
        }

        .planet{
            color: var(--planet-color, blue);
        }
    `;

    static properties = {
        greeting : {},
        planet: {},
    };

    constructor(){
        super();
        this.greeting = 'Hello';
        this.planet = 'World';
    }

    render(){
        return html `
            <span @click=${this.togglePlanet}>
                ${this.greeting}
                <span class="planet">${this.planet}</span>
            </span>
        `;
    }

    togglePlanet(){
        this.planet = this.planet == 'World' ? 'Mars' : 'World';
    }

}

customElements.define('full-component',FullComponent);