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
  Label,
  InputAvatar,
  StyledErrorMessage,
  StyledErrorMessageEmail,
  StyledErrorMessagePhone,
  StyledErrorMessageCity,
  BtnText,
  BtnPhoto,
  ImgContainer,
  SvgIcon,
  SVGBtn,
  DIV,
  ImgCon,
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


const Camera = () => {
  return (
    <BtnPhoto>
      <SvgIcon>
        <use href={icons + '#camera'} />
      </SvgIcon>
      <BtnText>Edit photo</BtnText>
    </BtnPhoto>
  );
};

const CheckBlue = () => {
  return (
    <BtnPhoto>
      <SvgIcon>
        <use href={icons + '#check'} />
      </SvgIcon>
      <BtnText>Confirm</BtnText>
    </BtnPhoto>
  );
};

export const UserData = () => {
  const newUser = useSelector(selectorNewUser);

  const [isNewUser, setIsNewUser] = useState(newUser);

  const handleCongratsOut = () => {
    setIsNewUser(false);
  };

 
  const dispatch = useDispatch();
  const [toggleIconPass, setToggleIconPass] = useState(Camera);

  const user = useSelector(selectUser);
  console.log(user);
  const avatarURL = user.avatarURL;
  const name = user.name;
  const email = user.email;
  const phone = user.phone;
  const birthday = user.birthday;
  const city = user.city;


  const [userImage, setUserImage] = useState(avatarURL);
  const [avatar, setAvatar] = useState(avatarURL);
 
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingBirthday, setIsEditingBirthday] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingCity, setIsEditingCity] = useState(false);

  const handleChangeAvatar = e => {
    const file = e.target.files[0];
    const objURL = URL.createObjectURL(file);
    setAvatar(objURL);
    setUserImage(file);
};
const formData = new FormData();
  const handleSubmitInput = async (values) => {
    if (userImage) {
      formData.append('avatarURL', userImage);
  }
    if(values.name){
      formData.append('name', values.name);
    }
 if(values.email){
  formData.append('email', values.email);}
    
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
        <div onClick={handleCongratsOut}><ModalCongrats /></div>
      ) }
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
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
     
        }) => (
          <FormContainer autoComplete="off" >
            <ImgCon htmlFor="avatar">
              <ImgContainer>
                {!avatar ? (
                  <Photosvg>
                    <use href={icons + '#photodefault'} />
                  </Photosvg>

                  
                ) : (<ImgAvatar
                  src={avatar}
                  alt="Photo user"
                />
                  
                )}
              </ImgContainer>

              <label
                onClick={() => setToggleIconPass(CheckBlue)}
                onSubmit={handleSubmit}
              >
                {toggleIconPass}
                <InputAvatar
                  id="avatar"
                  type="file"
                  name="avatar"
                  onBlur={handleBlur}
                  onChange={handleChangeAvatar}
                  accept="image/*,.png,.jpg,.gif,.web"
                />
              </label>
            </ImgCon>
            <div>
              <DIV htmlFor="name">
                <Label>Name: </Label>
                {isEditingName ? (
                  <InputContainer
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors.name}
                  />
                ) : (
                  <InputContainer 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={values.name} 
                  errors={errors.name}
                  onBlur={handleBlur}
                   />
                )}
                {isEditingName ? (
                  <BtnCheck
                    type="submit"
                    onClick={() => setIsEditingName(false)}
                    onSubmit={handleSubmit}
                  >
                    <SVGBtn>
                      <use href={icons + '#check'} />
                    </SVGBtn>
                  </BtnCheck>
                ) : (
                  <BtnCheck  type="button" onClick={() => setIsEditingName(true)}>
                    <BtnEdit>
                      <use href={icons + '#edit'} />
                    </BtnEdit>
                  </BtnCheck>
                )}
            <StyledErrorMessage name="name" component="div"/>
              </DIV>

              <DIV htmlFor="email">
                <Label>Email: </Label>
                {isEditingEmail ? (
                  <InputContainer
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    errors={errors.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  /> 
                ) : (
                  <InputContainer 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={values.email} 
                  errors={errors.email}
                  onBlur={handleBlur} 

                  />
                )}
                {isEditingEmail ? (
                  <BtnCheck
                    type="submit"
                    onClick={() => setIsEditingEmail(false)}
                    onSubmit={handleSubmit}
                  >
                    <SVGBtn>
                      <use href={icons + '#check'} />
                    </SVGBtn>
                  </BtnCheck>
                ) : (
                  <BtnCheck  type="button" onClick={() => setIsEditingEmail(true)}>
                    <BtnEdit>
                      <use href={icons + '#edit'} />
                    </BtnEdit>
                  </BtnCheck>
                )}
                 <StyledErrorMessageEmail name="email" component="div"/>
              </DIV>

              <DIV htmlFor="birthday">
                <Label>Birthday: </Label>
                {isEditingBirthday ? (
                  <InputContainer
                    type="date"
                    name="birthday"
                    id="birthday"
                    value={values.birthday}
                    errors={errors.birthday}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                ) : (
                  <InputContainer
                    type="date"
                    name="birthday"
                    id="birthday"
                    value={values.birthday}
                    errors={errors.birthday}
              
                    onBlur={handleBlur}
                  />
                )}
                {isEditingBirthday ? (
                  <BtnCheck
                    type="submit"
                    onClick={() => setIsEditingBirthday(false)}
                    onSubmit={handleSubmit}
                  >
                    <SVGBtn>
                      <use href={icons + '#check'} />
                    </SVGBtn>
                  </BtnCheck>
                ) : (
                  <BtnCheck type="button" onClick={() => setIsEditingBirthday(true)}>
                    <BtnEdit>
                      <use href={icons + '#edit'} />
                    </BtnEdit>
                  </BtnCheck>
                )}
              </DIV>
              <DIV htmlFor="phone">
                <Label>Phone: </Label>
                {isEditingPhone ? (
                  <InputContainer
                    type="tel"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    errors={errors.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  
                  />
                ) : (
                  <InputContainer 
                  type="tel" 
                  name="phone" 
                   id="phone" 
                   value={values.phone} 
                   errors={errors.phone}
                   placeholder="+380000000000"
                   onBlur={handleBlur}
                   />
                
                )}
                {isEditingPhone ? (
                  <BtnCheck
                    type="submit"
                    onClick={() => setIsEditingPhone(false)}
                    onSubmit={handleSubmit}
                  >
                    <SVGBtn>
                      <use href={icons + '#check'} />
                    </SVGBtn>
                  </BtnCheck>
                ) : (
                  <BtnCheck type="button" onClick={() => setIsEditingPhone(true)}>
                    <BtnEdit>
                      <use href={icons + '#edit'} />
                    </BtnEdit>
                  </BtnCheck>
                )}
                 <StyledErrorMessagePhone name="phone" component="div"/>
              </DIV>

              <DIV htmlFor="city">
                <Label>City: </Label>
                {isEditingCity ? (
                  <InputContainer
                    type="text"
                    name="city"
                    id="city"
                    value={values.city}
                    errors={errors.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                ) : (
                  <InputContainer 
                  type="text" 
                  name="city" 
                  id="city" 
                  value={values.city} 
                  errors={errors.city}
                  onBlur={handleBlur}
                  placeholder="Lviv"/>
                )}
                {isEditingCity ? (
                  <BtnCheck
                    type="submit"
                    onClick={() => setIsEditingCity(false)}
                    onSubmit={handleSubmit}
                  >
                    <SVGBtn>
                      <use href={icons + '#check'} />
                    </SVGBtn>
                  </BtnCheck>
                ) : (
                  <BtnCheck type="button" onClick={() => setIsEditingCity(true)}>
                    <BtnEdit>
                      <use href={icons + '#edit'} />
                    </BtnEdit>
                  </BtnCheck>
                )}
                 <StyledErrorMessageCity name="city" component="div"/>
              </DIV>

              <LogoutBtn />
            </div>
          </FormContainer>
        )}
        </Formik>
      </Box>
      <PetsData/>
    </MainContainer>
  );
};
