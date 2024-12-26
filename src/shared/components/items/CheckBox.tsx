
type CheckBoxType = {
  inputId: string;
  labelText : string;
}
export default function CheckBox({inputId, labelText}:CheckBoxType){
  return (
    <div>
      <input id={inputId} className="check-box" name={inputId} type="checkbox"/>
      <label htmlFor={inputId}>{labelText}</label>
    </div>
  );
}