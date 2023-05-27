import { useCallback, useState } from 'react';
import { useFormikContext } from 'formik';
import icons from '../../../images/icons.svg';
import { AddPetFormButtonWrapper } from 'components/AddPetForm/AddPetFormButtons/AddPetFormButtonWrapper.styled';
import {
  AvatarField,
  AvatarLabel,
  AvatarWrapper,
  ErrorMessageContainer,
  LocationPriceCommentFieldWrapper,
  MoreInfoStepContainer,
  MoreInfoStepInput,
  MoreInfoStepLabel,
  MoreInfoStepTextArea,
  RadioButton,
  SexAvatarFieldWrapper,
  SexErrorMessage,
  SexFieldTitle,
  SexLabel,
  SexRadioButtonsWrapper,
} from './MoreInfoStep.styled';
import BackLink from 'components/AddPetForm/AddPetFormButtons/BackLink';
import AddPetFormNextButton from 'components/AddPetForm/AddPetFormButtons/AddPetFormNextButton';

const MoreInfoStep = ({
  onBack,
  selectedCategory,
  setFormValues,
  handleSubmit,
}) => {
  const { values, setTouched, touched, errors, setFieldValue } =
    useFormikContext();

  const [doneClicked, setDoneClicked] = useState(false); // State variable to track Next button click

  // Function to handle the file input change and set the selected avatar
  const handleChange = event => {
    setFieldValue('avatar', event.target.files[0]);
  };

  // Function to validate form fields. UseCallback is used to memoize the validateFields function
  const validateFields = useCallback(() => {
    let formErrors = {};

    // Validate sex and location field if category is not 'your-pet'
    if (selectedCategory !== 'your-pet') {
      if (!values.sex) {
        formErrors.sex = 'Please select a sex';
      }
      if (!values.location) {
        formErrors.location = 'Location is required';
      }
    }

    // Validate price field
    if (selectedCategory === 'sell') {
      if (!values.price) {
        formErrors.price = 'Price is required';
      }
    }

    // Validate avatar field
    if (!values.avatar) {
      formErrors.avatar = 'Avatar is required';
    }

    // Validate comments field
    if (!values.comments) {
      formErrors.comments = 'Comments are required';
    } else if (values.comments.length < 8) {
      formErrors.comments = 'Comments must be at least 8 characters';
    } else if (values.comments.length > 120) {
      formErrors.comments = 'Comments must be at most 120 characters';
    }
    return formErrors;
  }, [selectedCategory, values]);

  // Call the validateFields function to get the form errors
  const formErrors = validateFields();

  // Handle done button click
  const handleSubmitClick = () => {
    // Mark all form fields as touched
    setTouched({
      sex: true,
      location: true,
      price: true,
      avatar: true,
      comments: true,
    });

    setDoneClicked(true);

    // Check if there are no form errors
    if (Object.keys(formErrors).length === 0) {
      // Update form values with the values from the input fields
      setFormValues(prevState => ({
        ...prevState,
        sex: values.sex,
        location: values.location,
        price: values.price,
        avatar: values.avatar,
        comments: values.comments,
      }));
      // Call the handleSubmit function to submit the form
      handleSubmit(values);
    }
  };

  return (
    <>
      <MoreInfoStepContainer selectedCategory={selectedCategory}>
        <SexAvatarFieldWrapper selectedCategory={selectedCategory}>
          {/* Fields are for all categories except  the category 'your-pet' */}
          {selectedCategory !== 'your-pet' && (
            <div>
              <SexFieldTitle>The sex</SexFieldTitle>
              <SexRadioButtonsWrapper>
                <RadioButton
                  id="female"
                  type="radio"
                  name="sex"
                  value="female"
                  checked={values.sex === 'female'}
                />
                <SexLabel htmlFor="female">
                  <svg width={24} height={24}>
                    <use href={icons + '#female'} />
                  </svg>
                  Female
                </SexLabel>
                <RadioButton
                  id="male"
                  type="radio"
                  name="sex"
                  value="male"
                  checked={values.sex === 'male'}
                />
                <SexLabel htmlFor="male">
                  <svg width={24} height={24}>
                    <use href={icons + '#male'} />
                  </svg>
                  Male
                </SexLabel>
              </SexRadioButtonsWrapper>
              {formErrors.sex && doneClicked && (
                <SexErrorMessage>{formErrors.sex}</SexErrorMessage>
              )}
            </div>
          )}
          <AvatarLabel selectedCategory={selectedCategory}>
            Load the pet’s image:
            <AvatarWrapper>
              {!values.avatar ? (
                <svg width={182} height={182}>
                  <use href={icons + '#defaultAvatar'} />
                </svg>
              ) : (
                <img
                  src={URL.createObjectURL(values.avatar)}
                  alt="Pet's avatar"
                  width="182"
                  height="182"
                />
              )}
              <AvatarField
                accept="image/*"
                name="avatar"
                type="file"
                onChange={handleChange}
                errors={touched.avatar && errors.avatar}
              />
            </AvatarWrapper>
            <ErrorMessageContainer name="avatar" component="div" />
          </AvatarLabel>
        </SexAvatarFieldWrapper>
        <LocationPriceCommentFieldWrapper>
          {selectedCategory !== 'your-pet' && (
            <div>
              <MoreInfoStepLabel>
                Location
                <MoreInfoStepInput
                  type="text"
                  name="location"
                  placeholder="Type of location"
                  errors={touched.location && errors.location}
                />
              </MoreInfoStepLabel>
              <ErrorMessageContainer name="location" component="div" />
            </div>
          )}

          {/* Field "price" is only for the "sell" category */}
          {selectedCategory === 'sell' && (
            <div>
              <MoreInfoStepLabel>
                Price
                <MoreInfoStepInput
                  type="number"
                  min="0"
                  name="price"
                  placeholder="Type of price"
                  errors={touched.price && errors.price}
                />
              </MoreInfoStepLabel>
              <ErrorMessageContainer name="price" component="div" />
            </div>
          )}

          {/* Field "comments" for additional comments */}
          <div>
            <MoreInfoStepLabel>
              Comments
              <MoreInfoStepTextArea
                name="comments"
                placeholder="Type breed"
                component="textarea"
                category={selectedCategory}
                errors={touched.comments && errors.comments}
              ></MoreInfoStepTextArea>
            </MoreInfoStepLabel>
            <ErrorMessageContainer
              name="comments"
              component="div"
              className="error-message"
            />
          </div>
        </LocationPriceCommentFieldWrapper>
      </MoreInfoStepContainer>
      <AddPetFormButtonWrapper>
        {/* Button to navigate to the previous step */}
        {/* Button to navigate to the previous step */}
        <BackLink
          type="button"
          buttonText="Back"
          handleClick={onBack}
          isLink={false}
        />
        {/* Button to submit the form */}
        <AddPetFormNextButton
          type="submit"
          onClick={handleSubmitClick}
          // disabled={isDisabled}
          buttonText="Done"
        />
      </AddPetFormButtonWrapper>
    </>
  );
};

export default MoreInfoStep;
