import icons from '../../images/icons.svg';
import {  Card, Photo, Label, LastLabel, Text, Icon, Btn } from './PetsItem.styled';
import photo from '../../images/icons/eye-open.svg';

export const PetsItem = () => {
  return (
         <Card>
        <Photo src={photo} alt="cat" />
        <Btn type='button'>
          <Icon>
            <use href={icons + '#trash'} />
          </Icon>
        </Btn>

        <div>
          <Label>Name: <Text>text</Text></Label>
          <Label>Date of birth: <Text>text</Text></Label>
          <Label>Breed: <Text>text</Text></Label>
          <LastLabel>Comments: &nbsp;<Text>text</Text></LastLabel>
        </div>
        
      </Card>
   
  );
};
