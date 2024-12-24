import NormalInput from "@shared/components/items/NormalInput";

import '@pages/loginPage/styles/login-form.css';

export default function LoginForm(){
  return (
    <form className="login-form">
      <NormalInput type="text" labelText="아이디"/>
      <NormalInput type="password" labelText="비밀번호"/>
      <input type="checkbox"></input>   
      <button type="submit">Login</button>
    </form>
  )
}