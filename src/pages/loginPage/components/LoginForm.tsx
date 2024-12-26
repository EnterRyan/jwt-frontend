import NormalInput from "@shared/components/items/NormalInput";
import CheckBox from "@shared/components/items/CheckBox";
import SubmitButton from "@shared/components/items/SubmitButton";

import '@pages/loginPage/styles/login-form.css';
export default function LoginForm(){
  return (
    <form className="login-form">
      <NormalInput type="text" labelText="아이디" inputId='input-id'/>
      <NormalInput type="password" labelText="비밀번호"inputId='input-pw'/>
      <SubmitButton />
      <CheckBox inputId="login-remember" labelText="로그인 정보 기억하기"/>
    </form>
  )
}