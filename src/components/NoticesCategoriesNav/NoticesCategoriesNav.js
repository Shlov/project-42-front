import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, NavWrapper } from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = ({ categories, privateCategory }) => {
  const { categoryName = 'all' } = useParams();
  const isConnect = useSelector(state => state.auth.isConnect)

  return (
    <NavWrapper>
      {categories.map((cat, i) => (
        <NavLink key={i} to={'/notices/' + cat.link}>
          <Button key={i} categoryPage={categoryName} category={cat.link}>
            {cat.text}
          </Button>
        </NavLink>
      ))}
      {isConnect &&
        privateCategory.map((cat, i) => (
          <NavLink key={i} to={'/notices/' + cat.link}>
            <Button key={i} categoryPage={categoryName} category={cat.link}>
              {cat.text}
            </Button>
          </NavLink>
        ))
      }
    </NavWrapper>
  );
}
