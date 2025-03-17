
import '../styles/Accent-button.css';

type AccentBtnType = {
  buttonText : string;
  onClick : ()=>void
}
export default function AccentBtn({buttonText, onClick}:AccentBtnType){
  return (
    <button 
    className="accent-button"
    onClick={onClick}
    >
      {buttonText}
    </button>
  )
}