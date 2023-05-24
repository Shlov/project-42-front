// Компонент рендерить список всіх оголошень відповідної категорії - NoticeCategoryItem, дані по яким отримує з бекенду

import { NoticeCategoryItem } from "components/NoticeCategoryItem/NoticeCategoryItem";
import { NoticesList } from "./NoticesCategoriesList.styled";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, getNotices } from "Redux/notices/selector";
import { useEffect } from "react";
import { fetchNotices } from "Redux/notices/operation";

export const NoticeCategoryList = ({onTrashModal}) => {

  const allNotices = useSelector(getNotices);
  const isLoading = useSelector(getIsLoading);
  console.log(allNotices);

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

const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNotices())
  },[dispatch])

  return(
    <NoticesList>
      {!isLoading 
      ? allNotices.map(notice =>
        <NoticeCategoryItem key={notice._id} item={notice} onTrashModal={onTrashModal}/>
      )
      : <h2>loading....</h2>
      }
    </NoticesList>
  )
}