import LoginForm from "./components/LoginForm";
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';

import './styles/layout.css'
import { useState } from "react";
import { AlertModal } from "@shared/ui/modal";


//const modalJson = {}

export default function LoginPage(){
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = ()=>{
    setModalOpen(prev=>!prev)
  }
  return (
    <div className="login-wrap">
      <div className="login-intro-box">
          <AssignmentIndTwoToneIcon/>
          <p>Json Web Token</p>
          <p>let's build JWT Login</p>
      </div>
      <div className="login-panel">
        <LoginForm setModalOpen={setModalOpen}/>
      </div>
      <AlertModal modalOpen = {modalOpen} toggleModal={toggleModal}/>
    </div>
  )
}