class GlobantTimer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-size: 2rem;
                    font-weight: bold;
                    color: #333;
                    border: 1px solid #333;
                    width: 3rem;
                    height: 3rem;
                    text-align: center;
                    line-height: 3rem;
                    border-radius: 2px;
                    margin: 1rem 0rem;
                }
            </style>
            <div>
                <span id="timer"></span>
            <div>
        `;
    }
    
    connectedCallback() {
        this._counter = 5;
        this._timer = this.shadowRoot.querySelector('#timer');
        this._timer.textContent = this._counter;
        this._interval = setInterval(() => {       
            if (this._counter > 0) {
                this._counter--;
                this._timer.textContent = this._counter;

                if (this._counter === 0) {
                    const timeFinished = new Event('timer-finished')
                    this.dispatchEvent(timeFinished);
                }
            }
        }, 1000);
    }

    disconnectedCallback() {
        console.log('disconnected');
        clearInterval(this._interval);
    }
}

customElements.define('globant-timer', GlobantTimer)

