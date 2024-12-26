import '@shared/styles/normal-input.css';
type NormalInputType = {
  type : string;
  labelText : string;
  inputId : string
}

export default function NormalInput({type,labelText,inputId}:NormalInputType){
  return (
    <div className='input-box'>
      <label className='input-label' htmlFor={inputId}>{labelText}</label>
      <input
        id={inputId} 
        className='input-text' 
        name='input-text' 
        type={type} 
      />
    </div>
  )
}