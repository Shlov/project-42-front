import PropTypes from 'prop-types';
import { Button, ButtonWrap, DescrModal, ModalContent, TitleModal, TrashSlyled } from './DeleteNotice.styled';

export const DeleteNotice = ({ onClose, onChange }) => {
  return (
    <>
      <ModalContent>
        <TitleModal>Delete adverstiment?</TitleModal>
        <DescrModal>
          Are you sure you want to delete{' '}
          <strong>“Cute dog looking<br /> for a home”?</strong>
          <br />You can`t undo this action.
        </DescrModal>
        <ButtonWrap>
          <Button type="button" aria-label="cancel" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" aria-label="yes" onClick={onChange}>
            Yes
            <TrashSlyled />
          </Button>
        </ButtonWrap>
      </ModalContent>
    </>
  );
};

DeleteNotice.propTypes = {
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
