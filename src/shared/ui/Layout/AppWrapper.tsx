import './common-layout.css'
import ToggleThemeBtn from '../items/themeToggleBtn/ToggleThemeBtn';
import { useSelector } from 'react-redux';
import { RootState } from '@app/redux/ReduxStore';

type AppWrapperType = {
  children : React.ReactNode;
}
export default function AppWrapper({children}:AppWrapperType){
  const darkMode = useSelector((state:RootState)=>state.theme.darkMode);
  return(
    <div className={`app-wrapper ${darkMode?"app-wrapper-dark":"app-wrapper-light"}`}>
      {children}
      <ToggleThemeBtn/>
    </div>
  )
}