import '@shared/styles/common-layout.css'
import ToggleThemeBtn from '../items/ToggleThemeBtn';
import { useSelector } from 'react-redux';
import { RootState } from '@app/providers/ReduxStore';

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