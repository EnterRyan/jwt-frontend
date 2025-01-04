import { UseFormRegister } from 'react-hook-form';

import '@shared/styles/normal-input.css';
interface LoginUserData{
  userId:string;
  userPw:string;
}

type NormalInputType = {
  type : string;
  labelText : string;
  inputId : string;
  name : keyof LoginUserData;
  register ?:UseFormRegister<LoginUserData>;
}

export default function NormalInput({type,labelText,inputId,name, register}:NormalInputType){
  return (
    <div className='input-box'>
      <label className='input-label' htmlFor={inputId}>{labelText}</label>
      <input
        id={inputId} 
        className='input-text' 
        type={type} 
        {...(register ? register(name) : {})}
      />
    </div>
  )
}