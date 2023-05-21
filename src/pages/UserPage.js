import { LeavingWebSite } from 'components/LeavingWebSite/LeavingWebSite';
import { ModalAprooveAction } from 'components/ModalApproveAction/ModalApproveAction';
import { useState } from 'react';

const UserPage = () => {
  //   toggleModal, яку потрібно передати компоненту ModalAprooveActionб для закриття вікна
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };

  const  handleAction =() =>{
    console.log("Передаємо екшн")
  }

  return (
    <>
      <h2>User</h2>
      {isOpenModal && (
        <ModalAprooveAction onClose={toggleModal}>
          <LeavingWebSite onClose={toggleModal} onChange={handleAction}/>
        </ModalAprooveAction>
      )}
      <button
        type="button"
        style={{ marginBottom: '200px' }}
        onClick={toggleModal}
      >
        Open Modal
      </button>
    </>
  );
};

export default UserPage;
