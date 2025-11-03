import styles from './Display.module.css';

class Display {
  render() {
    const html = `
        <div class=${styles.display}>
            <input type="text" class=${styles.display_input} value="0" readonly>
        </div>
    `;

    return html;
  }
}

export default new Display();
