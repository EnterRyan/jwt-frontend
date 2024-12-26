import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import '@shared/styles/toggle-theme-btn.css';
import { useState } from 'react';

export default function ToggleThemeBtn(){
  const [theme, setTheme] = useState('light');
  const switchTheme = () =>{
    const nextTheme = document.documentElement.getAttribute('data-theme')==="dark"?"light":"dark";
    document.documentElement.setAttribute('data-theme', nextTheme);
    setTheme(nextTheme);
  }
  return(
    <button className="toggle-theme-btn" type="button" onClick={switchTheme}>
      {theme==="light"?<DarkModeIcon/>:<LightModeIcon/> }
    </button>
  )
}
