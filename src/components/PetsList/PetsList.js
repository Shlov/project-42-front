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
    dispatch(fetchPets())
  }, [dispatch])

  if (pets.length === 0) {
    return <p>There are no contacts here</p>;
  }
  return (
    <List>
      {pets.map(contact => (
        <li key={contact.id}>
          <PetsItem item={contact} />
        </li>
      ))}
    </List>
  );
};
