import { PetsItem } from 'components/PetsItem/PetsItem';
import { List } from './PetsList.styled';
const myPets = [
  {
    image: '',
    id: 'dfkjhkfs5555',
    name: 'Max',
    breed: 'britain',
    birthday: '12.12.22',
    comments: 'good cat',
  },
  {
    image: '',
    id: 'dfkjhkfs5555',
    name: 'Jack',
    breed: 'hasky',
    birthday: '12.12.21',
    comments: 'good dog',
  },
];
export const PetsList = () => {
  return (
    <>
      <List>
        {myPets.map(pet => (
          <li key={pet.id}>
            <PetsItem item={pet} />
          </li>
        ))}
      </List>
    </>
  );
};
