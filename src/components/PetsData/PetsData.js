import { NavLink} from 'react-router-dom';

import { PetsList } from 'components/PetsList/PetsList';
import { Container } from './PetsData.styled';
import { useState } from 'react';

export const PetsData = () => {
  const [showLinkText, setShowLinkText] = useState(true);
  const handleClick = () => {
    setShowLinkText(false);
  };

  return (
    <div>
      <Container>
        <p>My Pets</p>
        {showLinkText ? (
          <NavLink to="/add-pet" onClick={handleClick}>
            Add Pet
          </NavLink>
        ) : null}
      </Container>
      <PetsList />
    </div>
  );
};
