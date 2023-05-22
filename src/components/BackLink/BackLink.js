import { StyledLink } from './BackLink.styled';
import icons from 'images/icons.svg';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <svg width={24} height={24}>
        <use href={icons + '#arrow-left'} />
      </svg>
      {children}
    </StyledLink>
  );
};

export default BackLink;
