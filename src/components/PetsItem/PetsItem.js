import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import icons from '../../images/icons.svg';
import {
  Card,
  Photo,
  Label,
  LastLabel,
  Text,
  Icon,
  Btn,
  Breed, Description, LastText
} from './PetsItem.styled';

export const PetsItem = ({ item }) => {
  const handleDeletePet = () => {};
  return (
    <Card>
      <div>
        <Photo src={item.photo} alt={item.name} width="240" height="240" />
        <Btn type="button" onClick={handleDeletePet}>
          <Icon>
            <use href={icons + '#trash'} />
          </Icon>
        </Btn>
      </div>

      <Description>
        <Label>
          Name: <Text>{item.name}</Text>
        </Label>
        <Label>
          Date of birth: <Text>{item.birthDate}</Text>
        </Label>
        <Breed>
          Breed: <Text>{item.breed}</Text>
        </Breed>
        <LastLabel>
          Comments: &nbsp;<LastText>{item.comments}</LastText>
        </LastLabel>
      </Description>
    </Card>
  );
};

PetsItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
  }),
};
