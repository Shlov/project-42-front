import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { addNotice } from 'Redux/notices/operation';
import { addPet } from 'Redux/pets/operations';
import { getAddNoticeSuccessfulConnection } from 'Redux/notices/selector';
import { getAddPetSuccessfulConnection } from 'Redux/pets/selectors';
import validationSchema from './validationSchema';
import CategoryStep from 'components/AddPetForm/CategoryStep/CategoryStep';
import PersonalDetailsStep from 'components/AddPetForm/PersonalDetailsStep/PersonalDetailsStep';
import MoreInfoStep from 'components/AddPetForm/MoreInfoStep/MoreInfoStep';
import {
  FormContainer,
  FormTitle,
  Stepper,
  StepperItem,
} from './AddPetForm.styled';

const AddPetForm = () => {
  const dispatch = useDispatch();
  const isAddNoticeResponseSuccessful = useSelector(
    getAddNoticeSuccessfulConnection
  );
  const isAddPetResponseSuccessful = useSelector(getAddPetSuccessfulConnection);
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [completedSteps, setCompletedSteps] = useState([]);

  const formValues = {
    category: selectedCategory,
    name: '',
    date: '',
    breed: '',
    avatar: '',
    sex: '',
    location: '',
    price: '',
    comments: '',
    title: '',
  };
  const steps = ['Choose Option', 'Personal Details', 'More Info'];

  const stepTitles = {
    1: 'Add pet',
    2: {
      'your-pet': 'Add my pet',
      sell: 'Add pet for sell',
      'lost/found': 'Add lost or found pet',
      'in good hands': 'Add pet for adoption',
    },
    3: {
      'your-pet': 'Add my pet',
      sell: 'Add pet for sell',
      'lost/found': 'Add lost or found pet',
      'in good hands': 'Add pet for adoption',
    },
  };

  // Function to handle category selection
  const handleCategorySelect = category => {
    setSelectedCategory(category);
  };

  const currentTitle =
    typeof stepTitles[step] === 'string' ? stepTitles[step] : ''; // code checks if stepTitles[step] is a string, and if it is, assigns it to currentTitle.  Otherwise, it assigns an empty string.

  const dynamicTitle =
    step > 1
      ? stepTitles[step][selectedCategory] || currentTitle
      : currentTitle;

  const handleNext = () => {
    setCompletedSteps([...completedSteps, step]);
    setStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleSubmit = values => {
    const formData = new FormData();
    // const { resetForm } = formikRef.current;

    formData.append('name', values.name);
    formData.append('birthday', values.date);
    formData.append('breed', values.breed);
    formData.append('imageURL', values.avatar);
    formData.append('comments', values.comments);

    if (selectedCategory === 'your-pet') {
      dispatch(addPet({ formData }));
      // resetForm();
      return;
    }

    formData.append(
      'categories',
      selectedCategory === 'in good hands' ? 'in good hands' : selectedCategory
    );
    formData.append('title', values.title);
    formData.append('sex', values.sex);
    formData.append('place', values.location);

    if (formValues.category === 'sell') {
      formData.append('price', values.price);
    }

    dispatch(addNotice({ formData }));
  };

  if (isAddNoticeResponseSuccessful) {
    return <Navigate to="/notices" />;
  }

  if (isAddPetResponseSuccessful) {
    return <Navigate to="/user" />;
  }

  const renderStepContent = step => {
    switch (step) {
      case 1:
        return (
          <CategoryStep
            onNext={handleNext}
            onSelectCategory={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
        );
      case 2:
        return (
          <PersonalDetailsStep
            onBack={handleBack}
            onNext={handleNext}
            selectedCategory={selectedCategory}
          />
        );
      case 3:
        return (
          <MoreInfoStep
            onBack={handleBack}
            selectedCategory={selectedCategory}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <FormContainer step={step}>
      <FormTitle>{dynamicTitle}</FormTitle>
      <Stepper>
        {steps.map((name, index) => (
          <StepperItem
            key={index}
            className={
              step === index + 1
                ? 'active'
                : completedSteps.includes(index + 1)
                  ? 'completed'
                  : ''
            }
          >
            {name}
          </StepperItem>
        ))}
      </Stepper>
      <Formik initialValues={formValues} validationSchema={validationSchema}>
        {() => <Form>{renderStepContent(step)}</Form>}
      </Formik>
    </FormContainer>
  );
};

export default AddPetForm;
