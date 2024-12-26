import AppWrapper from "@shared/components/Layout/AppWrapper";
import LoginForm from "./components/LoginForm";
import  UserIcon from 'assets/user-solid.svg';

import './styles/layout.css'

export default function LoginPage(){
  return (
    <AppWrapper>
      <div className="login-wrap">
        <div className="login-intro-box">
            <img width={"40px"} src={UserIcon} alt="" />
            <p>Json Web Token</p>
            <p>let's build JWT Login</p>
        </div>
        <div className="login-panel">
          <LoginForm/>
        </div>
      </div>
    </AppWrapper>
  )
}