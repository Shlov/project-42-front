import { Link } from 'react-router-dom';

import { PetsList } from 'components/PetsList/PetsList';
import { Container, Title } from './PetsData.styled';
import { useState } from 'react';
import AddPetButton from 'components/AddPetButton/AddPetButton';

export const PetsData = () => {
  const [showPreviousPage, setShowPreviousPage] = useState(true);

  const handleChangePage = () => {
    setShowPreviousPage(false);
  };

  return (
    <>
      {showPreviousPage && (
        <div>
          <Container>
            <Title>My Pets:</Title>

            <AddPetButton onClick={handleChangePage}>
              <Link to="/add-pet">add</Link>
            </AddPetButton>
          </Container>
          <PetsList />
        </div>
      )}
    </>
  );
};
