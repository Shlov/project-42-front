// Компонент рендериться на маршрут /notices/:categoryName
// Компонент рендерить:
//   - форму пошуку NoticesSearch
//   - блок навігації NoticesCategoriesNav
//   - блок з фільтрами NoticesFilters
//   - список оголошень NoticesCategoriesList
//   - елемент навігації Add pet - переадресовує авторизованого користувача на сторінку AddPetPage
// Під час першого входу на сторінку користувача повинно переадресовувати на маршрут /notices/sell та рендеритися список оголошень з продажу
import { useState, useEffect, useMemo } from 'react';
import {useSelector, useDispatch } from "react-redux";
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
// import { getNoticeByCategory } from 'Redux/notices/operation';
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
import { FilterItem } from 'components/NoticesFilters/NoticesFilter.styled';
import icons from 'images/icons.svg';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import RemoveItem from '../../images/icons/cross-small-1.svg'
import { Pagination } from 'components/Pagination/Pagination';
import { deleteNotice } from 'Redux/notices/operation';
import { selectUser } from 'Redux/auth/selector';
import { toast } from 'react-hot-toast';
import { getNotice } from 'Redux/notices/selector';

const categories = [
  {
    text: 'sell',
    type: 'public',
    id: 1,
    name: 'category',
    link: 'sell',
  },
  {
    text: 'lost/found',
    type: 'public',
    id: 2,
    name: 'category',
    link: 'lost-found',
  },
  {
    text: 'in good hands',
    type: 'public',
    id: 3,
    name: 'category',
    link: 'for-free',
  }
];

const privateCategory = [
  {
    text: 'favourite ads',
    type: 'private',
    id: 4,
    name: 'category',
    link: 'favorites-ads',
  },
  {
    text: 'my ads',
    type: 'private',
    id: 5,
    name: 'category',
    link: 'my-ads',
  }
]

export const NoticesPage = () => {
  //   toggleModal, яку потрібно передати компоненту ModalAprooveActionб для закриття вікна
  const items = useSelector((state) => state.notices.items);
  const tablet = useSelector((state) => state.main.tablet);
  const mobile = useSelector((state) => state.main.mobile)
  const location = useLocation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [category, setCategory] = useState(location.pathname.split('/')[2])
  const [filteredItems, setFilteredItems] = useState(items)
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [ages, setAges] = useState([])
  const [genders, setGenders] = useState([])
  const [openFilter, setOpenFilter] = useState(false)
  const [search, setSearch] = useState('')
  const [activeButtons, setActiveButtons] = useState([...ages, ...genders])
  const { categoryName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const userId = useSelector(selectUser).id;

  const categoryShelf = useMemo(() => ({
    sell: 'sell',
    'lost-found': 'lost/found',
    'for-free': 'in good hands',
    'favorites-ads': 'favourite ads',
    'my-ads': 'my ads'
  }), []);


  useEffect(() => {
    setSearch(searchParams.get('search') || '');
  }, [searchParams]);

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
    if (categoryName) {
      const categoryValue = categoryShelf[categoryName];
      newItems = newItems.filter(item => item.categories === categoryValue);
    }
    if (search) {
      newItems = newItems.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    }
    setFilteredItems(newItems)
  }, [search, genders, ages, category, categoryShelf, categoryName, items]);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };

  const handleAction = () => {
    if(!userId) {
      console.log("user disconnect") 
      toast.error('Please authorization and try again!', {
        style: {
          backgroundColor: `var(--cl-background)`,
          padding: '6px',
          color: `var(--cl-black)`,
        },
        icon: '😸',
      });
      return;
    }

    const noticeOwner = items.filter(item => item.owner !== userId)

    if(!noticeOwner) {
      console.log("user doesn`t owner notice") 
      toast.error('You aren`t the owner of this notice!', {
        style: {
          backgroundColor: `var(--cl-background)`,
          padding: '6px',
          color: `var(--cl-black)`,
        },
        icon: '😸',
      });
      return;
    }
    
    const noticeId = "646fab24d72f7be5ee4c9984"

    dispatch(deleteNotice(noticeId))
    console.log('Видаляємо notice');
  };

  const agePet = (birthday) => {
    const nowDate = new Date();
    const [day, month, year] = birthday.split('.');
    const birthDate = new Date(`${year}-${month}-${day}`);

    const differenceMonths =
      (nowDate.getFullYear() - birthDate.getFullYear()) * 12 +
      (nowDate.getMonth() - birthDate.getMonth());

    return differenceMonths;
  };

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm)
    setSearchParams({ search: searchTerm });
    searchTerm = searchTerm.toLowerCase();
    const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchTerm));
    setFilteredItems(filteredItems);
  }

  const handleRemoveItem = (item) => {
    setActiveButtons(activeButtons.filter(btn => btn !== item));

    if (ages.includes(item)) {
      setAges(ages.filter(cat => cat !== item));
    }

    if (genders.includes(item)) {
      setGenders(genders.filter(gender => gender !== item));
    }
  };

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
      <NoticesSearch onSubmit={handleSearch} />
      <Filters>
        <div>
          <NoticesCategoriesNav categoriesArr={categoriesArr} setCategoriesArr={setCategoriesArr} categories={categories} category={category} setCategory={setCategory} privateCategory={privateCategory} />
        </div>
        <div className='filters'>
          <FindFilter setAges={setAges} ages={ages} setGenders={setGenders} genders={genders} setOpenFilter={setOpenFilter} openFilter={openFilter} items={items} activeButtons={activeButtons} setActiveButtons={setActiveButtons} handleRemoveItem={handleRemoveItem} />
          {!mobile && <AddPetButton/>}
          <div className='filters-items'>
            {(tablet || mobile) &&
              activeButtons.map((button, i) =>
                <FilterItem tablet={tablet} mobile={mobile} key={i}>
                  <p>{button}</p>
                  <img src={RemoveItem} alt="" onClick={() => handleRemoveItem(button)} />
                </FilterItem>
              )
            }
          </div>
        </div>
      </Filters>
      <NoticeCategoryList filteredItems={filteredItems} setFilteredItems={setFilteredItems} onTrashModal={toggleModal} items={items} search={search}/>
      <Pagination/>
    </>
  );
};
