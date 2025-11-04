import Calculator from '../Calculator';

class App {
  render() {
    const root = document.getElementById('root');

    root.innerHTML = `
      <div>
        ${Calculator.render()}
      </div>
    `;

    Calculator.attachEventListeners();
  }
}

export default new App();
