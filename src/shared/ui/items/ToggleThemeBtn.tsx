import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import '@shared/styles/toggle-theme-btn.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/providers/ReduxStore';
import { toggleDarkMode } from '@features/theme';

export default function ToggleThemeBtn(){
  const darkMode = useSelector((state:RootState)=>state.theme.darkMode);
  const dispatch = useDispatch();
  const switchTheme = () =>{
    const nextTheme = document.documentElement.getAttribute('data-theme')==="dark"?"light":"dark";
    document.documentElement.setAttribute('data-theme', nextTheme);
    dispatch(toggleDarkMode());
  }
  return(
    <button className="toggle-theme-btn" type="button" onClick={switchTheme}>
      {darkMode?<DarkModeIcon/>:<LightModeIcon/> }
    </button>
  )
}
