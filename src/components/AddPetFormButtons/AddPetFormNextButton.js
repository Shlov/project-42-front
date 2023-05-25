import { NextButton, PawIcon } from './NextButton.styled';
import icons from '../../images/icons.svg';

const AddPetFormNextButton = ({ buttonText, type, onClick, disabled }) => {
  return (
    <NextButton type={type} onClick={onClick} disabled={disabled}>
      {buttonText}
      <PawIcon width={24} height={24}>
        <use href={icons + '#pawprint'} />
      </PawIcon>
    </NextButton>
  );
};

export default AddPetFormNextButton;
