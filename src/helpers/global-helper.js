export const switchDarkMode = (state) => {
  const darkModeClass = 'dark_theme';

  if (state) {
    document.body.classList.add(darkModeClass);
  } else {
    document.body.classList.remove(darkModeClass);
  }
};
