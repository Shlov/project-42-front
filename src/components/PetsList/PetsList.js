import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPets } from 'Redux/pets/selectors';
import { PetsItem } from 'components/PetsItem/PetsItem';
import { List } from './PetsList.styled';
import { fetchPets } from 'Redux/pets/operations';

export const PetsList = () => {
  const pets = useSelector(selectPets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <List>
      {pets.map(pet => (
        <li key={pet._id}>
          <PetsItem item={pet} />
        </li>
      ))}
    </List>
  );
};
