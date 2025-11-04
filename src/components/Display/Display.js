import styles from './Display.module.css';

class Display {
  constructor() {
    this.value = '0';
  }

  update(newValue) {
    this.value = newValue;
    document.querySelector(`.${styles.display_input}`).value = this.value;
  }

  render() {
    const html = `
        <div class=${styles.display}>
            <input type="text" class=${styles.display_input} value=${this.value} readonly>
        </div>
    `;

    return html;
  }
}

export default new Display();
