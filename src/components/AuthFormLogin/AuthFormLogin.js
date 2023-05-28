// Компонент містить в собі форму з полями логінізації та кнопкою Login і елементом навігації Register
//  - кнопка Login - активізує перевірку на валідність введеної користувачем інформації. У разі їх валідності - відправляє запит на бекенд щодо авторизації користувача.  У разі введення користувачем невалідних значень - візуалізувати це йому у вигляді повідомлення
//  - елемент навігації Register - переадресовує користувача на сторінку RegisterPage

//  Всі поля форми валідуються і виводять користувачу відповідну інформацію у випадку, якщо введене значення не валідне

//  Після авторизації користувач повинен бути переадресований на сторінку UserPage. Якщо з бекенда було отримано помилку авторизації - користувачу необхідно вивести  відповідну інформацію і вигляді нотіфікації
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from 'Redux/auth/operation';
import { Navigate } from 'react-router-dom';
import { getConnect } from 'Redux/auth/selector';
import { Hearts } from 'react-loader-spinner';

import icons from 'images/icons.svg';
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
  IconOkValidate,
  IconOkValidateMail,
  TextOkValidation,
  IconErrorValidateMail,
  IconErrorValidate,
  LoaderStyle,
} from '../AuthFormRegister/AuthFormRegister.styled';

const yupLoginValidation = yup.object().shape({
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
});

const eyeCosed = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#eye-closed'}></use>
    </SVG>
  );
};

const eyeOpen = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#eye-open'}></use>
    </SVG>
  );
};

const Loader = () => {
  return (
    <LoaderStyle>
      <Hearts
        color="orange"
        strokeWidth="5"
        animationDuration="1.5"
        width="96"
        visible={true}
      />
    </LoaderStyle>
  );
};

export const LogForm = () => {
  const [toggleIconPass, setToggleIconPass] = useState(eyeCosed);
  const [typePass, setTypePass] = useState('password');
  const [isLoad, setIsLoad] = useState();

  const onLoader = e => {
    setIsLoad(Loader);
  };

  const togglePassInput = e => {
    if (typePass === 'password') {
      setTypePass('text');
      setToggleIconPass(eyeOpen);
    } else {
      setTypePass('password');
      setToggleIconPass(eyeCosed);
    }
  };

  const initialValue = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, props) => {
    dispatch(userLogin(values));
    props.resetForm();
  };

  const isConnect = useSelector(getConnect);

  if (isConnect) {
    return <Navigate to="/user" replace />;
  }

  return (
    <Wrapper>
      <Formik
        initialValues={initialValue}
        validationSchema={yupLoginValidation}
        onSubmit={handleSubmit}
      >
        {props => {
          return (
            <StyledForm>
              <Title>Login</Title>
              <Box>
                <Label>
                  <Input
                    placeholder="Email"
                    label="Email"
                    type="Email"
                    name="email"
                    error={props.errors.email}
                    value={props.values.email}
                  />
                  <IconErrorValidateMail
                    value={props.values.email}
                    error={props.errors.email}
                  >
                    {' '}
                    <svg width={24} height={24}>
                      <use href={icons + '#error'}></use>
                    </svg>
                  </IconErrorValidateMail>
                  <IconOkValidateMail
                    value={props.values.email}
                    error={props.errors.email}
                  >
                    {' '}
                    <svg width={24} height={24}>
                      <use href={icons + '#shape'}></use>
                    </svg>
                  </IconOkValidateMail>
                  <TextOkValidation
                    value={props.values.email}
                    error={props.errors.email}
                  >
                    Mail is secure
                  </TextOkValidation>
                  <Error component="div" name="email" />
                </Label>
                <Label>
                  <Input
                    placeholder="Password"
                    label="Password"
                    name="password"
                    type={typePass}
                    error={props.errors.password}
                    value={props.values.password}
                  />
                  <IconPas onClick={togglePassInput}>{toggleIconPass}</IconPas>
                  <IconErrorValidate
                    value={props.values.password}
                    error={props.errors.password}
                  >
                    {' '}
                    <svg width={24} height={24}>
                      <use href={icons + '#error'}></use>
                    </svg>
                  </IconErrorValidate>
                  <IconOkValidate
                    value={props.values.password}
                    error={props.errors.password}
                  >
                    {' '}
                    <svg width={24} height={24}>
                      <use href={icons + '#shape'}></use>
                    </svg>
                  </IconOkValidate>
                  <TextOkValidation
                    value={props.values.password}
                    error={props.errors.password}
                  >
                    Password is secure
                  </TextOkValidation>
                  <Error component="div" name="password" />
                </Label>
              </Box>

              <Button type="submit" onClick={onLoader}>
                {isLoad}
                Login
              </Button>
              <Text>
                Already have an account?
                <Span>
                  <Link to="/register">Registration</Link>
                </Span>
              </Text>
            </StyledForm>
          );
        }}
      </Formik>
    </Wrapper>
  );
};
