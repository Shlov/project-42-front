import PropTypes from 'prop-types';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
// import { deletePet } from 'Redux/pets/operations';
import icons from 'images/icons.svg';
import {
  Card,
  Photo,
  Label,
  LastLabel,
  Text,
  Icon,
  Btn,
  Breed,
  Description,
  LastText,
  ModalContainer,
  ModalTitle,
  ModalText,
  ModalItem,
  ModalButton,
  Button,
  ModalIcon,
} from './PetsItem.styled';

export const PetsItem = ({ item }) => {
  // const dispatch = useDispatch()
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };

  const handleDeletePet = () => {
    // dispatch(deletePet(item.id));
  };
  return (
    <Card>
      {isOpenModal && (
        <ModalApproveAction onClose={toggleModal}>
          <ModalContainer>
            <ModalTitle>Delete your pet?</ModalTitle>
            <ModalText>
              Are you sure want to delete a{' '}
              <ModalItem>“{item.name}?”</ModalItem>
              <br />
              You can`t undo this action.
            </ModalText>
            <ModalButton>
              <Button type="button" onClick={toggleModal}>
                Cancel
              </Button>
              <Button type="button" onClick={handleDeletePet}>
                Yes
                <ModalIcon>
                  <use href={icons + '#trash'} />
                </ModalIcon>
              </Button>
            </ModalButton>
          </ModalContainer>
        </ModalApproveAction>
      )}
      <div>
        <Photo src={item.photo} alt={item.name} width="240" height="240" />
        <Btn type="button" onClick={toggleModal}>
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
