import '@shared/styles/toggle-theme-btn.css';

export default function ToggleThemeBtn(){
  const switchTheme = () =>{
    const nextTheme = document.documentElement.getAttribute('data-theme')==="dark"?"light":"dark";
    document.documentElement.setAttribute('data-theme', nextTheme);
  }

  return(
    <button className="toggle-theme-btn" type="button" onClick={switchTheme}>변환</button>
  )
}
