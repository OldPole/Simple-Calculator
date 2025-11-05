export const changeCssVars = (theme) => {
  const root = document.querySelector(':root');

  const vars = ['text', 'background', 'function', 'operator', 'number'];

  vars.forEach((element) => {
    root.style.setProperty(`--theme-default-${element}`, `var(--theme-${theme}-${element})`);
  });
};
