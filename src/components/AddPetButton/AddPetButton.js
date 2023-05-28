// Компонент рендерить кнопку-посилання.
// Для АВТОРИЗОВАНОГО користувача клік по кнопці переадресовує його на сторінку AddPetPage за приватним маршрутом /add-pet
// Для НЕАВТОРИЗОВАНОГО користувача клік по кнопці виводить повідомлення типу нотіфікація з інформацією про те, що потрібно авторизуватися для використання даного функціоналу
import { Button } from './AddPetButton.styled.jsx';
import { useNavigate } from 'react-router-dom';

const AddPetButton = () => {
  const navigate = useNavigate();

  const handleAddPetBtn = () => {
    navigate('/add-pet');
  };

  return (
    <>
      <Button onClick={handleAddPetBtn}>
        <span>Add pet</span>
      </Button>
    </>
  );
};

export default AddPetButton;
