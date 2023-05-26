// Компонент містить в собі форму з полями реєстрації та кнопкою Registration і елементом навігації Login
//  - кнопка Registration - активізує перевірку на валідність введеної користувачем інформації. У разі їх валідності - відправляє запит на бекенд щодо реєстрації користувача.  У разі введення користувачем невалідних значень - візуалізувати це йому у вигляді повідомлення
//  - елемент навігації Login - переадресовує користувача на сторінку LoginPage.

//  Всі поля форми валідуються і виводять користувачу відповідну інформацію у випадку, якщо введене значення невалідне

//  Після реєстрації користувач повинен бути переадресований на сторінку UserPage з одночасним відкриттям модального вікна-вітання ModalCongrats. Якщо з бекенда було отримано помилку реєстрації - користувачу необхідно вивести  відповідну інформацію і вигляді нотіфікації
import { Formik } from 'formik';
import { useDispatch,useSelector } from 'react-redux';
import { userReg } from 'Redux/auth/operation';
import { useState } from 'react';
import { Navigate } from "react-router-dom";
import { getConnect } from "Redux/auth/selector";
import { Hearts } from 'react-loader-spinner';
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

export const RegForm = () => {
  const [toggleIconPass, setToggleIconPass] = useState(eyeCosed);
  const [typePass, setTypePass] = useState('password');
  const [toggleIconConfirm, setToggleIconConfirm] = useState(eyeCosed);
  const [typeCofirm, setTypeCofirm] = useState('password');
    const [isLoad, setIsLoad] = useState();

  const onLoader = e => {
   setIsLoad( Loader)
  }

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
  const handleSubmit = (values, props) => {
    dispatch(
      userReg({
        email: values.email,
        password: values.password,
      })
    );
    props.resetForm();
  };

      const isConnect = useSelector(getConnect);
  if (isConnect) {
    return (< Navigate to = "/user" replace />)
  }

  return (
    <Wrapper>
      <Formik
        initialValues={initialValue}
        validationSchema={yupRegValidation}
        onSubmit={handleSubmit}
      >
        {props => {
          return (
            <StyledForm>
              <Title>Registration</Title>
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
                <Label>
                  <Input
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    name="confirmPassword"
                    type={typeCofirm}
                    value={props.values.confirmPassword}
                    error={props.errors.confirmPassword}
                  />
                  <IconPas onClick={toggleConfirmInput}>
                    {toggleIconConfirm}
                  </IconPas>
                  <IconErrorValidate
                    value={props.values.confirmPassword}
                    error={props.errors.confirmPassword}
                  >
                    {' '}
                    <svg width={24} height={24}>
                      <use href={icons + '#error'}></use>
                    </svg>
                  </IconErrorValidate>
                  <IconOkValidate
                    value={props.values.confirmPassword}
                    error={props.errors.confirmPassword}
                  >
                    {' '}
                    <svg width={24} height={24}>
                      <use href={icons + '#shape'}></use>
                    </svg>
                  </IconOkValidate>
                  <TextOkValidation
                    value={props.values.confirmPassword}
                    error={props.errors.confirmPassword}
                  >
                    Ponfirm password is secure
                  </TextOkValidation>
                  <Error component="div" name="confirmPassword" />
                </Label>
              </Box>
              <Button type="submit" onClick={onLoader}>{isLoad} Registration</Button>
              <Text>
                Already have an account?
                <Span>
                  <Link to="/login">Login</Link>
                </Span>
              </Text>
            </StyledForm>
          );
        }}
      </Formik>
    </Wrapper>
  );
};
