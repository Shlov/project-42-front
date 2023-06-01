import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, NavWrapper } from './NoticesCategoriesNav.styled';
import { updateFuturePage } from 'Redux/notices/slice';

export const NoticesCategoriesNav = ({ categories, privateCategory }) => {
  const { categoryName = 'all' } = useParams();
  const isConnect = useSelector(state => state.auth.isConnect)
  const  dispatch = useDispatch();

  return (
    <NavWrapper>
      {categories.map((cat, i) => (
        <NavLink key={i} to={'/notices/' + cat.link}>
          <Button key={i} categoryPage={categoryName} category={cat.link} onClick={() => dispatch(updateFuturePage(1))}>
            {cat.text}
          </Button>
        </NavLink>
      ))}
      {isConnect &&
        privateCategory.map((cat, i) => (
          <NavLink key={i} to={'/notices/' + cat.link}>
            <Button key={i} categoryPage={categoryName} category={cat.link} onClick={() => dispatch(updateFuturePage(1))}>
              {cat.text}
            </Button>
          </NavLink>
        ))
      }
    </NavWrapper>
  );
}
