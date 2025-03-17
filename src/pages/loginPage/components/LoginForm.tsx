import {useForm} from 'react-hook-form';
import { useNavigate  } from 'react-router';

import NormalInput from "@shared/ui/items/Input/NormalInput";
import CheckBox from "@shared/ui/items/CheckBox/CheckBox";
import SubmitButton from "@shared/ui/items/SubmitBtn/SubmitButton";

import  {LoginFormData, PostLogin} from '@features/auth'
import { useDispatch } from 'react-redux';
import { login } from '@app/redux/slices/authSlice';

import '@pages/loginPage/styles/login-form.css';

export default function LoginForm(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm<LoginFormData>();

  const loginSubmit =async (data:LoginFormData)=>{
  try{
    const response = await PostLogin(data);
    if(response){
      dispatch(login(response));
      navigate('/');
    }
    else{
      alert('NOPE');
    }
  }
  catch{
    console.log("Login Fail");
  }
    
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