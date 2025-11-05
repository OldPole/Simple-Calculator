import ChooseThemeItem from '../ChooseThemeItem';

import styles from './ChooseTheme.module.css';

const themes = [
  {
    theme: 'dark',
    classes: 'item__dark',
  },
  {
    theme: 'light',
    classes: 'item__light',
  },
  {
    theme: 'neitral',
    classes: 'item__neitral',
  },
];

class ChooseTheme {
  render() {
    const html = `
      <div class=${styles.theme__container}>
        ${themes.map((theme) => ChooseThemeItem.render(theme)).join('')}
      </div>
    `;

    return html;
  }

  attachEventListeners() {
    document.querySelectorAll('[data-theme]').forEach((item) => {
      item.addEventListener('click', () => {
        const theme = item.getAttribute('data-theme');
        ChooseThemeItem.handleChangeTheme(theme);
      });
    });
  }
}

export default new ChooseTheme();
