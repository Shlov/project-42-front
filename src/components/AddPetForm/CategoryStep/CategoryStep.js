import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BackLink from '../AddPetFormButtons/BackLink';
import {
  CategoryStepContainer,
  CategoryStepLabel,
  RadioButton,
  ErrorMessage,
} from './CategoryStep.styled';
import icons from '../../../images/icons.svg';
import {
  NextButton,
  PawIcon,
} from 'components/AddPetForm/AddPetFormButtons/NextButton.styled';
import { AddPetFormButtonWrapper } from 'components/AddPetForm/AddPetFormButtons/AddPetFormButtonWrapper.styled';

const CategoryStep = ({ onNext, onSelectCategory, selectedCategory }) => {
  const location = useLocation();
  const locRef = useRef(location.state?.from ?? '/'); // for Back button
  const [nextClicked, setNextClicked] = useState(false); // State variable to track Next button click

  const handleNext = () => {
    setNextClicked(true); // Set nextClicked to true when Next button is clicked
    if (selectedCategory) {
      onNext();
    }
  };

  // Update selected category when a radio button is changed
  const handleCategoryChange = event => {
    const selectedCategory = event.target.value;
    onSelectCategory(selectedCategory);
  };

  return (
    <>
      {/* Radio buttons for selecting a category */}
      <CategoryStepContainer>
        <RadioButton
          type="radio"
          name="category"
          value="your-pet"
          id="your-pet"
          checked={selectedCategory === 'your-pet'}
          onChange={handleCategoryChange}
        />
        <CategoryStepLabel htmlFor="your-pet">your pet</CategoryStepLabel>
        <RadioButton
          type="radio"
          name="category"
          value="sell"
          id="sell"
          checked={selectedCategory === 'sell'}
          onChange={handleCategoryChange}
        />
        <CategoryStepLabel htmlFor="sell">sell</CategoryStepLabel>
        <RadioButton
          type="radio"
          name="category"
          value="lost/found"
          id="lost/found"
          checked={selectedCategory === 'lost/found'}
          onChange={handleCategoryChange}
        />
        <CategoryStepLabel htmlFor="lost/found">lost/found</CategoryStepLabel>
        <RadioButton
          type="radio"
          name="category"
          value="for-free"
          id="for-free"
          checked={selectedCategory === 'for-free'}
          onChange={handleCategoryChange}
        />
        <CategoryStepLabel htmlFor="for-free">in good hands</CategoryStepLabel>
        {!selectedCategory && nextClicked && (
          <ErrorMessage>Please choose a category</ErrorMessage>
        )}
      </CategoryStepContainer>
      <AddPetFormButtonWrapper>
        <BackLink to={locRef.current} buttonText="Cancel" isLink={true} />
        {/* Cancel button, must be changed to BackLink */}
        <NextButton type="button" onClick={handleNext}>
          {/* Proceed to the next step */}
          Next
          <PawIcon width={24} height={24}>
            <use href={icons + '#pawprint'} />
          </PawIcon>
        </NextButton>
      </AddPetFormButtonWrapper>
    </>
  );
};

export default CategoryStep;
