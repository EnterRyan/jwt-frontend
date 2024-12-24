import '@shared/styles/normal-input.css';
type NormalInputType = {
  type : string;
  labelText : string;
}

export default function NormalInput({type,labelText}:NormalInputType){
  return (
    <div className='input-box'>
      <label className='input-label' htmlFor='input-text'>{labelText}</label>
        <input 
          className='input-text' 
          name='input-text' 
          type={type} 
        />
    </div>
  )
}