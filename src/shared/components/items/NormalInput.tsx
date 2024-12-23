import '@shared/styles/normal-input.css';
type NormalInputType = {
  type : string;
  labelText : string;
}

export default function NormalInput({type,labelText}:NormalInputType){
  return (
    <div className='input-box'>
      <label htmlFor='normal-text-input'>{labelText}</label>
        <input 
          className='normal-text-input' 
          name='normal-text-input' 
          type={type} 
        />
    </div>
  )
}