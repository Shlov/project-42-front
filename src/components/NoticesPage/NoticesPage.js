// Компонент рендериться на маршрут /notices/:categoryName
// Компонент рендерить:
//   - форму пошуку NoticesSearch
//   - блок навігації NoticesCategoriesNav
//   - блок з фільтрами NoticesFilters
//   - список оголошень NoticesCategoriesList
//   - елемент навігації Add pet - переадресовує авторизованого користувача на сторінку AddPetPage
// Під час першого входу на сторінку користувача повинно переадресовувати на маршрут /notices/sell та рендеритися список оголошень з продажу
import { useState, useEffect, useMemo } from 'react';
import { useSelector } from "react-redux";
import { useLocation, useParams } from 'react-router-dom';
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
    name: 'category',
    link: 'sell'
  },
  {
    text: 'lost/found',
    type: 'public',
    id: 2,
    name: 'category',
    link: 'lost-found'
  },
  {
    text: 'in good hands',
    type: 'public',
    id: 3,
    name: 'category',
    link: 'for-free'
  },
  {
    text: 'favourite ads',
    type: 'private',
    id: 4,
    name: 'category',
    link: 'favorites-ads'
  },
  {
    text: 'my ads',
    type: 'private',
    id: 5,
    name: 'category',
    link: 'my-ads'
  }
]

export const NoticesPage = ({ desktop }) => {
  //   toggleModal, яку потрібно передати компоненту ModalAprooveActionб для закриття вікна
  const items = useSelector((state) => state.notices.items);
  const location = useLocation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [category, setCategory] = useState(location.pathname.split('/')[2])
  const [filteredItems, setFilteredItems] = useState(items)
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [ages, setAges] = useState([])
  const [genders, setGenders] = useState([])
  const [openFilter, setOpenFilter] = useState(false)
  const { categoryName } = useParams();

  const categoryShelf = useMemo(() => ({
  sell: 'sell',
  'lost-found': 'lost/found',
  'for-free': 'in good hands',
}), []);

  useEffect(() => {
  if (categoryName) {
    const categoryValue = categoryShelf[categoryName];
    setFilteredItems(items.filter(item => item.categories === categoryValue))
  } else {
    setFilteredItems(items)
  }
}, [items, categoryName, categoryShelf])

  useEffect(() => {
    let newItems = items ? [...items] : [];
    if (genders.length) {
      newItems = newItems.filter(item => genders.includes(item.sex));
    }
    if (ages.length) {
      const ageRanges = ages.reduce((ranges, age) => {
        switch(age) {
          case '3-12 m':
            return [...ranges, { start: 3, end: 12 }];
          case '1 year':
            return [...ranges, { start: 13, end: 24 }];
          case '2 year':
            return [...ranges, { start: 25, end: 36 }];
          default:
            return ranges;
        }
      }, []);

      newItems = newItems.filter(item => {
        const petAge = agePet(item.birthday);
        return ageRanges.some(range => petAge >= range.start && petAge <= range.end);
      });
    }
    if (category !== '') {
      const categoryValue = categoryShelf[categoryName];
      newItems = newItems.filter(item => item.categories === categoryValue);
    }
    setFilteredItems(newItems)
  }, [genders, ages, category, categoryShelf, categoryName, items]);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };

  const handleAction = () => {
    console.log('Видаляємо notice');
  };

  const agePet = (birthday) => {
    const nowDate = new Date();
    const [month, day, year] = birthday.split('.');
    const birthDate = new Date (`${Number(month)-1},${Number(day)},${Number(year)}`);
    const differenceMonth = 12 - birthDate.getMonth()+ 1 + nowDate.getMonth() + 1;
    return differenceMonth
  }

  return (
    <>
      {isOpenModal && (
        <ModalApproveAction onClose={toggleModal} height="389px">
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
              <Button type="button" aria-label="delete" onClick={handleAction}>
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
        {desktop ?
        <>
          <div>
            <NoticesCategoriesNav categoriesArr={categoriesArr} setCategoriesArr={setCategoriesArr} categories={categories} category={category} setCategory={setCategory} />
          </div>
          <FindFilter setAges={setAges} ages={ages} setGenders={setGenders} genders={genders} setOpenFilter={setOpenFilter} openFilter={openFilter} items={items} />
          <AddPetButton/>
        </>
        :
        <>
          <div>
            <NoticesCategoriesNav categoriesArr={categoriesArr} setCategoriesArr={setCategoriesArr} categories={categories} category={category} setCategory={setCategory} />
          </div>
          <div className='filters'>
            <FindFilter setAges={setAges} ages={ages} setGenders={setGenders} genders={genders} setOpenFilter={setOpenFilter} openFilter={openFilter} items={items} />
            <AddPetButton/>
          </div>
        </>
        }
      </Filters>
      <NoticeCategoryList filteredItems={filteredItems} onTrashModal={toggleModal} items={items}/>
    </>
  );
};
