import { Link } from 'react-router-dom';

import { PetsList } from 'components/PetsList/PetsList';
import { Container, Title } from './PetsData.styled';
import { useState } from 'react';
import AddPetButton from 'components/AddPetButton/AddPetButton';

export const PetsData = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [showPreviousPage, setShowPreviousPage] = useState(true);

  const handleChangePage = page => {
    setCurrentPage(page);
    setShowPreviousPage(false);
  };

  return (
    <>
      {showPreviousPage && (
        <div>
          <Container>
            <Title>My Pets:</Title>
            <Link
              to="/add-pet"
              onClick={() => handleChangePage(currentPage)}
            ></Link>
            <AddPetButton />
          </Container>
          <PetsList />
        </div>
      )}
    </>
  );
};
