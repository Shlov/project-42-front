import { Formik } from 'formik';
import * as yup from 'yup';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'Redux/auth/selector';
import { currentUser, updateUser } from 'Redux/auth/operation';

import icons from 'images/icons.svg';
import { LogoutBtn } from 'components/Logout/Logout';

import {
  TitleCard,
  FormContainer,
  BtnCheck,
  InputContainer,
  Label,
  InputAvatar,
  BtnText,
  BtnPhoto,
  ImgContainer,
  svgIcon,
  SVGBtn,
  DIV,
  ImgCon,
  Photosvg,
  ImgAvatar,
  BtnEdit,
} from './UserData.styled';

const schema = yup.object().shape({
  name: yup.string().max(16, 'Length must be less then 15').required(),
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
  city: yup.string().max(16, 'Length must be less then 16').nullable(),
});


const Camera = () => {
  return (
    <BtnPhoto>
      <svgIcon>
        <use href={icons + '#camera'} />
      </svgIcon>
      <BtnText>Edit photo</BtnText>
    </BtnPhoto>
  );
};

const CheckBlue = () => {
  return (
    <BtnPhoto>
      <svgIcon>
        <use href={icons + '#check'} />
      </svgIcon>
      <BtnText>Confirm</BtnText>
    </BtnPhoto>
  );
};

export const UserData = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const [toggleIconPass, setToggleIconPass] = useState(Camera);

  const [imgUrl, setImgUrl] = useState('');

  const [userName, setUserName] = useState(user.name);
  const [userEmail, setUserEmail] = useState(user.email);
  const [userBirthday, setUserBirthday] = useState(user.birthday);
  const [userPhone, setUserPhone] = useState(user.phone);
  const [userCity, setUserCity] = useState(user.city);

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingBirthday, setIsEditingBirthday] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingCity, setIsEditingCity] = useState(false);

  const [isUpdateForm, setIsUpdateForm] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    birthday: '',
    avatarURL: '',
  });

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  useEffect(() => {
    if (isUpdateForm) {
      dispatch(currentUser());
      setIsUpdateForm(null);
    }
  }, [dispatch, isUpdateForm]);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleSubmitInput = async () => {

    const formData = new FormData();
    formData.append('name', userName);
    formData.append('email', userEmail);
    if (userPhone) {
      formData.append('phone', userPhone);
    }
    if (userCity) {
      formData.append('city', userCity);
    }
    if (userBirthday) {
      formData.append('birthday', userBirthday);
    }

    if (imgUrl) {
      formData.append('avatarURL', imgUrl);
    }
    await dispatch(updateUser(formData));
  };


  const handleDatePickerClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <TitleCard>My information:</TitleCard>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: formData.name || user?.name || '',
          email: formData.name || user?.email || '',
          phone: formData.phone || user?.phone || '',
          city: formData.phone || user?.city || '',
        }}

        validationSchema={schema}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <FormContainer autoComplete="off" onSubmit={handleSubmitInput}>
            <ImgCon>
              <ImgContainer>
                {imgUrl ? (
                  <ImgAvatar
                    src={URL.createObjectURL(imgUrl)}
                    alt="Photo user"
                  />
                ) : (
                  <Photosvg>
                    <use href={icons + '#photodefault'} />
                  </Photosvg>
                )}
              </ImgContainer>

              <label
                htmlFor="imgUrl"
                onClick={() => setToggleIconPass(CheckBlue)}
                onSubmit={handleSubmitInput}
              >
                {toggleIconPass}
                <InputAvatar
                  id="imgUrl"
                  type="file"
                  name="imgUrl"
                  onChange={e => setImgUrl(e.target.files[0])}
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
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                  />
                ) : (
                  <InputContainer type="text" name="name" value={userName} />
                )}
                {isEditingName ? (
                  <BtnCheck
                    type="submit"
                    onClick={() => setIsEditingName(false)}
                  >
                    <SVGBtn>
                      <use href={icons + '#check'} />
                    </SVGBtn>
                  </BtnCheck>
                ) : (
                  <BtnCheck onClick={() => setIsEditingName(true)}>
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
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                  />
                ) : (
                  <InputContainer type="email" name="email" value={userEmail} />
                )}
                {isEditingEmail ? (
                  <BtnCheck
                    type="submit"
                    onClick={() => setIsEditingEmail(false)}
                  >
                    <SVGBtn>
                      <use href={icons + '#check'} />
                    </SVGBtn>
                  </BtnCheck>
                ) : (
                  <BtnCheck onClick={() => setIsEditingEmail(true)}>
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
                    value={userBirthday}
                    onChange={e => {
                      setUserBirthday(e.target.value);
                      handleDatePickerClose();
                    }}
                    dateFormat="dd/MM/yyyy"
                    open={isOpen}
                    onClickOutside={() => setIsOpen(false)}
                    onFocus={() => setIsOpen(true)}
                    showYearDropdown
                    scrollableYearDropdown
                  />
                ) : (
                  <InputContainer
                    type="date"
                    name="birthday"
                    value={userBirthday}
                  />
                )}
                {isEditingBirthday ? (
                  <BtnCheck
                    type="submit"
                    onClick={() => setIsEditingBirthday(false)}
                  >
                    <SVGBtn>
                      <use href={icons + '#check'} />
                    </SVGBtn>
                  </BtnCheck>
                ) : (
                  <BtnCheck onClick={() => setIsEditingBirthday(true)}>
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
                    value={userPhone}
                    onChange={e => setUserPhone(e.target.value)}
                    placeholder="+380"
                  />
                ) : (
                  <InputContainer type="tel" name="phone" value={userPhone} />
                )}
                {isEditingPhone ? (
                  <BtnCheck
                    type="submit"
                    onClick={() => setIsEditingPhone(false)}
                  >
                    <SVGBtn>
                      <use href={icons + '#check'} />
                    </SVGBtn>
                  </BtnCheck>
                ) : (
                  <BtnCheck onClick={() => setIsEditingPhone(true)}>
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
                    value={userCity}
                    onChange={e => setUserCity(e.target.value)}
                  />
                ) : (
                  <InputContainer type="text" name="city" value={userCity} />
                )}
                {isEditingCity ? (
                  <BtnCheck
                    type="submit"
                    onClick={() => setIsEditingCity(false)}
                  >
                    <SVGBtn>
                      <use href={icons + '#check'} />
                    </SVGBtn>
                  </BtnCheck>
                ) : (
                  <BtnCheck onClick={() => setIsEditingCity(true)}>
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
    </div>
  );
};
