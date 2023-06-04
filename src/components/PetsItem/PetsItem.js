import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
import { deletePet } from 'Redux/pets/operations';
import { useSelector } from 'react-redux';
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

export const PetsItem = ({
  item: { _id, name, imageURL, birthday, breed, comments },
}) => {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const theme = useSelector(state => state.main.theme);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };

  const handleDeletePet = () => {
    dispatch(deletePet(_id));
    setIsOpenModal(false);
  };

  return (
    <Card theme={theme}>
      {isOpenModal && (
        <ModalApproveAction onClose={toggleModal}>
          <ModalContainer>
            <ModalTitle>Delete your pet?</ModalTitle>
            <ModalText>
              Are you sure want to delete a <ModalItem>“{name}?”</ModalItem>
              <br />
              You can`t undo this action.
            </ModalText>
            <ModalButton>
              <Button type="button" onClick={toggleModal} theme={theme}>
                Cancel
              </Button>
              <Button type="button" onClick={handleDeletePet} theme={theme}>
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
        <Photo src={imageURL} alt={name} width="240" height="240" />
        <Btn type="button" onClick={toggleModal}>
          <Icon theme={theme}>
            <use href={icons + '#trash'} />
          </Icon>
        </Btn>
      </div>

      <Description>
        <Label>
          Name: <Text>{name}</Text>
        </Label>
        <Label>
          Date of birth: <Text>{birthday}</Text>
        </Label>
        <Breed>
          Breed: <Text>{breed}</Text>
        </Breed>
        <LastLabel>
          Comments: &nbsp;<LastText>{comments}</LastText>
        </LastLabel>
      </Description>
    </Card>
  );
};

PetsItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  }),
};
