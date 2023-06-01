import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormikContext } from 'formik';
import { TailSpin } from 'react-loader-spinner';
import icons from '../../../images/icons.svg';
import { Label } from '../Input/Input.styled';
import { AddPetFormButtonWrapper } from 'components/AddPetForm/AddPetFormButtons/AddPetFormButtonWrapper.styled';
import {
  AvatarField,
  AvatarLabel,
  AvatarWrapper,
  ErrorMessageContainer,
  LocationPriceCommentFieldWrapper,
  MoreInfoStepContainer,
  MoreInfoStepInput,
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
import { getIsLoadNotices } from 'Redux/notices/selector';
import { getIsLoading } from 'Redux/pets/selectors';

const MoreInfoStep = ({ onBack, selectedCategory, handleSubmit }) => {
  const { values, setTouched, touched, errors, setFieldValue } =
    useFormikContext();
  const theme = useSelector(state => state.main.theme);
  const [doneClicked, setDoneClicked] = useState(false); // State variable to track Next button click
  const isAddNoticeLoading = useSelector(getIsLoadNotices);
  const isAddPetLoading = useSelector(getIsLoading);

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
    } else if (values.comments.length > 300) {
      formErrors.comments = 'Comments must be at most 300 characters';
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
              <SexFieldTitle theme={theme}>The sex</SexFieldTitle>
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
          <AvatarLabel selectedCategory={selectedCategory} theme={theme}>
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
                accept="'image/png', 'image/jpg', 'image/jpeg'"
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
              <Label theme={theme}>
                Location
                <MoreInfoStepInput
                  type="text"
                  name="location"
                  placeholder="Type of location"
                  errors={touched.location && errors.location}
                />
              </Label>
              <ErrorMessageContainer name="location" component="div" />
            </div>
          )}

          {/* Field "price" is only for the "sell" category */}
          {selectedCategory === 'sell' && (
            <div>
              <Label theme={theme}>
                Price
                <MoreInfoStepInput
                  type="number"
                  min="0"
                  name="price"
                  placeholder="Type of price"
                  errors={touched.price && errors.price}
                />
              </Label>
              <ErrorMessageContainer name="price" component="div" />
            </div>
          )}

          {/* Field "comments" for additional comments */}
          <div>
            <Label theme={theme}>
              Comments
              <MoreInfoStepTextArea
                name="comments"
                placeholder="Type comments"
                component="textarea"
                category={selectedCategory}
                errors={touched.comments && errors.comments}
              ></MoreInfoStepTextArea>
            </Label>
            <ErrorMessageContainer
              name="comments"
              component="div"
              className="error-message"
            />
          </div>
        </LocationPriceCommentFieldWrapper>
      </MoreInfoStepContainer>
      {isAddNoticeLoading || isAddPetLoading ? (
        <TailSpin
          height="80"
          width="80"
          color="#54ADFF"
          ariaLabel="tail-spin-loading"
          radius="1"
          visible={true}
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      ) : (
        <AddPetFormButtonWrapper>
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
      )}
    </>
  );
};

export default MoreInfoStep;
