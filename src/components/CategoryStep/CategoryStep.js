import { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BackLink from './../BackLink/BackLink';
import {
  AddPetFormButtonWrapper,
  AddPetFormNextButton,
  CategoryStepContainer,
  CategoryStepLabel,
  PawIcon,
  RadioButton,
} from './CategoryStep.styled';
import icons from '../../images/icons.svg';

const CategoryStep = ({ onNext, onSelectCategory, selectedCategory }) => {
  const location = useLocation();
  const locRef = useRef(location.state?.from ?? '/main'); // for Back button
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    !selectedCategory ? setIsDisabled(true) : setIsDisabled(false);
  }, [selectedCategory]);

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
        <CategoryStepLabel htmlFor="your-pet">
          {/* Initial selection is "your pet" */}
          your pet
        </CategoryStepLabel>
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
          value="lost-found"
          id="lost-found"
          checked={selectedCategory === 'lost-found'}
          onChange={handleCategoryChange}
        />
        <CategoryStepLabel htmlFor="lost-found">lost/found</CategoryStepLabel>
        <RadioButton
          type="radio"
          name="category"
          value="for-free"
          id="for-free"
          checked={selectedCategory === 'for-free'}
          onChange={handleCategoryChange}
        />
        <CategoryStepLabel htmlFor="for-free">in good hands</CategoryStepLabel>
      </CategoryStepContainer>
      <AddPetFormButtonWrapper>
        <BackLink to={locRef.current}>Cancel</BackLink>
        {/* Cancel button, must be changed to BackLink */}
        <AddPetFormNextButton
          type="button"
          onClick={onNext}
          disabled={isDisabled}
        >
          {/* Proceed to the next step */}
          Next
          <PawIcon width={24} height={24}>
            <use href={icons + '#pawprint'} />
          </PawIcon>
        </AddPetFormNextButton>
      </AddPetFormButtonWrapper>
    </>
  );
};

export default CategoryStep;
