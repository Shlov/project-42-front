import { Formik } from 'formik';
import * as yup from 'yup';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorNewUser, selectUser } from 'Redux/auth/selector';
import { updateUser } from 'Redux/auth/operation';

import icons from 'images/icons.svg';
import { LogoutBtn } from 'components/Logout/Logout';
import { PetsData } from 'components/PetsData/PetsData';

import {
  MainContainer,
  Box,
  TitleCard,
  FormContainer,
  BtnCheck,
  InputContainer,
  Label,
  InputAvatar,
  BtnText,
  BtnPhoto,
  ImgContainer,
  SVG,
  SVGBtn,
  DIV,
  ImgCon,
  Photosvg,
  ImgAvatar,
  BtnEdit,
} from './UserData.styled';
import { ModalCongrats } from 'components/ModalCongrats/ModalCongrats';

const schema = yup.object().shape({
  name: yup.string().min(3).max(16, 'Length must be less then 15').required(),
  email: yup
    .string()
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email')
    .email('Invalid e-mail')
    .required(),
  birthday: yup.date().nullable(),
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, 'Enter your phone number in format +380')
    .nullable(),
  city: yup.string().min(3).max(16, 'Length must be less then 16').nullable(),
});


const Camera = () => {
  return (
    <BtnPhoto>
      <SVG>
        <use href={icons + '#camera'} />
      </SVG>
      <BtnText>Edit photo</BtnText>
    </BtnPhoto>
  );
};

const CheckBlue = () => {
  return (
    <BtnPhoto>
      <SVG>
        <use href={icons + '#check'} />
      </SVG>
      <BtnText>Confirm</BtnText>
    </BtnPhoto>
  );
};

export const UserData = () => {
  const isNewUser = useSelector(selectorNewUser);
 
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
    {isNewUser && <ModalCongrats />}
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
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
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
                  id="imgUrl"
                  type="file"
                  name="avatar"
                  onChange={handleChangeAvatar}
                  accept="image/*,.png,.jpg,.gif,.web"
                />
              </label>
            </ImgCon>
            <div>
              <DIV>
                <Label>Name: </Label>
                {isEditingName ? (
                  <InputContainer
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                ) : (
                  <InputContainer type="text" name="name" value={values.name} />
                )}
                {isEditingName ? (
                  <BtnCheck
                    type="submit"
                    onClick={handleChange}
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
              </DIV>

              <DIV>
                <Label>Email: </Label>
                {isEditingEmail ? (
                  <InputContainer
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                ) : (
                  <InputContainer type="email" name="email" value={values.email} />
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
              </DIV>

              <DIV>
                <Label>Birthday: </Label>
                {isEditingBirthday ? (
                  <InputContainer
                    type="date"
                    name="birthday"
                    value={values.birthday}
                    onChange={handleChange}
                    dateFormat="dd.MM.yyyy"
                  />
                ) : (
                  <InputContainer
                    type="date"
                    name="birthday"
                    value={values.birthday}
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
                  <BtnCheck  type="button" onClick={() => setIsEditingBirthday(true)}>
                    <BtnEdit>
                      <use href={icons + '#edit'} />
                    </BtnEdit>
                  </BtnCheck>
                )}
              </DIV>
              <DIV>
                <Label>Phone: </Label>
                {isEditingPhone ? (
                  <InputContainer
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                  
                  />
                ) : (
                  <InputContainer type="tel" name="phone" value={values.phone} placeholder="+380"/>
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
              </DIV>

              <DIV>
                <Label>City: </Label>
                {isEditingCity ? (
                  <InputContainer
                    type="text"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                  />
                ) : (
                  <InputContainer type="text" name="city" value={values.city}   placeholder="Lviv"/>
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
