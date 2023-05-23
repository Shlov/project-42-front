// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectPets } from 'Redux/pets/selectors';
import { PetsItem } from 'components/PetsItem/PetsItem';
import { List } from './PetsList.styled';
// import { fetchPets } from 'Redux/pets/operations';

const pets = [
  {
    id: '1',
    photo: '',
    name: 'Jack',
    birthDate: '15.12.2011',
    breed: 'hasky',
    comments: "Jack is a handsome Basenji with short, shiny red fur and perky ears. He's an active and intelligent dog that loves to explore and play. Jack is independent and strong-willed, but also affectionate and loyal to his family. He's a curious and energetic companion that brings joy and adventure to his family's life."

  },
  {
    id: '2',
    photo: '',
    name: 'Max',
    birthDate: '15.12.2011',
    breed: 'hasky',
    comments: "Jack is a handsome Basenji with short, shiny red fur and perky ears. He's an active and intelligent dog that loves to explore and play. Jack is independent and strong-willed, but also affectionate and loyal to his family. He's a curious and energetic companion that brings joy and adventure to his family's life."

  }
]

export const PetsList = () => {
  // const pets = useSelector(selectPets);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPets())
  // }, [dispatch])

  // if (pets.length === 0) {
  //   return <p>There are no contacts here</p>;
  // }
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
