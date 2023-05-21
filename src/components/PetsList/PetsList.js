import { PetsItem } from 'components/PetsItem/PetsItem';
import { List } from './PetsList.styled';
const pets = [
  {
    image: '',
    id: 'dfkjhkfs5555',
    name: 'Max',
    breed: 'britain',
    birthDate: '12.12.22',
    comments: "Jack is a handsome Basenji with short, shiny red fur and perky ears. He's an active and intelligent dog that loves to explore and play. Jack is independent and strong-willed, but also affectionate and loyal to his family. He's a curious and energetic companion that brings joy and adventure to his family's life",
  },
  {
    image: '',
    id: 'dfkjhkfs5555',
    name: 'Jack',
    breed: 'hasky',
    birthDate: '12.12.21',
    comments: 'good dog',
  },
];
export const PetsList = () => {
  return (
    <>
      <List>
        {pets.map(pet => (
          <li key={pet.id}>
            <PetsItem item={pet} />
          </li>
        ))}
      </List>
    </>
  );
};
