// Компонент рендерить список всіх оголошень відповідної категорії - NoticeCategoryItem, дані по яким отримує з бекенду
import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { NoticesList } from './NoticesCategoriesList.styled';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsLoadNotices,
} from 'Redux/notices/selector';
import { selectUser } from "Redux/auth/selector";
import { getFavoriteNotices, getNoticeByCategory } from 'Redux/notices/operation';
import { useEffect } from 'react';
import { fetchNotices } from 'Redux/notices/operation';
import { Loader } from 'components/Loader/Loader';

export const categoryShelf = {
  sell: 'sell',
  'lost/found': 'lost/found',
  'in-good-hands': 'in-good-hands',
};

export const NoticeCategoryList = ({
  onTrashModal,
  search,
  filteredItems,
  setFilteredItems,
  ages,
  genders
}) => {
  const isLoading = useSelector(getIsLoadNotices);
  const idUser = useSelector(selectUser).id;
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [searchParams] = useSearchParams();

  const convertAgeToMonths = (age) => {
    switch (age) {
      case '3-12 m':
        return { minMonths: 3, maxMonths: 12 };
      case '1 year':
        return { minMonths: 13, maxMonths: 24 };
      case '2+ year':
        return { minMonths: 25, maxMonths: Infinity };
      default:
        return { minMonths: null, maxMonths: null };
    }
  };

  useEffect(() => {
    let minMonths = null;
    let maxMonths = null;
    let sex = ''

    if (ages.length) {
      ages.forEach(age => {
        const { minMonths: currentMinMonth, maxMonths: currentMaxMonth } = convertAgeToMonths(age);
        console.log(currentMinMonth);
        if (currentMinMonth !== null && currentMaxMonth !== null) {
          minMonths = minMonths === null ? currentMinMonth : Math.min(minMonths, currentMinMonth);
          maxMonths = maxMonths === null ? currentMaxMonth : Math.max(maxMonths, currentMaxMonth);
        }
      });
    }

    if (genders.length) {
      genders.forEach(gender => {
        sex = gender
      })
    }

    if (idUser !== '' && categoryName && categoryName === 'favorites-ads') {
      console.log(idUser);
      try {
        dispatch(getFavoriteNotices({ title: searchParams.get('title'), minMonths, maxMonths, sex, categories: categoryName }))
          .then((action) => {
            if (action.payload.message && action.payload.message === 'No data found') {
              setFilteredItems([])
            } else {
              setFilteredItems(action.payload.data.notices);
            }
          });
      } catch (err) {
        console.error(err);
      }
    } else if (categoryName && !searchParams.get('title') && (idUser || !idUser)) {
      if (categoryName === categoryShelf[categoryName]) {
        try {
          dispatch(getNoticeByCategory({ categories: categoryName, minMonths, maxMonths, sex }))
            .then((action) => {
              if (action.payload.message && action.payload.message === 'No data found') {
                setFilteredItems([])
              } else {
                setFilteredItems(action.payload.data.notices);
              }
            });
        } catch (err) {
          console.error(err);
        }
      }
    } else if (!categoryName && searchParams.get('title') && (idUser || !idUser)) {
      try {
        dispatch(getNoticeByCategory({ title: searchParams.get('title'), minMonths, maxMonths, sex }))
          .then((action) => {
            if (action.payload.message && action.payload.message === 'No data found') {
              setFilteredItems([])
            } else {
              setFilteredItems(action.payload.data.notices);
            }
          });
      } catch (err) {
        console.error(err);
      }
    } else if (categoryName && categoryName === categoryShelf[categoryName] && searchParams.get('title') && (idUser || !idUser)) {
      try {
        dispatch(getNoticeByCategory({ title: searchParams.get('title'), categories: categoryName, minMonths: minMonths, maxMonths, sex }))
          .then((action) => {
            if (action.payload.message && action.payload.message === 'No data found') {
              setFilteredItems([])
            } else {
              setFilteredItems(action.payload.data.notices);
            }
          });
      } catch (err) {
        console.error(err);
      }
    } else {
      dispatch(fetchNotices())
        .then((action) => {
          setFilteredItems(action.payload.data.notices)
        });
    }
  }, [categoryName, search, dispatch, ages, genders, idUser, searchParams, setFilteredItems]);

  const allOrFilterItems = () => {
    if (!isLoading && !filteredItems.length) {
      return <p>Not found!</p>;
    } else if (!isLoading && filteredItems.length) {
      return filteredItems.map((notice, i) => (
        <NoticeCategoryItem key={i} item={notice} onTrashModal={onTrashModal} />
      ));
    }
  };

  return (
    <NoticesList>
      {isLoading && <Loader/>}
      {allOrFilterItems()}
    </NoticesList>
  );
};

