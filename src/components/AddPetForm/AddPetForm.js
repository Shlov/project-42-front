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

import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { object, string, mixed, number } from 'yup';
import CategoryStep from 'components/CategoryStep/CategoryStep';
import PersonalDetailsStep from 'components/PersonalDetailsStep/PersonalDetailsStep';
import MoreInfoStep from 'components/MoreInfoStep/MoreInfoStep';

//   Validation schema using Yup
const validationSchema = object().shape({
  name: string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be at most 16 characters'),
  date: string()
    .required('Date is required')
    .matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/,
      'Date must be in the format MM/DD/YYYY'
    ),
  breed: string()
    .required('Breed is required')
    .min(2, 'Breed must be at least 2 characters')
    .max(16, 'Breed must be at most 16 characters'),
  avatar: mixed()
    .required('File is required')
    //the test method from Yup to define a custom validation rule for the avatar field. The test checks if the value exists  (a file is selected) and if its size is less than or equal to 3MB (3 * 1024 * 1024 bytes). If the test fails, it will display the error message "File size must not exceed 3MB".
    .test(
      'fileSize',
      'File size must not exceed 3MB',
      value => value.size <= 3 * 1024 * 1024
    ),
  //   sex: string().when('category', {
  //     is: val => ['sell', 'lost-found', 'for-free'].includes(val),
  //     then: string()
  //       .oneOf(['male', 'female'], 'Please select either "male" or "female"')
  //       .required('Sex is required'),
  //   }),
  //   location: mixed().when('category', {
  //     is: val => ['sell', 'lost-found', 'for-free'].includes(val),
  //     then: string()
  //       .required('Location is required')
  //       .matches(
  //         /^[a-zA-Z\s,]+$/,
  //         'Invalid location format. Please use city names only.'
  //       ),
  //     otherwise: mixed().notRequired(),
  //   }),
  //   price: number().when('category', {
  //     is: 'sell',
  //     then: number()
  //       .required('Price is required')
  //       .positive('Price must be greater than 0'),
  //     otherwise: number().notRequired(),
  //   }),
  comments: string()
    .min(8, 'Comments must be at least 8 characters')
    .max(120, 'Comments must be at most 120 characters'),
});

const AddPetForm = () => {
  //   const location = useLocation();
  //   const locRef = useRef(location.state?.from ?? '/main'); // for Back button

  const [step, setStep] = useState(1);

  const initialValues = {
    category: '',
    name: '',
    date: '',
    breed: '',
    avatar: null,
    sex: '',
    location: '',
    price: '',
    comments: '',
  };

  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleSubmit = values => {
    // Handle form submission
    console.log(values);
  };

  const renderStepContent = step => {
    switch (step) {
      case 1:
        return <CategoryStep onNext={handleNext} />;
      case 2:
        return <PersonalDetailsStep onBack={handleBack} onNext={handleNext} />;
      case 3:
        return <MoreInfoStep onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>{renderStepContent(step)}</Form>
    </Formik>
  );
};

export default AddPetForm;
