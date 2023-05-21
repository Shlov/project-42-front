import PropTypes from 'prop-types';
import { Button, ButtonWrap, ModalContent, TitleModal, ArrowSlyled } from './LeavingWebSite.styled';

export const LeavingWebSite = ({ onClose, onChange }) => {
  return (
    <>
      <ModalContent>
        <TitleModal>Already leaving?</TitleModal>
        <ButtonWrap>
          <Button type="button" aria-label="cancel" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" aria-label="yes" onClick={onChange}>
            Yes
            <ArrowSlyled />
          </Button>
        </ButtonWrap>
      </ModalContent>
    </>
  );
};

LeavingWebSite.propTypes = {
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
