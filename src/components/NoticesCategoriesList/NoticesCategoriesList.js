// Компонент рендерить список всіх оголошень відповідної категорії - NoticeCategoryItem, дані по яким отримує з бекенду
import { toast } from 'react-hot-toast';
import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { NoticesList } from './NoticesCategoriesList.styled';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFuturePage, getIsLoadNotices, getNotices } from 'Redux/notices/selector';
import { selectUser } from "Redux/auth/selector";
import { getFavoriteNotices, getNoticeByCategory, getUserNotices, updateFavorite } from 'Redux/notices/operation';
import { useEffect } from 'react';
import { fetchNotices } from 'Redux/notices/operation';
import { Loader } from 'components/Loader/Loader';
import { NoticeCategoryItemLoad } from 'components/NoticeCategoryItemLoad/NoticeCategoryItemLoad';

export const categoryShelf = {
  all: 'all',
  sell: 'sell',
  'lost-found': 'lost-found',
  'in good hands': 'in good hands',
};

export const NoticeCategoryList = ({
  onTrashModal,
  search,
  filteredItems,
  setFilteredItems,
  ages,
  genders,
  filterHeight
}) => {
  const isLoading = useSelector(getIsLoadNotices);
  const idUser = useSelector(selectUser).id;
  const items = useSelector(getNotices)
  const dispatch = useDispatch();
  const { categoryName = 'all' } = useParams();
  const [searchParams] = useSearchParams();

  const futurePage = useSelector(getFuturePage)
  const array = Array.from({ length: 8 }, (_, index) => index + 1);
  // const { limit, numberNotices, page} = useSelector(getPagination);
  // console.log(page, 'p l' , limit)

  const handleFavorite = (item, activeFavorite) => {
    if (!idUser) {
      return toast.error('Please authorize and try again 😸');
    }
    dispatch(updateFavorite({ noticeId: item.id, isFavorite: activeFavorite }))
  };

  useEffect(() => {
    setFilteredItems(() => items)
  }, [items, filteredItems, setFilteredItems]);

  const convertAgeToMonths = (age) => {
    switch (age) {
      case '3-12 m':
        return { minMonths: 3, maxMonths: 11 };
      case '1 year':
        return { minMonths: 12, maxMonths: 24 };
      case '2+ year':
        return { minMonths: 24, maxMonths: Infinity };
      default:
        return { minMonths: null, maxMonths: null };
    }
  };

  useEffect(() => {
    let minMonths = null;
    let maxMonths = null;
    let sex = [];

    if (ages.length) {
      ages.forEach(age => {
        const { minMonths: currentMinMonth, maxMonths: currentMaxMonth } = convertAgeToMonths(age);
        if (currentMinMonth !== null && currentMaxMonth !== null) {
          minMonths = minMonths === null ? currentMinMonth : Math.min(minMonths, currentMinMonth);
          maxMonths = maxMonths === null ? currentMaxMonth : Math.max(maxMonths, currentMaxMonth);
        }
      });
    }

    if (genders.length) {
      sex = genders
    }

    if (idUser !== '' && (categoryName === 'favorites-ads' || categoryName === 'my-ads')) {
      if(categoryName === 'favorites-ads') {
        try {
          dispatch(getFavoriteNotices({ title: searchParams.get('title'), minMonths, maxMonths, sex: `${sex.join(',')}`, page: futurePage }))
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
      } else if(categoryName === 'my-ads') {
        console.log(categoryName);
        try {
          dispatch(getUserNotices({ title: searchParams.get('title'), minMonths, maxMonths, sex: `${sex.join(',')}`, page: futurePage }))
            .then((action) => {
              if (action.payload.message && action.payload.message === 'No data found') {
                setFilteredItems([])
              } else {
                setFilteredItems(action.payload.data.notices);
              }
            });
        } catch(err) {
          console.error(err);
        }
      }
    } else if (categoryName && !searchParams.get('title') && (idUser === '' || idUser !== '')) {
      if (categoryName === categoryShelf[categoryName] && categoryName !== 'all') {
        try {
          dispatch(getNoticeByCategory({ categories: categoryName !== 'lost-found' ? categoryName : 'lost/found', minMonths, maxMonths, sex: `${sex.join(',')}`, page: futurePage }))
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
      else if(categoryName === 'all' && (!minMonths && !maxMonths && !sex.length)) {
        try {
          dispatch(fetchNotices(futurePage))
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
      else if(categoryName === 'all' && (minMonths || maxMonths || sex.length || searchParams.get('title'))) {
        try {
          dispatch(getNoticeByCategory({ minMonths, maxMonths, sex: `${sex.join(',')}`, title: searchParams.get('title'), page: futurePage }))
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
    } else if (!categoryName && searchParams.get('title') && (idUser === '' || idUser !== '')) {
      try {
        dispatch(getNoticeByCategory({ title: searchParams.get('title'), minMonths, maxMonths, sex: `${sex.join(',')}`, page: futurePage }))
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
    } else if (!categoryName && !searchParams.get('title') && (!idUser || idUser !== '')) {
        try {
          dispatch(getNoticeByCategory({ sex: `${sex.join(',')}`, minMonths, maxMonths, page: futurePage }))
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
    } else if (categoryName && categoryName === categoryShelf[categoryName] && searchParams.get('title') && (idUser === '' || idUser !== '')) {
        try {
          dispatch(getNoticeByCategory({ title: searchParams.get('title'), categories: categoryName !== 'lost-found' ? categoryName : 'lost/found', minMonths: minMonths, maxMonths, sex: `${sex.join(',')}`, page: futurePage }))
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
        dispatch(fetchNotices(futurePage))
          .then((action) => {
            setFilteredItems(action.payload.data.notices)
          });
      }
  }, [categoryName, search, dispatch, ages, genders, idUser, searchParams, setFilteredItems, futurePage]);

  const allOrFilterItems = () => {
    if (!isLoading && !filteredItems.length) {
      return <p>Not found!</p>;
    } else if (!isLoading && filteredItems.length) {
      return filteredItems.map((notice, i) => (
        <NoticeCategoryItem key={i} item={notice} onTrashModal={onTrashModal} handleFavorite={handleFavorite} />
      ));
    }
  };


  return (
    <>
      <NoticesList filterHeight={filterHeight}>
        {isLoading && <Loader/>}
        {isLoading && array.map(item => <NoticeCategoryItemLoad key={item}/>)}
        {allOrFilterItems()}
      </NoticesList>
      {/* {filteredItems.length && !isLoading ? <Pagination/> : null} */}
    </>
  );
};

