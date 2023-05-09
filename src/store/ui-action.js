import { getCookie, setCookie } from '../helpers/global-helper';
import { uiSliceActions } from './ui-slice';

const THEME_SETTING_COOKIE_NAME = 'todoTheme';

export const fetchThemeSetting = () => {
  return (dispatch) => {
    const darkTheme = getCookie(THEME_SETTING_COOKIE_NAME);
    if (darkTheme === '1') {
      dispatch(uiSliceActions.setDarkThemeState(true));
    }
  };
};

export const saveThemeSetting = (darkTheme) => {
  const darkModeCookieValue = darkTheme ? '1' : '0';
  setCookie(THEME_SETTING_COOKIE_NAME, darkModeCookieValue, 100);
};
