
import { useSelector } from 'react-redux';
import UserIcon from '../../images/icons/user-1.svg'
import {UserNavContainer, UserNavImage, UserNavName} from './UserNav.styled'

const UserNav = () => {
  const user = useSelector((state) => state.auth.user)
  return (
    <UserNavContainer to="/user">
      <UserNavImage src={UserIcon} alt="" />
      <UserNavName>{user.name}</UserNavName>
    </UserNavContainer>
  );
};

export default UserNav;
