import { useState, useCallback, useEffect } from 'react';
import { ErrorMessage, useFormikContext } from 'formik';
import icons from '../../images/icons.svg';
import { AddPetFormButtonWrapper } from 'components/AddPetFormButtons/AddPetFormButtonWrapper.styled';
import {
  AvatarField,
  AvatarLabel,
  AvatarWrapper,
  LocationPriceCommentFieldWrapper,
  MoreInfoStepContainer,
  MoreInfoStepInput,
  MoreInfoStepLabel,
  MoreInfoStepTextArea,
  RadioButton,
  SexAvatarFieldWrapper,
  SexFieldTitle,
  SexLabel,
  SexRadioButtonsWrapper,
} from './MoreInfoStep.styled';
import BackLink from 'components/AddPetFormButtons/BackLink';
import AddPetFormNextButton from 'components/AddPetFormButtons/AddPetFormNextButton';

const MoreInfoStep = ({
  onBack,
  selectedCategory,
  setFormValues,
  handleSubmit,
}) => {
  const { values, setTouched } = useFormikContext();
  const [isDisabled, setIsDisabled] = useState(true);
  const [file, setFile] = useState(null);

  const handleChange = event => {
    setFile(event.target.files[0]);
  };

  // Function to validate form fields. useCallback is used to memoize the validateFields function
  const validateFields = useCallback(() => {
    let formErrors = {};

    if (selectedCategory !== 'your-pet') {
      if (!values.sex) {
        formErrors.sex = 'Sex is required';
      }
      if (!values.location) {
        formErrors.location = 'Location is required';
      }
    }

    if (selectedCategory === 'sell') {
      if (!values.price) {
        formErrors.price = 'Price is required';
      }
    }

    if (!file) {
      formErrors.avatar = 'Avatar is required';
    }

    // Validate breed field
    if (!values.comments) {
      formErrors.comments = 'Comments are required';
    } else if (values.comments.length < 8) {
      formErrors.comments = 'Comments must be at least 8 characters';
    } else if (values.comments.length > 120) {
      formErrors.comments = 'Comments must be at most 120 characters';
    }
    return formErrors;
  }, [selectedCategory, values, file]);

  // Handle next button click
  const handleSubmitClick = () => {
    setTouched({
      sex: true,
      location: true,
      price: true,
      avatar: true,
      comments: true,
    });

    const formErrors = validateFields();

    if (Object.keys(formErrors).length === 0) {
      setFormValues(prevState => ({
        ...prevState,
        sex: values.sex,
        location: values.location,
        price: values.price,
        avatar: file,
        comments: values.comments,
      }));
    }
    handleSubmit();
  };

  // Update disabled state based on form field validation
  useEffect(() => {
    const formErrors = validateFields();
    setIsDisabled(Object.keys(formErrors).length > 0);
  }, [values, selectedCategory, validateFields]); //  When any of these values change, the effect will run again to update the disabled state

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
              <ErrorMessage
                name="sex"
                component="div"
                className="error-message"
              />
            </div>
          )}
          <AvatarLabel selectedCategory={selectedCategory}>
            Load the pet’s image:
            <AvatarWrapper>
              {!file ? (
                <svg width={182} height={182}>
                  <use href={icons + '#defaultAvatar'} />
                </svg>
              ) : (
                <img src={URL.createObjectURL(file)} alt="Pet's avatar" />
              )}
              <AvatarField
                accept="image/*"
                name="avatar"
                type="file"
                onChange={handleChange}
              />
            </AvatarWrapper>
          </AvatarLabel>
          <ErrorMessage
            name="avatar"
            component="div"
            className="error-message"
          />
        </SexAvatarFieldWrapper>
        <LocationPriceCommentFieldWrapper>
          <div>
            <MoreInfoStepLabel>
              Location
              <MoreInfoStepInput
                type="text"
                name="location"
                placeholder="Type of location"
              />
            </MoreInfoStepLabel>
            <ErrorMessage
              name="location"
              component="div"
              className="error-message"
            />
          </div>

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
                />
              </MoreInfoStepLabel>
              <ErrorMessage
                name="price"
                component="div"
                className="error-message"
              />
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
                selectedCategory={selectedCategory}
              ></MoreInfoStepTextArea>
            </MoreInfoStepLabel>
            <ErrorMessage
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
          disabled={isDisabled}
          buttonText="Done"
        />
      </AddPetFormButtonWrapper>
    </>
  );
};

export default MoreInfoStep;
