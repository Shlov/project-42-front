// Компонент містить в собі форму з полями логінізації та кнопкою Login і елементом навігації Register
//  - кнопка Login - активізує перевірку на валідність введеної користувачем інформації. У разі їх валідності - відправляє запит на бекенд щодо авторизації користувача.  У разі введення користувачем невалідних значень - візуалізувати це йому у вигляді повідомлення
//  - елемент навігації Register - переадресовує користувача на сторінку RegisterPage

//  Всі поля форми валідуються і виводять користувачу відповідну інформацію у випадку, якщо введене значення не валідне

//  Після авторизації користувач повинен бути переадресований на сторінку UserPage. Якщо з бекенда було отримано помилку авторизації - користувачу необхідно вивести  відповідну інформацію і вигляді нотіфікації
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { userLogin } from 'Redux/auth/authService';
import { string, object } from 'yup';

const yupLoginValidation = object().shape({
  email: string()
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email')
    .email('Enter a Vaid Email')
    .required('Email is Required'),
  password: string()
    .required('Enter Your Password')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
      'Password must include at least one capital letter and one digit'
    )
    .min(8, 'Password Should be minimum 8 character')
    .max(50, 'Too long'),
});

export const LogForm = () => {
  const initialValue = {
    email: '',
    password: '',
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, props) => {
    dispatch(userLogin(values));
    props.resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={yupLoginValidation}
      onSubmit={handleSubmit}
    >
      {props => {
        return (
          <Form>
            <Field
              label="Email"
              type="Email"
              name="email"
              helperText={<ErrorMessage name="email" />}
              error={props.errors.email && props.touched.email}
            />

            <Field
              label="Password"
              name="password"
              type="password"
              helperText={<ErrorMessage name="password" />}
              error={props.errors.password && props.touched.password}
            />

            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};
