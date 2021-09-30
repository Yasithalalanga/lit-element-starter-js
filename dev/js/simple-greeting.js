import { LitElement, html , css } from "lit";

export class SimpleGreeting extends LitElement {
    static styles = css `p {color: blue; }`;

    static properties = {
        name: { type: String }
    };

    constructor(){
        super();
        this.name = 'somebody';
    }

    render() {
        return html `<p> Hello, ${this.name} !</p>`;
    }

}

customElements.define('simple-greeting',SimpleGreeting);