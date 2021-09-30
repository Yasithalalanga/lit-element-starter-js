import { LitElement, html, css } from 'lit';

export class TestCss extends LitElement{

    static properties = {
        name: {}
    };

    static styles = css `
        .checkOne {
            color: blue;
        }
    `;

    render(){
        return html `
            <p class="checkOne">Test Css Stylesheets - Check One</p>
            <p class="checkTwo">Test Css Stylesheets - Check Two</p>
            <p class="checkThree">Test Css Stylesheets - Check Three</p>
        `;
    }
}

customElements.define('test-css', TestCss);