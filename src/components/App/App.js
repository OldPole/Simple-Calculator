import styles from './App.module.css';

console.log(styles);

class App {
  render() {
    const root = document.getElementById('root');

    root.innerHTML = `
      <h1 class="${styles.header}">PIWO</h1>
    `;
  }
}

export default new App();
