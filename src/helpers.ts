export const setTheme = (theme: string) => {
  // @ts-ignore
  document.querySelector("#app").className = theme;
};
