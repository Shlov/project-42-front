// Компонент рендерить кнопку-посилання.
// Для АВТОРИЗОВАНОГО користувача клік по кнопці переадресовує його на сторінку AddPetPage за приватним маршрутом /add-pet
// Для НЕАВТОРИЗОВАНОГО користувача клік по кнопці виводить повідомлення типу нотіфікація з інформацією про те, що потрібно авторизуватися для використання даного функціоналу
import { Button, AddIcon } from './AddPetButton.styled.jsx';
import { useLocation } from 'react-router-dom';
import icons from 'images/icons.svg';

const AddPetButton = () => {
  const location = useLocation();

  return (
    <>
      <Button to={`/add-pet`} state={{ from: location }}>
        Add Pet
        <AddIcon>
          <use href={icons + '#plus-small'} />
        </AddIcon>
      </Button>
    </>
  );
};

export default AddPetButton;
