import ModalBase from "./ModalBase";

type AlertModalType = {
  modalOpen : boolean;
  toggleModal: ()=>void
}

export default function AlertModal({modalOpen,toggleModal}:AlertModalType){
  return(
    <ModalBase modalOpen={modalOpen} toggleModal={toggleModal}>
      <div>hi</div>
    </ModalBase>
  )
}