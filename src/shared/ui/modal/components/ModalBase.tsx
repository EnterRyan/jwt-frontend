import { AccentBtn } from '@shared/ui/items/button';
import '../styles/modal.css'

type ModalBaseType = {
  modalOpen : boolean;
  toggleModal : ()=>void
  children : React.ReactNode;
}

export default function ModalBase({modalOpen, children, toggleModal}:ModalBaseType){
  //이런건 상상도못해봤었던...
  if(!modalOpen) return null

  return (
      <div className='modal-base'>
        <div className='modal-contents'>
          <div className='modal-body'>
            {children}
          </div>
          <div className='modal-footer'>
            <AccentBtn buttonText={'확인'} onClick={toggleModal}/>
          </div>
        </div>
      </div>
  )
}