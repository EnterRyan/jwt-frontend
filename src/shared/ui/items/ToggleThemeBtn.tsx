import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import '@shared/styles/toggle-theme-btn.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/providers/ReduxStore';
import { toggleDarkMode } from '@features/theme';

export default function ToggleThemeBtn() {
  const themeMode = useSelector((state:RootState) => state.theme.darkMode); // String 상태 사용
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