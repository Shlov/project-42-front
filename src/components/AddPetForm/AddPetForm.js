import { useState, useRef } from 'react';
import { Formik, Form } from 'formik';
import { object, string, mixed, number } from 'yup';
import CategoryStep from 'components/CategoryStep/CategoryStep';
import PersonalDetailsStep from 'components/PersonalDetailsStep/PersonalDetailsStep';
import MoreInfoStep from 'components/MoreInfoStep/MoreInfoStep';
import {
  FormContainer,
  FormTitle,
  Stepper,
  StepperItem,
} from './AddPetForm.styled';

//   Validation schema using Yup
const validationSchema = object().shape({
  category: string().oneOf(['your-pet', 'sell', 'lost-found', 'for-free']),
  name: string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be at most 16 characters'),
  date: string()
    .required('Date is required')
    .matches(
      /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,
      'Date must be in the format DD.MM.YYYY'
    ),
  breed: string()
    .min(2, 'Breed must be at least 2 characters')
    .max(16, 'Breed must be at most 16 characters')
    .required('Breed is required'),
  avatar: mixed()
    .required('File is required')
    //the test method from Yup to define a custom validation rule for the avatar field. The test checks if the value exists  (a file is selected) and if its size is less than or equal to 3MB (3 * 1024 * 1024 bytes). If the test fails, it will display the error message "File size must not exceed 3MB".
    .test(
      'fileSize',
      'File size must not exceed 3MB',
      value => value.size <= 3 * 1024 * 1024
    ),
  sex: string().when('category', {
    is: value => ['sell', 'lost-found', 'for-free'].includes(value),
    then: string()
      .required('Sex is required')
      .oneOf(['male', 'female'], 'Please select either "male" or "female"'),
  }),

  location: string()
    .matches(
      /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/,
      'Invalid location format. Please use city names only.'
    )
    .min(2, 'City name must be at least 2 characters')
    .required('Location is required'),
  price: number()
    .min(0, 'Price must be a positive number')
    .integer('Price must be an integer')
    .required('Price is required'),
  comments: string()
    .min(8, 'Comments must be at least 8 characters')
    .max(120, 'Comments must be at most 120 characters')
    .required('Comments are required'),

  title: string()
    .min(2, 'Title must be at least 2 characters')
    .required('Title is required'),
});

const AddPetForm = () => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [completedSteps, setCompletedSteps] = useState([]);
  const formikRef = useRef(null);

  const [formValues, setFormValues] = useState({
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
  });
  const steps = ['Choose Option', 'Personal Details', 'More Info'];

  const stepTitles = {
    1: 'Add pet',
    2: {
      'your-pet': 'Add my pet',
      sell: 'Add pet for sell',
      'lost-found': 'Add lost or found pet',
      'for-free': 'Add pet for adoption',
    },
    3: {
      'your-pet': 'Add my pet',
      sell: 'Add pet for sell',
      'lost-found': 'Add lost or found pet',
      'for-free': 'Add pet for adoption',
    },
  };

  // Function to handle category selection
  const handleCategorySelect = category => {
    setSelectedCategory(category);
    setFormValues(prevFormValues => ({
      ...prevFormValues,
      category: category,
    }));
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
    const { resetForm } = formikRef.current;

    formData.append('category', formValues.category);
    formData.append('name', values.name);
    formData.append('date', values.date);
    formData.append('breed', values.breed);
    formData.append('avatar', values.avatar);
    formData.append('comments', values.comments);

    if (formValues.category === 'your-pet') {
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      // dispatch(addMyPet(formData))
      resetForm();
      return;
    }

    formData.append('title', values.title);
    formData.append('sex', values.sex);
    formData.append('location', values.location);

    if (formValues.category === 'lost-found') {
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      // dispatch(addNotice({ category: 'lost-found', formData }));
      resetForm();
      return;
    }

    if (formValues.category === 'for-free') {
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      // dispatch(addNotice({ category: 'in-good-hands', formData }));
      resetForm();
      return;
    }

    formData.append('price', values.price);

    if (formValues.category === 'sell') {
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      // dispatch(addNotice({ category: 'sell', formData }));
      resetForm();
      return;
    }
  };

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
            setFormValues={setFormValues}
          />
        );
      case 3:
        return (
          <MoreInfoStep
            onBack={handleBack}
            selectedCategory={selectedCategory}
            setFormValues={setFormValues}
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
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        innerRef={formikRef}
      >
        {({ values }) => <Form>{renderStepContent(step)}</Form>}
      </Formik>
    </FormContainer>
  );
};

export default AddPetForm;
