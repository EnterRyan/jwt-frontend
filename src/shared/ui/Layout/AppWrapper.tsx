import './common-layout.css'
import {ToggleThemeBtn} from '../items/button';


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