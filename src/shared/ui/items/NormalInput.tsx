import { UseFormRegister } from 'react-hook-form';
import { LoginFormData } from '@features/auth';
import '@shared/styles/normal-input.css';


type NormalInputType = {
  type : string;
  labelText : string;
  inputId : string;
  name : keyof LoginFormData;
  register ?:UseFormRegister<LoginFormData>;
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