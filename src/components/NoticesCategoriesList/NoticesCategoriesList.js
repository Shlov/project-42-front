// Компонент рендерить список всіх оголошень відповідної категорії - NoticeCategoryItem, дані по яким отримує з бекенду
import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { NoticesList } from './NoticesCategoriesList.styled';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsLoadNotices,
  getNotices,
} from 'Redux/notices/selector';
import { selectUser } from "Redux/auth/selector";
import { getFavoriteNotices, getNoticeByCategory } from 'Redux/notices/operation';
import { useEffect, useState } from 'react';
import { fetchNotices } from 'Redux/notices/operation';
import { NoticeCategoryItemLoad } from 'components/NoticeCategoryItemLoad/NoticeCategoryItemLoad';

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
  const [searchParams, setSearchParams] = useSearchParams();

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
  }, [categoryName, search, dispatch, ages, genders, idUser]);

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
      {isLoading && <NoticeCategoryItemLoad />}
      {allOrFilterItems()}
    </NoticesList>
  );
};

// Наповнювач для карток
// const arr = [1,1,1,1,1,1,1,1,1,1,1,1]
// const item = {
//   category: 'In good hands',
//   img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgGi3YJI2iukoOZ3_fbYCyoiR4dYO8fIyIu_qpphSUf8GRAmFN",
//   title: "Cute fox looking for a home",
//   location: 'Kyiv',
//   age: '1 year',
//   sex: 'female',
// }
// const notices = arr.fill(item);
//
