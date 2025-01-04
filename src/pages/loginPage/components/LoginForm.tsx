import {useForm} from 'react-hook-form';

import NormalInput from "@shared/ui/items/NormalInput";
import CheckBox from "@shared/ui/items/CheckBox";
import SubmitButton from "@shared/ui/items/SubmitButton";

import '@pages/loginPage/styles/login-form.css';

interface LoginUserData{
  userId:string;
  userPw:string;
}

export default function LoginForm(){
  const loginApiUrl = "localhost:5000/api/login"
  const {register, handleSubmit} = useForm<LoginUserData>();
  const loginSubmit = (data:LoginUserData)=>{
    alert(JSON.stringify(data));
  }
  return (  
    <form className="login-form" onSubmit={handleSubmit(loginSubmit)}>
      <NormalInput type="text" labelText="아이디" inputId='input-id' name='userId' register={register}/>
      <NormalInput type="password" labelText="비밀번호"inputId='input-pw' name='userPw' register={register}/>
      <SubmitButton/>
      <CheckBox inputId="login-remember" labelText="로그인 정보 기억하기"/>
    </form>
  )
}