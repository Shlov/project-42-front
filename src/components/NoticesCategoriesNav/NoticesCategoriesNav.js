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
      {categories.map((cat, i) =>
        <label key={i} htmlFor={cat.id}>
          {cat.text}
          <input type="checkbox" name={cat.name} id={cat.id} value={cat.text} onChange={() => handleCategory(cat)} />
        </label>
      )}
    </>
  )
}
