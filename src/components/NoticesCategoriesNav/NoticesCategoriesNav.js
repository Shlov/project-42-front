import {Button} from './NoticesCategoriesNav.styled'

export const NoticesCategoriesNav = ({ setCategoriesArr, categoriesArr, categories, category, setCategory }) => {
  const handleCategory = (categoryItem) => {
    if (categoriesArr.includes(categoryItem.text)) {
      setCategoriesArr(categoriesArr.filter(cat => cat !== categoryItem.text));
    } else {
      setCategoriesArr([...categoriesArr, categoryItem.text]);
    }
  }

  return (
    <>
      {categories.map((cat, i) => (
        <Button key={i} onClick={() => handleCategory(cat)}>
          {cat.text}
        </Button>
      ))}
    </>
  );
}
