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
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav'
import { FindFilter } from 'components/NoticesFilters/NoticesFilters'
import { NoticeCategoryList } from 'components/NoticesCategoriesList/NoticesCategoriesList';
import AddPetButton from 'components/AddPetButton/AddPetButton'
import { Filters } from './NoticesPage.styled';
import { FilterItem } from 'components/NoticesFilters/NoticesFilter.styled';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import RemoveItem from '../../images/icons/cross-small-1.svg'
import { Pagination } from 'components/Pagination/Pagination';
import { getIsLoadNotices } from 'Redux/notices/selector';

const categories = [
  {
    text: 'all',
    type: 'public',
    id: 0,
    name: 'category',
    link: ''
  },
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
    link: 'in good hands',
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
  const items = useSelector((state) => state.notices.items);
  const tablet = useSelector((state) => state.main.tablet);
  const mobile = useSelector((state) => state.main.mobile);
  const isLoading = useSelector(getIsLoadNotices);
  const location = useLocation();
  const [category, setCategory] = useState(location.pathname.split('/')[2])
  const [filteredItems, setFilteredItems] = useState(items)
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [ages, setAges] = useState([])
  const [genders, setGenders] = useState([])
  const [openFilter, setOpenFilter] = useState(false)
  const [activeButtons, setActiveButtons] = useState([...ages, ...genders])
  const { categoryName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('title'))
  const [filterHeight, setFilterHeight] = useState(0)

  const categoryShelf = useMemo(() => ({
    all: 'all',
    sell: 'sell',
    'lost/found': 'lost/found',
    'in good hands': 'in good hands',
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
        switch (age) {
          case '3-12 m':
            return [...ranges, { start: 3, end: 12 }];
          case '1 year':
            return [...ranges, { start: 13, end: 24 }];
          case '2+ year':
            return [...ranges, { start: 25, end: Infinity }];
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
      const categoryValue = categoryName !== 'lost-found' ? categoryShelf[categoryName] : 'lost/found';
      newItems = newItems.filter(item => item.categories === categoryValue);
    }
    if (search) {
      newItems = newItems.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    }
    setFilteredItems(newItems)
  }, [search, genders, ages, category, categoryShelf, categoryName, items]);

  useEffect(() => {
    const element = document.querySelector('.filters-items');
    if (element) {
      const height = element.getBoundingClientRect().height;
      setFilterHeight(height);
      console.log(height);
    }
  }, [activeButtons]);

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
    setSearchParams({ title: searchTerm });
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
      <NoticesSearch onSubmit={handleSearch} />
      <Filters>
        <div>
          <NoticesCategoriesNav categoriesArr={categoriesArr} setCategoriesArr={setCategoriesArr} categories={categories} category={category} setCategory={setCategory} privateCategory={privateCategory} />
        </div>
        <div className='filters'>
          <FindFilter setAges={setAges} ages={ages} setGenders={setGenders} genders={genders} setOpenFilter={setOpenFilter} openFilter={openFilter} items={items} activeButtons={activeButtons} setActiveButtons={setActiveButtons} handleRemoveItem={handleRemoveItem} />
          <AddPetButton />
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
      <NoticeCategoryList filterHeight={filterHeight} filteredItems={filteredItems} setFilteredItems={setFilteredItems} items={items} search={search} ages={ages} genders={genders}/>
      {filteredItems.length && !isLoading ? <Pagination /> : null}
    </>
  );
};
