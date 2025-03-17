import '@shared/styles/common-layout.css'
import ToggleThemeBtn from '../items/ToggleThemeBtn';

type AppWrapperType = {
  children : React.ReactNode;
}
export default function AppWrapper({children}:AppWrapperType){
  return(
    <div className={`app-wrapper`}>
      {children}
      <ToggleThemeBtn/>
    </div>
  )
}                                                                                        