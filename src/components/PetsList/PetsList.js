import { PetsItem } from 'components/PetsItem/PetsItem';
const pets = [
  {
    image: '',
    id: 'dfkjhkfs5555',
    name: 'JOOSE',
    birthday: '12.12.22',
    comments: 'good cat',
  },
];
export const PetsList = () => {
  return (
    <>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>
            <PetsItem item={pet} />
          </li>
        ))}
      </ul>
    </>
  );
};
