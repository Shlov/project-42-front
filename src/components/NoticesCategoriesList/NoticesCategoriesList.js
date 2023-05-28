// Компонент рендерить список всіх оголошень відповідної категорії - NoticeCategoryItem, дані по яким отримує з бекенду
import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { NoticesList } from './NoticesCategoriesList.styled';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsLoadNotices,
  getNotices,
} from 'Redux/notices/selector';
import { useEffect } from 'react';
import { fetchNotices } from 'Redux/notices/operation';
import { NoticeCategoryItemLoad } from 'components/NoticeCategoryItemLoad/NoticeCategoryItemLoad';

export const categoryShelf = {
  sell: 'sell',
  'lost/found': 'lost/found',
  'for-free': 'for-free',
};

export const NoticeCategoryList = ({
  onTrashModal,
  search,
  filteredItems
}) => {
  const isLoading = useSelector(getIsLoadNotices);
  const dispatch = useDispatch();
  const allItems = useSelector(getNotices);
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);

  const allOrFilterItems = () => {
    if (!isLoading && !filteredItems && (!search && !categoryName)) {
      return allItems.map((notice, i) => (
        <NoticeCategoryItem key={i} item={notice} onTrashModal={onTrashModal} />
      ));
    } else if (!isLoading && !filteredItems.length) {
      return <p>Not found!</p>;
    } else if(!isLoading && filteredItems.length) {
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
