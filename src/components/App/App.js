import Calculator from '../Calculator';
import { initTheme } from '../../utils/localStorage';

class App {
  render() {
    const root = document.getElementById('root');

    root.innerHTML = `
      <div>
        ${Calculator.render()}
      </div>
    `;

    Calculator.attachEventListeners();
    initTheme();
  }
}

export default new App();
