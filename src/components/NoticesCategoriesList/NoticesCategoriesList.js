// Компонент рендерить список всіх оголошень відповідної категорії - NoticeCategoryItem, дані по яким отримує з бекенду

import { NoticeCategoryItem } from "components/NoticeCategoryItem/NoticeCategoryItem";
import { NoticesList } from "./NoticesCategoriesList.styled";

export const NoticeCategoryList = ({onTrashModal}) => {

  // Наповнювач для карток
  const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  const item = {
    category: 'In good hands',
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgGi3YJI2iukoOZ3_fbYCyoiR4dYO8fIyIu_qpphSUf8GRAmFN", 
    title: "Cute fox looking for a home",
    location: 'Kyiv',
    age: '1 year',
    sex: 'female',
  }
  const notices = arr.fill(item);
// 



  return(
    <NoticesList>
      {notices.map(notice =>
        <NoticeCategoryItem item={notice} onTrashModal={onTrashModal}/>
      )}
    </NoticesList>
  )
}