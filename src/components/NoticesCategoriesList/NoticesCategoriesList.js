// Компонент рендерить список всіх оголошень відповідної категорії - NoticeCategoryItem, дані по яким отримує з бекенду

import { NoticeCategoryItem } from "components/NoticeCategoryItem/NoticeCategoryItem";
import { NoticesList } from "./NoticesCategoriesList.styled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoadNotices, getNotices, selectNoticesByCategory } from "Redux/notices/selector";
import { useEffect } from "react";
import { fetchNotices, getNoticeByCategory } from "Redux/notices/operation";

export const categoryShelf = {
  sell: 'sell',
  'lost-found': 'lost-found',
  'for-free': 'for-free',
};

export const NoticeCategoryList = ({ onTrashModal, filteredItems, setFilteredItems }) => {
  const isLoading = useSelector(getIsLoadNotices);
  const dispatch = useDispatch()
  const notices = useSelector(selectNoticesByCategory);
  const allItems = useSelector(getNotices)
  const category = useParams();

  useEffect(() => {
    dispatch(fetchNotices())
  },[dispatch, category])

  useEffect(() => {
    if (category) {
      if (category === categoryShelf[category]) {
        dispatch(getNoticeByCategory({ category: category }));
        setFilteredItems(notices)
      }
      if (category === 'favorites-ads') {
        // dispatch(getFavorites({ search, page }));
      }
      if (category === 'my-ads') {
        // dispatch(getUserNotices({ search, page }));
      }
    }
  }, [category, dispatch, notices, setFilteredItems]);


  return(
    <NoticesList>

      {isLoading && <h2>loading....</h2>}
      {!isLoading && !category.categoryName 
        ? allItems.map((notice, i) =>
        <NoticeCategoryItem key={i} item={notice} onTrashModal={onTrashModal}/>)
        : filteredItems.map((notice, i) =>
        <NoticeCategoryItem key={i} item={notice} onTrashModal={onTrashModal}/>)
      }
    </NoticesList>
  )
}



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


  // {!isLoading && filteredItems
  //   ? filteredItems.map((notice, i) =>
  //     <NoticeCategoryItem key={i} item={notice} onTrashModal={onTrashModal}/>
  //   )
  //   : <h2>loading....</h2>
  //   }