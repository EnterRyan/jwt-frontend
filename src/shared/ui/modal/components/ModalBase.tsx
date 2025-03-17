import { useState } from 'react'
import '../styles/modal.css'

export default function ModalBase(){
  const [modalOpen, setModalOpen] = useState<boolean>(true);

  //이런건 상상도못해봤었던...
  if(!modalOpen) return null

  return (
      <div className='modal-base'>
        <div className='modal-contents'>qwe</div>
      </div>
  )
}