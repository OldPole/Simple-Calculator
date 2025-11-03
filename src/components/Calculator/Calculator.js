import Display from '../Display/Display';
import ButtonPanel from '../ButtonPanel/ButtonPanel';

import styles from './Calculator.module.css';

class Calculator {
  render() {
    const html = `
        <div class=${styles.calculator}>
            ${Display.render()}
            ${ButtonPanel.render()}
        </div>
    `;

    return html;
  }
}

export default new Calculator();
