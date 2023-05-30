import { object, string, mixed, number } from 'yup';

const nameRegexp = /^([a-zA-Zа-яА-ЯёЁёЁЇїІіҐґЄє\s]+)$/;
const birthdayRegexp =
  /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;

// Custom Yup test for birthday field
const validateBirthday = value => {
  const birthday = new Date(value.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
  const parsed = Date.parse(birthday);
  const today = Date.now();
  const diff = today - parsed;

  if (diff < 0 || diff > 9467280000000 || isNaN(parsed)) {
    return false;
  }

  return true;
};

//   Validation schema using Yup
const validationSchema = object().shape({
  category: string().oneOf(['your-pet', 'sell', 'lost/found', 'in good hands']),
  name: string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be at most 16 characters')
    .matches(nameRegexp, 'Name must contain only letters'),
  date: string()
    .required('Date is required')
    .matches(birthdayRegexp, 'Date must be in the format DD.MM.YYYY')
    .test('birthday', 'Invalid birthday', validateBirthday),
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
    is: value => ['sell', 'lost/found', 'in good hands'].includes(value),
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
    .min(3, 'Title must be at least 3 characters')
    .max(30, 'Title must be at most 30 characters')
    .required('Title is required'),
});

export default validationSchema;
