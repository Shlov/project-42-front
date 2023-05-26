import { ErrorMessage, useFormikContext } from 'formik';
import { useState, useEffect, useCallback } from 'react';
import AddPetFormNextButton from 'components/AddPetFormButtons/AddPetFormNextButton';
import BackLink from '../AddPetFormButtons/BackLink';
import {
  PersonalDetailsField,
  PersonalDetailsStepContainer,
  PersonalDetailsStepInput,
  PersonalDetailsStepLabel,
} from './PersonalDetailsStep.styled';
import { AddPetFormButtonWrapper } from 'components/AddPetFormButtons/AddPetFormButtonWrapper.styled';

const PersonalDetailsStep = ({
  onBack,
  onNext,
  selectedCategory,
  setFormValues,
}) => {
  const { values, setTouched } = useFormikContext();
  const [isDisabled, setIsDisabled] = useState(true);

  // Function to validate form fields. useCallback is used to memoize the validateFields function
  const validateFields = useCallback(() => {
    let formErrors = {};

    // Validate title field if category is 'sell', 'lost-found' or 'for-free'
    if (selectedCategory !== 'your-pet') {
      if (!values.title) {
        formErrors.title = 'Title is required';
      }
    }

    // Validate name field
    if (!values.name) {
      formErrors.name = 'Name is required';
    }

    // Validate date field
    if (!values.date) {
      formErrors.date = 'Date of birth is required';
    }

    // Validate breed field
    if (!values.breed) {
      formErrors.breed = 'Breed is required';
    } else if (values.breed.length < 2) {
      formErrors.breed = 'Breed must be at least 2 characters';
    } else if (values.breed.length > 16) {
      formErrors.breed = 'Breed must be at most 16 characters';
    }

    return formErrors;
  }, [selectedCategory, values]);

  // Handle next button click
  const handleNextClick = () => {
    // setTouched is called to mark all form fields as touched
    setTouched({
      title: true,
      name: true,
      date: true,
      breed: true,
    });

    const formErrors = validateFields();

    if (Object.keys(formErrors).length === 0) {
      setFormValues(prevState => ({
        ...prevState,
        title: values.title,
        name: values.name,
        date: values.date,
        breed: values.breed,
      }));
      onNext();
    }
  };

  // Update disabled state based on form field validation
  useEffect(() => {
    const formErrors = validateFields();
    setIsDisabled(Object.keys(formErrors).length > 0);
  }, [values, selectedCategory, validateFields]); //  When any of these values change, the effect will run again to update the disabled state

  return (
    <>
      <PersonalDetailsStepContainer>
        {/* Field "title" is only for the "sell" and "lost" categories */}
        {selectedCategory !== 'your-pet' && (
          <PersonalDetailsField>
            <PersonalDetailsStepLabel>
              Title of add
              <PersonalDetailsStepInput
                type="text"
                name="title"
                placeholder="Type title"
              />
            </PersonalDetailsStepLabel>
            <ErrorMessage
              name="title"
              component="div"
              className="error-message"
            />
          </PersonalDetailsField>
        )}

        {/* Input field for capturing the name of the pet */}
        <PersonalDetailsField>
          <PersonalDetailsStepLabel>
            Pet’s name
            <PersonalDetailsStepInput
              type="text"
              name="name"
              placeholder="Type name pet"
            />
          </PersonalDetailsStepLabel>
          <ErrorMessage name="name" component="div" className="error-message" />
        </PersonalDetailsField>
        {/* Input field for capturing the date of birth of the pet */}
        <PersonalDetailsField>
          <PersonalDetailsStepLabel>
            Date of birth
            <PersonalDetailsStepInput
              type="text"
              name="date"
              placeholder="Type date of birth"
            />
          </PersonalDetailsStepLabel>
          <ErrorMessage name="date" component="div" className="error-message" />
        </PersonalDetailsField>
        {/* Input field for capturing the breed of the pet */}
        <PersonalDetailsField>
          <PersonalDetailsStepLabel>
            Breed
            <PersonalDetailsStepInput
              type="text"
              name="breed"
              placeholder="Type breed"
            />
          </PersonalDetailsStepLabel>
          <ErrorMessage
            name="breed"
            component="div"
            className="error-message"
          />
        </PersonalDetailsField>
      </PersonalDetailsStepContainer>
      <AddPetFormButtonWrapper>
        {/* Button to navigate to the previous step */}
        <BackLink
          type="button"
          buttonText="Back"
          handleClick={onBack}
          isLink={false}
        />
        {/* Button to navigate to the next step */}
        <AddPetFormNextButton
          type="button"
          onClick={handleNextClick}
          disabled={isDisabled}
          buttonText="Next"
        />
      </AddPetFormButtonWrapper>
    </>
  );
};

export default PersonalDetailsStep;
