class GlobantInput extends HTMLInputElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                input {
                    width: 100%;
                    height: 2rem;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    padding: 0.5rem;
                }
            </style>
            <div>
                <input type="text" value="random" />
            </div>
        `
    }

    click() {
        alert('Input is disabled')
    }
}


customElements.define('globant-input', GlobantInput, { extends: 'input' })
