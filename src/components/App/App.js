import Calculator from '../Calculator';

import styles from './App.module.css';

class App {
  render() {
    const root = document.getElementById('root');

    root.innerHTML = `
      <div class=${styles.app}>
        ${Calculator.render()}
      </div>
    `;
  }
}

export default new App();
