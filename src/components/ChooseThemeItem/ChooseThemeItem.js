import { setTheme } from '../../utils/localStorage';

import styles from './ChooseThemeItem.module.css';

class ChooseThemeItem {
  handleChangeTheme = (theme) => {
    setTheme(theme);
  };

  render({ theme, classes }) {
    const html = `
      <div 
        class="${styles.theme__item} ${styles[classes]}" 
        data-theme=${theme}
      >
      </div>
    `;

    return html;
  }
}

export default new ChooseThemeItem();
