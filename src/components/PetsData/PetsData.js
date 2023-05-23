// import { NavLink} from 'react-router-dom';

import { PetsList } from 'components/PetsList/PetsList';
import { Container, AddButton, AddIcon } from './PetsData.styled';
// import { useState } from 'react';
import icons from 'images/icons.svg';

export const PetsData = () => {
  // const [showLinkText, setShowLinkText] = useState(true);
  // const handleClick = () => {
  //   setShowLinkText(false);
  // };

  return (
    <div>
      <Container>
        <h2>My Pets</h2>
        {/* <div>{showLinkText ? (
          <NavLink to="/add-pet" onClick={handleClick}>
            Add Pet
          </NavLink>
        ) : null}</div> */}
      <AddButton type='button'>Add Pet<AddIcon>
                  <use href={icons + '#plus-small'} />
                </AddIcon></AddButton>
      </Container>
      <PetsList />
    </div>
  );
};
