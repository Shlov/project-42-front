import { Formik } from 'formik';
import * as yup from 'yup';

import { useState } from 'react';
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
    .nullable(),
  city: yup.string().min(3).max(16, 'length must be less then 16').nullable(),
});

export const UserData = () => {
  const newUser = useSelector(selectorNewUser);

  const [isNewUser, setIsNewUser] = useState(newUser);

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

  const [isEditingAvatar, setIsEditingAvatar] = useState(true);
  const [isEditingName, setIsEditingName] = useState(true);
  const [isEditingEmail, setIsEditingEmail] = useState(true);
  const [isEditingBirthday, setIsEditingBirthday] = useState(true);
  const [isEditingPhone, setIsEditingPhone] = useState(true);
  const [isEditingCity, setIsEditingCity] = useState(true);

  const handleChangeAvatar = e => {
    const file = e.target.files[0];
    const objURL = URL.createObjectURL(file);
    setAvatar(objURL);
    setUserImage(file);
    setIsEditingAvatar(true);
  };
  const formData = new FormData();
  const handleSubmitInput = async values => {
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
    await dispatch(updateUser(formData));
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
          {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
            <FormContainer autoComplete="off">
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
                  onBlur={handleBlur}
                  onChange={handleChangeAvatar}
                  accept="image/*,.png,.jpg,.gif,.web"
                />
                {isEditingAvatar ? (
                  <BtnPhoto
                    type="submit"
                    onClick={() => setIsEditingAvatar(false)}                 
                  >
                    <SvgIcon>
                      <use href={icons + '#camera'} />
                    </SvgIcon>
                    Edit photo
                  </BtnPhoto>
                ) : (
                  <BtnPhoto
                    type="button"
                    onClick={() => setIsEditingAvatar(true)}
                    onSubmit={handleSubmit}   
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
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                 
                    disabled={!isEditingName ? false : true}
                  />
                    {errors.name && touched.name ? (<StyledErrorMessage>{errors.name}</StyledErrorMessage>) : null}
   
                </div>
                {isEditingName ? (
                  <BtnCheck
                    type="submit"
                    onClick={() => setIsEditingName(false)}
                   
                  ><BtnEdit>
                      <use href={icons + '#edit'} />
                    </BtnEdit>
                  </BtnCheck>
                ) : (
                  <BtnCheck
                    type="button"
                    onClick={() => setIsEditingName(true)}
                    onSubmit={handleSubmit}
                  ><SvgBtn>
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
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={!isEditingEmail ? false : true}
                  />
                    {errors.email && touched.email ? (<StyledErrorMessage>{errors.email}</StyledErrorMessage>) : null}
        
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
                    onSubmit={handleSubmit}
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
                    value={values.birthday}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={!isEditingBirthday ? false : true}
                  />
                    {errors.birthday && touched.birthday ? (<StyledErrorMessage>{errors.birthday}</StyledErrorMessage>) : null}
           
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
                    onSubmit={handleSubmit}
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
                    value={values.phone}
         
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+380000000000"
                    disabled={!isEditingPhone ? false : true}
                  />
                    {errors.phone && touched.phone ? (<StyledErrorMessage>{errors.phone}</StyledErrorMessage>) : null}
             
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
                    onSubmit={handleSubmit}
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
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Lviv"
                    disabled={!isEditingCity ? false : true}
                  />
                  {errors.city && touched.city ? (<StyledErrorMessage>{errors.city}</StyledErrorMessage>) : null}
           
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
                    onSubmit={handleSubmit}
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
