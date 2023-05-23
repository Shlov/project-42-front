// Компонент містить в собі форму, що складається з наступних кроків:
// - Сhoose option - на якому користувач обирає категорію оголошення
// - Personal Details - на якому користувач заповнює детальну інформацію про улюбленця (імʼя, дату народження та його породу)
// - More info - на якому користувач додає фотокартку улюбленця та особисті коментарі
// Кнопка Cancel переадресовує користувача на сторінку, з якої він до того перейшов на сторінку AddPetPage.
// Кнопка Next - активізує перевірку на валідність введеної користувачем інформації. У разі їх валідності - користувач переходить до наступного кроку заповнення форми. У разі введення користувачем невалідних значень - візуалізувати це йому у вигляді повідомлень
// Кнопка Back - повертає користувача на попередній крок заповнення форми з полями, заповненими інформацією, яку ввів користувач до того
// Кнопка Done - активізує перевірку на валідність введеної користувачем інформації. У разі їх валідності - відправляє запит на бекенд про створення картки з особистим домашнім улюбленцем користувача або про створення оголошення (в залежності від обраної користувачем категорії). У разі введення користувачем невалідних значень - візуалізувати це йому у вигляді повідомлень
// Всі поля форми обов'язкові до заповнення
// Після успішного створення картки, користувача необхідно переадресувата на сторінку UserPage або на сторінку NoticesPage (в залженості від обраної користувачем категорії). Якщо з бекенда було отримано помилку при створенні картки - користувачу необхідно вивести відповідну інформацію у вигляді нотіфікації

import { useState } from 'react';
import { Formik, Form } from 'formik';
import { object, string, mixed, number } from 'yup';
import CategoryStep from 'components/CategoryStep/CategoryStep';
import PersonalDetailsStep from 'components/PersonalDetailsStep/PersonalDetailsStep';
import MoreInfoStep from 'components/MoreInfoStep/MoreInfoStep';

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
    .required('Location is required')
    .matches(
      /^[a-zA-Z\s,]+$/,
      'Invalid location format. Please use city names only.'
    ),
  price: number()
    .required('Price is required')
    .min(0, 'Price must be a positive number')
    .integer('Price must be an integer'),
  comments: string()
    .min(8, 'Comments must be at least 8 characters')
    .max(120, 'Comments must be at most 120 characters')
    .required(),

  title: string()
    .min(2, 'Title must be at least 2 characters')
    .required('Title is required'),
});

const AddPetForm = () => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');

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

  console.log(formValues);

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
    setStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleSubmit = values => {
    console.log(values);
    // const formData = new FormData();
    // // Append text data to the FormData object
    // formData.append('category', values.category);
    // formData.append('name', values.name);
    // formData.append('date', values.date);
    // formData.append('breed', values.breed);
    // formData.append('sex', values.sex);
    // formData.append('location', values.location);
    // formData.append('price', values.price);
    // formData.append('comments', values.comments);
    // // Append file data to the FormData object
    // formData.append('avatar', values.avatar);
    // console.log('formData', formData);
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
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <h2>{dynamicTitle}</h2>
      <ul>
        {steps.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>{renderStepContent(step)}</Form>
      </Formik>
    </>
  );
};

export default AddPetForm;
