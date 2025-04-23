class CustomTag extends HTMLElement {
    connectedCallback() {
      // This fires when the element is added to the DOM
      document.body.innerHTML = '<h1>Generating test Page</h1>';
    }
  }
  customElements.define('custom-tag', CustomTag);