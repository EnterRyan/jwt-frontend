import LoginForm from "./components/LoginForm";
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';

import './styles/layout.css'
import ModalBase from '@shared/ui/modal/components/ModalBase';

export default function LoginPage(){
  return (
    // <AppWrapper>
      <div className="login-wrap">
        <div className="login-intro-box">
            <AssignmentIndTwoToneIcon/>
            <p>Json Web Token</p>
            <p>let's build JWT Login</p>
        </div>
        <div className="login-panel">
          <LoginForm/>
        </div>
        <ModalBase />
      </div>
  )
}