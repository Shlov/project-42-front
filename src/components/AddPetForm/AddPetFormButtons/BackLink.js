import { StyledLink, AddPetBackButton } from './BackLink.styled';
import icons from 'images/icons.svg';

const BackLink = ({ isLink, buttonText, to, handleClick, type }) => {
  if (isLink) {
    return (
      <StyledLink to={to} onClick={handleClick}>
        <svg width={24} height={24}>
          <use href={icons + '#arrow-left'} />
        </svg>
        {buttonText}
      </StyledLink>
    );
  } else {
    return (
      <AddPetBackButton onClick={handleClick} type={type}>
        <svg width={24} height={24}>
          <use href={icons + '#arrow-left'} />
        </svg>
        {buttonText}
      </AddPetBackButton>
    );
  }
};

export default BackLink;
