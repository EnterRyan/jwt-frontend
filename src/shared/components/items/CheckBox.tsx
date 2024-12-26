import '@shared/styles/check-box.css'

type CheckBoxType = {
  inputId: string;
  labelText : string;
}
export default function CheckBox({inputId, labelText}:CheckBoxType){
  return (
    <div>
      <input id={inputId} className="check-box" name={inputId} type="checkbox"/>
      <label className = "check-box-label"htmlFor={inputId}>{labelText}</label>
    </div>
  );
}