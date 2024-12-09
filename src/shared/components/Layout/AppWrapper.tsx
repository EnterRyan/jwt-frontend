import '@shared/styles/common-layout.css'

type AppWrapperType = {
  children : React.ReactNode;
}
export default function AppWrapper({children}:AppWrapperType){
  const darkMode = true;

  return(
    <div className={`app-wrapper ${darkMode?"app-wrapper-dark":"app-wrapper-light"}`}>
      {children}
    </div>
  )
}