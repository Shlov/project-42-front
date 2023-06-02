import { Formik } from 'formik';
import * as yup from 'yup';

import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorNewUser, selectUser } from 'Redux/auth/selector';
import { updateUser } from 'Redux/auth/operation';

import icons from 'images/icons.svg';
import { LogoutBtn } from 'components/Logout/Logout';
import { PetsData } from 'components/PetsData/PetsData';
import { ModalCongrats } from 'components/ModalCongrats/ModalCongrats';

import {
  MainContainer,
  Box,
  TitleCard,
  FormContainer,
  BtnCheck,
  InputContainer,
  InputAvatar,
  StyledErrorMessage,
  AvatarContainer,
  BtnPhoto,
  ImgContainer,
  SvgIcon,
  SvgBtn,
  LabelContainer,
  Photosvg,
  ImgAvatar,
  BtnEdit,
} from './UserData.styled';

const schema = yup.object().shape({
  name: yup.string().min(3).max(16, 'length must be less then 15').required(),
  email: yup
    .string()
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'please enter a valid email')
    .email('invalid e-mail')
    .required(),
  birthday: yup.date('please enter a valid date 00.00.0000').nullable(),
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, 'enter phone number in format +380')
    .required(),
  city: yup.string().min(3).max(16, 'length must be less then 16').nullable(),
});

export const UserData = () => {
  const newUser = useSelector(selectorNewUser);
  const theme = useSelector(state => state.main.theme);

  const [isNewUser, setIsNewUser] = useState(newUser);

  const inputRef = useRef();

  const handleCongratsOut = () => {
    setIsNewUser(false);
  };

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const avatarURL = user.avatarURL;
  const name = user.name;
  const email = user.email;
  const phone = user.phone;
  const birthday = user.birthday;
  const city = user.city;

  const [userImage, setUserImage] = useState(avatarURL);
  const [avatar, setAvatar] = useState(avatarURL);

  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [isEditingName, setIsEditingName] = useState(true);
  const [isEditingEmail, setIsEditingEmail] = useState(true);
  const [isEditingBirthday, setIsEditingBirthday] = useState(true);
  const [isEditingPhone, setIsEditingPhone] = useState(true);
  const [isEditingCity, setIsEditingCity] = useState(true);

  const handleChangeAvatar = e => {
    const file = e.target.files[0];
    if (file) {
      const objURL = URL.createObjectURL(file);
      setAvatar(objURL);
      setUserImage(file);
      setIsEditingAvatar(true);
    }
  };
  const formData = new FormData();

  const handleSubmitInput = (values, props) => {
    if (userImage) {
      formData.append('avatarURL', userImage);
    }
    if (values.name) {
      formData.append('name', values.name);
    }
    if (values.email) {
      formData.append('email', values.email);
    }

    if (values.phone) {
      formData.append('phone', values.phone);
    }
    if (values.city) {
      formData.append('city', values.city);
    }
    if (values.birthday) {
      formData.append('birthday', values.birthday);
    }
    dispatch(updateUser(formData));
  };

  return (
    <MainContainer>
      {isNewUser && (
        <div onClick={handleCongratsOut}>
          <ModalCongrats />
        </div>
      )}
      <Box>
        <TitleCard>My information:</TitleCard>
        <Formik
          enableReinitialize={true}
          initialValues={{
            avatarURL: avatarURL,
            name: name,
            email: email,
            phone: phone,
            birthday: birthday,
            city: city,
          }}
          validationSchema={schema}
          onSubmit={handleSubmitInput}
        >
          {props => (
            <FormContainer autoComplete="off" theme={theme}>
              <AvatarContainer>
                <ImgContainer>
                  {!avatar ? (
                    <Photosvg>
                      <use href={icons + '#photodefault'} />
                    </Photosvg>
                  ) : (
                    <ImgAvatar src={avatar} alt="Photo user" />
                  )}
                </ImgContainer>
                <label htmlFor="avatar">
                  <InputAvatar
                    id="avatar"
                    type="file"
                    name="avatar"
                    onBlur={props.handleBlur}
                    onChange={handleChangeAvatar}
                    accept="image/*,.png,.jpg,.gif,.web"
                    innerRef={inputRef}
                  />
                  {!isEditingAvatar ? (
                    <BtnPhoto
                      type="submit"
                      onClick={() => {
                        setIsEditingAvatar(true);
                        inputRef.current.click();
                      }}
                      theme={theme}
                    >
                      <SvgIcon>
                        <use href={icons + '#camera'} />
                      </SvgIcon>
                      Edit photo
                    </BtnPhoto>
                  ) : (
                    <BtnPhoto
                      type="button"
                      onClick={() => setIsEditingAvatar(false)}
                      onSubmit={props.handleSubmit}
                      theme={theme}
                    >
                      <SvgIcon>
                        <use href={icons + '#check'} />
                      </SvgIcon>
                      Confirm
                    </BtnPhoto>
                  )}
                </label>
              </AvatarContainer>

              <div>
                <LabelContainer htmlFor="name">
                  Name:
                  <div>
                    <InputContainer
                      type="text"
                      name="name"
                      id="name"
                      value={props.values.name}
                      error={props.errors.name}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      disabled={!isEditingName ? false : true}
                      theme={theme}
                    />
                    {props.errors.name && (
                      <StyledErrorMessage>
                        {props.errors.name}
                      </StyledErrorMessage>
                    )}
                  </div>
                  {isEditingName ? (
                    <BtnCheck
                      type="submit"
                      onClick={() => setIsEditingName(false)}
                    >
                      <BtnEdit>
                        <use href={icons + '#edit'} />
                      </BtnEdit>
                    </BtnCheck>
                  ) : (
                    <BtnCheck
                      type="button"
                      onClick={() => setIsEditingName(true)}
                      onSubmit={props.handleSubmit}
                    >
                      <SvgBtn>
                        <use href={icons + '#check'} />
                      </SvgBtn>
                    </BtnCheck>
                  )}
                </LabelContainer>

                <LabelContainer htmlFor="email">
                  Email:
                  <div>
                    <InputContainer
                      type="email"
                      name="email"
                      id="email"
                      value={props.values.email}
                      error={props.errors.email}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      disabled={!isEditingEmail ? false : true}
                      theme={theme}
                    />
                    {props.errors.email && (
                      <StyledErrorMessage>
                        {props.errors.email}
                      </StyledErrorMessage>
                    )}
                  </div>
                  {isEditingEmail ? (
                    <BtnCheck
                      type="submit"
                      onClick={() => setIsEditingEmail(false)}
                    >
                      <BtnEdit>
                        <use href={icons + '#edit'} />
                      </BtnEdit>
                    </BtnCheck>
                  ) : (
                    <BtnCheck
                      type="button"
                      onClick={() => setIsEditingEmail(true)}
                      onSubmit={props.handleSubmit}
                    >
                      <SvgBtn>
                        <use href={icons + '#check'} />
                      </SvgBtn>
                    </BtnCheck>
                  )}
                </LabelContainer>

                <LabelContainer htmlFor="birthday">
                  Birthday:
                  <div>
                    <InputContainer
                      type="date"
                      name="birthday"
                      id="birthday"
                      value={props.values.birthday}
                      error={props.errors.birthday}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      disabled={!isEditingBirthday ? false : true}
                      theme={theme}
                    />
                    {props.errors.birthday && (
                      <StyledErrorMessage>
                        {props.errors.birthday}
                      </StyledErrorMessage>
                    )}
                  </div>
                  {isEditingBirthday ? (
                    <BtnCheck
                      type="submit"
                      onClick={() => setIsEditingBirthday(false)}
                    >
                      <BtnEdit>
                        <use href={icons + '#edit'} />
                      </BtnEdit>
                    </BtnCheck>
                  ) : (
                    <BtnCheck
                      type="button"
                      onClick={() => setIsEditingBirthday(true)}
                      onSubmit={props.handleSubmit}
                    >
                      <SvgBtn>
                        <use href={icons + '#check'} />
                      </SvgBtn>
                    </BtnCheck>
                  )}
                </LabelContainer>

                <LabelContainer htmlFor="phone">
                  Phone:
                  <div>
                    <InputContainer
                      type="tel"
                      name="phone"
                      id="phone"
                      value={props.values.phone}
                      error={props.errors.phone}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      placeholder="+380000000000"
                      disabled={!isEditingPhone ? false : true}
                      theme={theme}
                    />
                    {props.errors.phone && (
                      <StyledErrorMessage>
                        {props.errors.phone}
                      </StyledErrorMessage>
                    )}
                  </div>
                  {isEditingPhone ? (
                    <BtnCheck
                      type="submit"
                      onClick={() => setIsEditingPhone(false)}
                    >
                      <BtnEdit>
                        <use href={icons + '#edit'} />
                      </BtnEdit>
                    </BtnCheck>
                  ) : (
                    <BtnCheck
                      type="button"
                      onClick={() => setIsEditingPhone(true)}
                      onSubmit={props.handleSubmit}
                    >
                      <SvgBtn>
                        <use href={icons + '#check'} />
                      </SvgBtn>
                    </BtnCheck>
                  )}
                </LabelContainer>

                <LabelContainer htmlFor="city">
                  City:
                  <div>
                    <InputContainer
                      type="text"
                      name="city"
                      id="city"
                      value={props.values.city}
                      error={props.errors.city}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      placeholder="Lviv"
                      disabled={!isEditingCity ? false : true}
                      theme={theme}
                    />
                    {props.errors.city && (
                      <StyledErrorMessage>
                        {props.errors.city}
                      </StyledErrorMessage>
                    )}
                  </div>
                  {isEditingCity ? (
                    <BtnCheck
                      type="submit"
                      onClick={() => setIsEditingCity(false)}
                    >
                      <BtnEdit>
                        <use href={icons + '#edit'} />
                      </BtnEdit>
                    </BtnCheck>
                  ) : (
                    <BtnCheck
                      type="button"
                      onClick={() => setIsEditingCity(true)}
                      onSubmit={props.handleSubmit}
                    >
                      <SvgBtn>
                        <use href={icons + '#check'} />
                      </SvgBtn>
                    </BtnCheck>
                  )}
                </LabelContainer>

                <LogoutBtn />
              </div>
            </FormContainer>
          )}
        </Formik>
      </Box>
      <PetsData />
    </MainContainer>
  );
};
