// import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PetsList } from 'components/PetsList/PetsList';
import { Container, AddButton, AddIcon, Title } from './PetsData.styled';
import { useState } from 'react';
import icons from 'images/icons.svg';

export const PetsData = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [showPreviousPage, setShowPreviousPage] = useState(true);
// console.log(currentPage);
// console.log(showPreviousPage);
  // useEffect(() => {
  //   setShowPreviousPage(true)
  // }, [])
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
            <Link to="/add-pet" onClick={() => handleChangePage(currentPage)}>
              <AddButton type="button">
                Add Pet
                <AddIcon>
                  <use href={icons + '#plus-small'} />
                </AddIcon>
              </AddButton>
            </Link>
          </Container>
          <PetsList />
        </div>
      )}
    </>
  );
};
