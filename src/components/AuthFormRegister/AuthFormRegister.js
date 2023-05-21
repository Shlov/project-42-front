// Компонент містить в собі форму з полями реєстрації та кнопкою Registration і елементом навігації Login
//  - кнопка Registration - активізує перевірку на валідність введеної користувачем інформації. У разі їх валідності - відправляє запит на бекенд щодо реєстрації користувача.  У разі введення користувачем невалідних значень - візуалізувати це йому у вигляді повідомлення
//  - елемент навігації Login - переадресовує користувача на сторінку LoginPage.

//  Всі поля форми валідуються і виводять користувачу відповідну інформацію у випадку, якщо введене значення невалідне

//  Після реєстрації користувач повинен бути переадресований на сторінку UserPage з одночасним відкриттям модального вікна-вітання ModalCongrats. Якщо з бекенда було отримано помилку реєстрації - користувачу необхідно вивести  відповідну інформацію і вигляді нотіфікації 
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { userReg } from 'Redux/auth/operation';
import { useState } from 'react';
import * as yup from 'yup';
import {
  Box,
  Button,
  Link,
  Span,
  Text,
  Title,
  Wrapper,
  StyledForm,
  Input,
  Error,
  Label,
  IconPas,
  SVG,
} from './AuthFormRegister.styled';
import icons from 'images/icons.svg';

const yupRegValidation = yup.object().shape({
  email: yup
    .string()
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email')
    .email('Enter a Vaid Email')
    .required('Email is Required'),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
      'Password must contain one capital letter and one number'
    )
    .min(6, 'Password Should be minimum 8 character')
    .max(16, 'Too long')
    .required('Enter Your Password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password does not matched')
    .required('Confirm Password is Required'),
});

export const eyeCosed = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#eye-closed'}></use>
    </SVG>
  );
};

export const eyeOpen = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#eye-open'}></use>
    </SVG>
  );
};

export const RegForm = () => {
  const [toggleIconPass, setToggleIconPass] = useState(eyeCosed);
  const [typePass, setTypePass] = useState('password');
  const [toggleIconConfirm, setToggleIconConfirm] = useState(eyeCosed);
  const [typeCofirm, setTypeCofirm] = useState('password');

  const togglePassInput = e => {
    if (typePass === 'password') {
      setTypePass('text');
      setToggleIconPass(eyeOpen);
    } else {
      setTypePass('password');
      setToggleIconPass(eyeCosed);
    }
  };

  const toggleConfirmInput = e => {
    if (typeCofirm === 'password') {
      setTypeCofirm('text');
      setToggleIconConfirm(eyeOpen);
    } else {
      setTypeCofirm('password');
      setToggleIconConfirm(eyeCosed);
    }
  };

  const initialValue = {
    email: '',
    password: '',
    confirmPassword: '',
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      userReg({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValue}
        validationSchema={yupRegValidation}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <Title>Registration</Title>
          <Box>
            <Label>
              <Input
                placeholder="Email"
                label="Email"
                type="Email"
                name="email"
              />
              <Error component="div" name="email" />
            </Label>
            <Label>
              <Input
                placeholder="Password"
                label="Password"
                name="password"
                type={typePass}
              />
              <IconPas onClick={togglePassInput}>{toggleIconPass}</IconPas>
              <Error component="div" name="password" /> 
            </Label>
            <Label>
              <Input
                placeholder="Confirm Password"
                label="Confirm Password"
                name="confirmPassword"
                type={typeCofirm}
              />
              <IconPas onClick={toggleConfirmInput}>
                {toggleIconConfirm}
              </IconPas>
              <Error component="div" name="confirmPassword" />
            </Label>
          </Box>
          <Button type="submit">Registration</Button>
          <Text>
            Already have an account?
            <Span>
              <Link to="/login">Login</Link>
            </Span>
          </Text>
        </StyledForm>
      </Formik>
    </Wrapper>
  );
};
