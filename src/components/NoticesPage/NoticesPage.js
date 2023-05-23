// Компонент рендериться на маршрут /notices/:categoryName
// Компонент рендерить:
//   - форму пошуку NoticesSearch
//   - блок навігації NoticesCategoriesNav
//   - блок з фільтрами NoticesFilters
//   - список оголошень NoticesCategoriesList
//   - елемент навігації Add pet - переадресовує авторизованого користувача на сторінку AddPetPage
// Під час першого входу на сторінку користувача повинно переадресовувати на маршрут /notices/sell та рендеритися список оголошень з продажу
import { useState, useEffect } from 'react';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav'
import { FindFilter } from 'components/NoticesFilters/NoticesFilters'
import { NoticeCategoryList } from 'components/NoticesCategoriesList/NoticesCategoriesList';
import AddPetButton from 'components/AddPetButton/AddPetButton'
import {
  Button,
  ButtonWrap,
  DescrModal,
  ModalContent,
  TitleModal,
  Trash,
  Filters,
  Text
} from './NoticesPage.styled';
import icons from 'images/icons.svg';

const categories = [
  {
    text: 'sell',
    type: 'public',
    id: 1,
    name: 'category'
  },
  {
    text: 'lost/found',
    type: 'public',
    id: 2,
    name: 'category'
  },
  {
    text: 'in good hands',
    type: 'public',
    id: 3,
    name: 'category'
  },
  {
    text: 'favourite ads',
    type: 'private',
    id: 4,
    name: 'category'
  },
  {
    text: 'my ads',
    type: 'private',
    id: 5,
    name: 'category'
  }
]

const items = [
  {
    category: 'in good hands',
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgGi3YJI2iukoOZ3_fbYCyoiR4dYO8fIyIu_qpphSUf8GRAmFN',
    tags: [
      {
        img: '#location',
        text: 'Lviv'
      },
      {
        img: '#clock',
        text: '2 year'
      },
      {
        img: '#male',
        text: 'female'
      },
    ],
  },
  {
    category: 'sell',
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgGi3YJI2iukoOZ3_fbYCyoiR4dYO8fIyIu_qpphSUf8GRAmFN',
    tags: [
      {
        img: '#location',
        text: 'Lviv'
      },
      {
        img: '#clock',
        text: '1 year'
      },
      {
        img: '#male',
        text: 'female'
      },
    ],
  },
  {
    category: 'lost/found',
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgGi3YJI2iukoOZ3_fbYCyoiR4dYO8fIyIu_qpphSUf8GRAmFN',
    tags: [
      {
        img: '#location',
        text: 'Lviv'
      },
      {
        img: '#clock',
        text: '1 year'
      },
      {
        img: '#male',
        text: 'male'
      },
    ],
  }
]

export const NoticesPage = () => {
  //   toggleModal, яку потрібно передати компоненту ModalAprooveActionб для закриття вікна
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [category, setCategory] = useState('')
  const [filteredItems, setFilteredItems] = useState(items.slice())
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [ages, setAges] = useState([])
  const [genders, setGenders] = useState([])
  const [openFilter, setOpenFilter] = useState(false)

  useEffect(() => {
    let newItems = [...items];

    if (ages.length || genders.length ) {
      newItems = newItems.filter(item => (item.tags.some(tag => ages.includes(tag.text)) || item.tags.some(tag => genders.includes(tag.text))));
    }

    if (categoriesArr.length) {
      newItems = newItems.filter(item => categoriesArr.includes(item.category));
    }
    setFilteredItems(newItems)
  }, [ages, genders, categoriesArr]);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };

  const handleAction = () => {
    console.log('Передаємо екшн');
  };

  return (
    <>
      {isOpenModal && (
        <ModalApproveAction onClose={toggleModal}>
          <ModalContent>
            <TitleModal>Delete adverstiment?</TitleModal>
            <DescrModal>
              <Text>Are you sure you want to delete &nbsp;
                <strong>“Cute dog looking for a home”?&nbsp;</strong>
              </Text>
              <p>You can`t undo this action.</p>
            </DescrModal>
            <ButtonWrap>
              <Button type="button" aria-label="cancel" onClick={toggleModal}>
                Cancel
              </Button>
              <Button type="button" aria-label="yes" onClick={handleAction}>
                Yes
                <Trash>
                  <use href={icons + '#trash'} />
                </Trash>
              </Button>
            </ButtonWrap>
          </ModalContent>
        </ModalApproveAction>
      )}
      <Filters>
        <div>
          <NoticesCategoriesNav categoriesArr={categoriesArr} setCategoriesArr={setCategoriesArr} categories={categories} category={category} setCategory={setCategory} />
        </div>
        <FindFilter setAges={setAges} ages={ages} setGenders={setGenders} genders={genders} setOpenFilter={setOpenFilter} openFilter={openFilter} />
        <AddPetButton/>
      </Filters>
      <NoticeCategoryList filteredItems={filteredItems} onTrashModal={toggleModal}/>
    </>
  );
};
