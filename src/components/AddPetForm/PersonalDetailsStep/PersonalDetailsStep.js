import { useFormikContext } from 'formik';
import { useCallback } from 'react';
import AddPetFormNextButton from 'components/AddPetForm/AddPetFormButtons/AddPetFormNextButton';
import BackLink from '../AddPetFormButtons/BackLink';
import { Label } from '../Input/Input.styled';
import {
  ErrorMessageContainer,
  PersonalDetailsField,
  PersonalDetailsStepContainer,
  PersonalDetailsStepInput,
} from './PersonalDetailsStep.styled';
import { AddPetFormButtonWrapper } from 'components/AddPetForm/AddPetFormButtons/AddPetFormButtonWrapper.styled';

const PersonalDetailsStep = ({ onBack, onNext, selectedCategory }) => {
  const { values, setTouched, touched, errors } = useFormikContext();

  // Function to validate form fields. UseCallback is used to memoize the validateFields function
  const validateFields = useCallback(() => {
    let formErrors = {};

    // Validate title field if category is 'sell', 'lost/found' or 'in good hands'
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
      // Call the onNext function to proceed to the next step
      onNext();
    }
  };

  return (
    <>
      <PersonalDetailsStepContainer>
        {/* Field "title" is only for the "sell" and "lost" categories */}
        {selectedCategory !== 'your-pet' && (
          <PersonalDetailsField>
            <Label>
              Title of add
              <PersonalDetailsStepInput
                type="text"
                name="title"
                placeholder="Type title"
                errors={touched.title && errors.title}
              />
            </Label>

            <ErrorMessageContainer name="title" component="div" />
          </PersonalDetailsField>
        )}

        {/* Input field for capturing the name of the pet */}
        <PersonalDetailsField>
          <Label>
            Pet’s name
            <PersonalDetailsStepInput
              type="text"
              name="name"
              placeholder="Type name pet"
              errors={touched.name && errors.name}
            />
          </Label>
          <ErrorMessageContainer name="name" component="div" />
        </PersonalDetailsField>
        {/* Input field for capturing the date of birth of the pet */}
        <PersonalDetailsField>
          <Label>
            Date of birth
            <PersonalDetailsStepInput
              type="text"
              name="date"
              placeholder="Type date of birth"
              errors={touched.date && errors.date}
            />
          </Label>
          <ErrorMessageContainer name="date" component="div" />
        </PersonalDetailsField>
        {/* Input field for capturing the breed of the pet */}
        <PersonalDetailsField>
          <Label>
            Breed
            <PersonalDetailsStepInput
              type="text"
              name="breed"
              placeholder="Type breed"
              errors={touched.breed && errors.breed}
            />
          </Label>
          <ErrorMessageContainer name="breed" component="div" />
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
          buttonText="Next"
        />
      </AddPetFormButtonWrapper>
    </>
  );
};

export default PersonalDetailsStep;
