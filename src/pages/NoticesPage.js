import { DeleteNotice } from 'components/DeleteNotice/DeleteNotice';
import { ModalAprooveAction } from 'components/ModalApproveAction/ModalApproveAction';
import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { useState } from 'react';

const NoticesPage = () => {
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
      <h2>Notices</h2>
      <NoticeCategoryItem />
      {isOpenModal && (
        <ModalAprooveAction onClose={toggleModal}>
          <DeleteNotice onClose={toggleModal} onChange={handleAction}/>
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

export default NoticesPage;
