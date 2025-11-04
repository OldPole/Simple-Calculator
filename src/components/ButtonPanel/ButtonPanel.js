import Button from '../Button/Button';

import styles from './ButtonPanel.module.css';

const buttons = [
  { text: 'AC', type: 'function' },
  { text: '+/-', type: 'function' },
  { text: '%', type: 'function' },
  { text: '÷', type: 'operator' },
  { text: '7', type: 'number' },
  { text: '8', type: 'number' },
  { text: '9', type: 'number' },
  { text: 'x', type: 'operator' },
  { text: '4', type: 'number' },
  { text: '5', type: 'number' },
  { text: '6', type: 'number' },
  { text: '-', type: 'operator' },
  { text: '1', type: 'number' },
  { text: '2', type: 'number' },
  { text: '3', type: 'number' },
  { text: '+', type: 'operator' },
  { text: '0', type: 'zero' },
  { text: ',', type: 'number' },
  { text: '=', type: 'equals' },
];

class ButtonPanel {
  render() {
    const html = `
        <div class=${styles.buttons}>
            ${buttons.map(({ text, type }) => Button.render(text, type)).join('')}
        </div>
    `;

    return html;
  }

  attachEventListeners(clickHandler) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        clickHandler(e.target.textContent);
      });
    });
  }
}

export default new ButtonPanel();
