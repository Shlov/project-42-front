import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PetsList } from 'components/PetsList/PetsList';
import { Container, AddButton, AddIcon, Title } from './PetsData.styled';
// import { useState } from 'react';
import icons from 'images/icons.svg';

export const PetsData = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add-pet');
  };

  return (
    <div>
      <Container>
        <Title>My Pets:</Title>
        <AddButton type="button" onClick={handleClick}>
          Add Pet
          <AddIcon>
            <use href={icons + '#plus-small'} />
          </AddIcon>
        </AddButton>
      </Container>
      <PetsList />
    </div>
  );
};
