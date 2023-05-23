import { useEffect, useState } from "react";
import { NoticeCategoryItem } from "components/NoticeCategoryItem/NoticeCategoryItem";
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav'
import { FindFilter } from 'components/NoticesFilters/NoticesFilters'
import { Filters } from './Notices.styled'

const Notices = () => {
  const categories = [
    {
      text: 'sell',
      type: 'public',
      id: 1,
      name: 'category'
    },
    {
      text: 'lost/found',
      type: 'public',
      id: 2,
      name: 'category'
    },
    {
      text: 'in good hands',
      type: 'public',
      id: 3,
      name: 'category'
    },
    {
      text: 'favourite ads',
      type: 'private',
      id: 4,
      name: 'category'
    },
    {
      text: 'my ads',
      type: 'private',
      id: 5,
      name: 'category'
    }
  ]

  const items = [
    {
      category: 'in good hands',
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgGi3YJI2iukoOZ3_fbYCyoiR4dYO8fIyIu_qpphSUf8GRAmFN',
      tags: [
        {
          img: '#location',
          text: 'Lviv'
        },
        {
          img: '#clock',
          text: '2 year'
        },
        {
          img: '#male',
          text: 'female'
        },
      ],
    },
    {
      category: 'sell',
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgGi3YJI2iukoOZ3_fbYCyoiR4dYO8fIyIu_qpphSUf8GRAmFN',
      tags: [
        {
          img: '#location',
          text: 'Lviv'
        },
        {
          img: '#clock',
          text: '1 year'
        },
        {
          img: '#male',
          text: 'female'
        },
      ],
    },
    {
      category: 'lost/found',
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgGi3YJI2iukoOZ3_fbYCyoiR4dYO8fIyIu_qpphSUf8GRAmFN',
      tags: [
        {
          img: '#location',
          text: 'Lviv'
        },
        {
          img: '#clock',
          text: '1 year'
        },
        {
          img: '#male',
          text: 'male'
        },
      ],
    }
  ]

  const [category, setCategory] = useState('')
  const [filteredItems, setFilteredItems] = useState(items.slice())
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [ages, setAges] = useState([])
  const [genders, setGenders] = useState([])
  const [openFilter, setOpenFilter] = useState(false)

  useEffect(() => {
    let newItems = [...items];
    // if (ages.length || genders.length ) {
    //   newItems = newItems.filter(item => item.tags.some(tag => ages.includes(tag.text)));
    // }

    if (ages.length || genders.length ) {
      newItems = newItems.filter(item => (item.tags.some(tag => ages.includes(tag.text)) || item.tags.some(tag => genders.includes(tag.text))));
    }

    if (categoriesArr.length) {
      newItems = newItems.filter(item => categoriesArr.includes(item.category));
    }
    setFilteredItems(newItems)
  }, [ages, genders, categoriesArr]);

  return (
    <>
      <h2>Notices</h2>
      <Filters>
        <div>
          <NoticesCategoriesNav categoriesArr={categoriesArr} setCategoriesArr={setCategoriesArr} categories={categories} category={category} setCategory={setCategory} />
        </div>
        <FindFilter setAges={setAges} ages={ages} setGenders={setGenders} genders={genders} setOpenFilter={setOpenFilter} openFilter={openFilter} />
      </Filters>
      {
        filteredItems.length
          ? filteredItems.map((item, i) => <NoticeCategoryItem key={i} item={item} />)
          : null
      }
    </>
  );
};

export default Notices;