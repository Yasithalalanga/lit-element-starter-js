import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
    
class ProfileCard extends LitElement {

  static get properties() {
    return {
      title: {type: String },
    }
  }
  
  static get styles() {
    return css`.mood { color: red; }`;
  }

  render() {
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">

      <div class="card" style="width: 18rem;">
        <img src="https://media.istockphoto.com/photos/heart-shape-in-autumn-forest-picture-id1263996833?b=1&k=20&m=1263996833&s=170667a&w=0&h=Zz2guv2IEFtIV4pYerq0KIQWnBhqabAem69xOeRwdL0=" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    `;

  }

  //Shadom DOM -> Light DOM
  // createRenderRoot() {
  //   return this;
  // }
  
}

customElements.define('profile-card', ProfileCard);