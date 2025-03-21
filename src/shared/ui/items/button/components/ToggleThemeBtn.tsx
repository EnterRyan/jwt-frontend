import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/redux/ReduxStore';
import { toggleDarkMode } from '@app/redux/slices/themeSlice';

import '../styles/toggle-theme-btn.css';

export default function ToggleThemeBtn() {
  //shallowEqual State가 이전값과 동일하면 재 랜더링 하지않음.
  const themeMode = useSelector((state:RootState) => state.theme.darkMode, shallowEqual); 
  const dispatch = useDispatch();

  const switchTheme = () => {
    const nextTheme = themeMode === "DarkMode" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    dispatch(toggleDarkMode());
  };

  return (
    <button className="toggle-theme-btn" type="button" onClick={switchTheme}>
      {themeMode === "DarkMode" ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
}