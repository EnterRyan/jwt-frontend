import '@shared/styles/common-layout.css'

type AppWrapperType = {
  children : React.ReactNode;
}
export default function AppWrapper({children}:AppWrapperType){
  return(
    <div className="app-wrapper">
      {children}
    </div>
  )
}