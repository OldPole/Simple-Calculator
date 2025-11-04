import styles from './Button.module.css';

class Button {
  render(text, type) {
    const html = `
      <button class="btn ${styles.btn} ${styles[type]}">${text}</button>
    `;
    return html;
  }
}

export default new Button();
