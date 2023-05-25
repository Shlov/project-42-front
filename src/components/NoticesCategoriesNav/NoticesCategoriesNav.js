import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {Button, NavWrapper} from './NoticesCategoriesNav.styled'

export const NoticesCategoriesNav = ({ setCategoriesArr, categoriesArr, categories, category, setCategory }) => {
  const categoryPage = useParams()

  return (
    <NavWrapper>
      {categories.map((cat, i) => (
        <NavLink key={i} to={'/notices/' + cat.link}>
          <Button key={i} categoryPage={categoryPage} category={cat.link}>
            {cat.text}
          </Button>
        </NavLink>
      ))}
    </NavWrapper>
  );
}
