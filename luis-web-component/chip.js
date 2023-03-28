class GlobantChip extends HTMLElement {
    constructor() {
        super();
        this._chipTextElement;
        this._chipText = '';
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = /*html*/`
            <style>
                div {
                    max-width: 100%;
                    font-family: Roboto, Helvetica, Arial, sans-serif;
                    font-size: 0.8125rem;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    height: 32px;
                    color: rgba(0, 0, 0, 0.87);
                    border-radius: 16px;
                    white-space: nowrap;
                    cursor: default;
                    outline: 0px;
                    text-decoration: none;
                    padding: 0px;
                    vertical-align: middle;
                    box-sizing: border-box;
                    background-color: rgba(0, 0, 0, 0.08);
                    
                }

                :host([variant=outlined]) div {
                    background-color: transparent;
                    border: 1px solid rgb(189, 189, 189);
                }

                span {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding-left: 12px;
                    padding-right: 12px;
                    white-space: nowrap;
                }
            </style>
            <div>
                <span id="label"></span>
            </div>
        `
    }

    connectedCallback() {
        if (this.hasAttribute('label')) {
            this._chipText = this.getAttribute('label')
        }
        this._chipTextElement = this.shadowRoot.querySelector('#label');
        this._render();
    }

    attributeChangedCallback(name, oldValue, newValue) {   
        if (oldValue === newValue) {
            return;
        }

        if (name === 'label') {
            this._chipText = newValue;
            this._render();
        }
    }

    static get observedAttributes() {
        return ['label'];
    }

    _render() {
        if (this._chipTextElement) {
            this._chipTextElement.textContent = this._chipText;
        }
    }
}

customElements.define('globant-chip', GlobantChip)
