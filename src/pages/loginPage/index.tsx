import AppWrapper from "@shared/components/Layout/AppWrapper";
import  UserIcon from 'assets/user-solid.svg';

import './styles/layout.css'
import NormalInput from "@shared/components/items/NormalInput";

export default function LoginPage(){
  const switchTheme = () =>{
    const nextTheme = document.documentElement.getAttribute('data-theme')==="dark"?"light":"dark";
    document.documentElement.setAttribute('data-theme', nextTheme);
  }
  return (
    <AppWrapper>
      <div className="login-wrap">
        <div className="thumbnail">
          <div>
            <img width={"32px"} src={UserIcon} alt="" />
            <h3>Login</h3>
          </div>
        </div>
        <div className="login-panel">
          <form className="login-form">
            <NormalInput type="text" labelText="아이디"/>
            <NormalInput type="password" labelText="비밀번호"/>
            <input type="checkbox"></input>   
            <button>Login</button>
          </form>
        </div>
      </div>
      <div>
        <button type="button" onClick={switchTheme}>변환</button>
      </div>
    </AppWrapper>
  )
}