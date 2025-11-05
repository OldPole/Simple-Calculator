import { getTheme, setTheme } from '../../utils/localStorage';

import styles from './ChooseThemeItem.module.css';

class ChooseThemeItem {
  handleChangeTheme(theme) {
    setTheme(theme);
    this.updateActiveTheme();
  }

  updateActiveTheme() {
    const currentTheme = getTheme();

    document.querySelectorAll('[data-theme]').forEach((item) => {
      if (item.getAttribute('data-theme') === currentTheme) {
        item.classList.add(styles.theme__item_active);
      } else {
        item.classList.remove(styles.theme__item_active);
      }
    });
  }

  render({ theme, classes }) {
    const currentTheme = getTheme();
    const activeClass = theme === currentTheme ? styles.theme__item_active : '';

    const html = `
      <div 
        class="${styles.theme__item} ${styles[classes]} ${activeClass}" 
        data-theme=${theme}
      >
      </div>
    `;

    return html;
  }
}

export default new ChooseThemeItem();
