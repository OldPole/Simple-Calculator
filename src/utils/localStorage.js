import { changeCssVars } from '../services/changeCssVars';

export const getTheme = () => {
  return localStorage.getItem('app-theme') || 'dark';
};

export const setTheme = (theme) => {
  localStorage.setItem('app-theme', theme);
  changeCssVars(theme);
};

export const initTheme = () => {
  const theme = getTheme();
  changeCssVars(theme);
};
