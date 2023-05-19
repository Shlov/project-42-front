// Компонент містить в собі форму з полями реєстрації та кнопкою Registration і елементом навігації Login
//  - кнопка Registration - активізує перевірку на валідність введеної користувачем інформації. У разі їх валідності - відправляє запит на бекенд щодо реєстрації користувача.  У разі введення користувачем невалідних значень - візуалізувати це йому у вигляді повідомлення
//  - елемент навігації Login - переадресовує користувача на сторінку LoginPage.

//  Всі поля форми валідуються і виводять користувачу відповідну інформацію у випадку, якщо введене значення невалідне

//  Після реєстрації користувач повинен бути переадресований на сторінку UserPage з одночасним відкриттям модального вікна-вітання ModalCongrats. Якщо з бекенда було отримано помилку реєстрації - користувачу необхідно вивести  відповідну інформацію і вигляді нотіфікації
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { userSignup } from 'redux/auth/authService';
import { string, object, ref } from 'yup';

const yupRegValidation = object().shape({
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
  confirmPassword: string()
    .oneOf([ref('password')], 'Password does not matched')
    .required('Confirm Password is Required'),
});

export const RegForm = () => {
  const initialValue = {
    email: '',
    password: '',
    confirmPassword: '',
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, props) => {
    dispatch(
      userSignup({
        email: values.email,
        password: values.password,
      })
    );
    props.resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={yupRegValidation}
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
            <Field
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              helperText={<ErrorMessage name="confirmPassword" />}
              error={
                props.errors.confirmPassword && props.touched.confirmPassword
              }
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};
