
import UserIcon from '../../images/icons/user-1.svg'
import {UserNavContainer, UserNavImage, UserNavName} from './UserNav.styled'

const UserNav = () => {
  return (
    <UserNavContainer to="/user">
      <UserNavImage src={UserIcon} alt="" />
      <UserNavName>Anna</UserNavName>
    </UserNavContainer>
  );
};

export default UserNav;
