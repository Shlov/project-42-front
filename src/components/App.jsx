import { Route, Routes } from 'react-router-dom';
// import { lazy, useEffect, useState, Suspense } from 'react';
import { lazy, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDesktop, setTablet, setMobile } from '../Redux/main/main-slice';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { Loader } from './Loader/Loader';

import '../index.css';
import { selectIsRefreshing } from 'Redux/auth/selector';
import { refreshUser } from 'Redux/auth/operation';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';

const Main = lazy(() => import('../pages/Main'));
const Notices = lazy(() => import('../pages/Notices'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const User = lazy(() => import('../pages/User'));
const AddPet = lazy(() => import('../pages/AddPet'));
const News = lazy(() => import('../pages/News'));
const OurFriends = lazy(() => import('../pages/OurFriends'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  // const desktop = useSelector(state => state.main.desktop);
  // const tablet = useSelector(state => state.main.tablet);
  // const mobile = useSelector(state => state.main.mobile);
  // const isConnect = useSelector(state => state.auth.isConnect);

  useEffect(() => {
    const handleResize = event => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(setDesktop(width > 992));
    dispatch(setTablet(width > 768 && width < 991));
    dispatch(setMobile(width < 768));
  }, [width, dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p> Refreshing user... </p>
  ) : (
    // <>
    // <Suspense fallback={<Loader />}>
    <Routes>
      {/* <div className="container"> */}
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={<MainPage />}/> */}

        <Route index element={<Main />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notices">
          <Route index element={<Notices />} />
          <Route path=":categoryName" element={<Notices />} />
        </Route>
        <Route path="/add-pet" element={<AddPet />} />
        <Route path="/news" element={<News />} />
        <Route path="/friends" element={<OurFriends />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/user" element={
                <PrivateRoute redirectTo="/login" component={<UserPage/>}/>
              }/>
              <Route path="/login" element={
                <RestrictedRoute redirectTo="/user" component={<LoginPage/>}/>
              }/> */}
      </Route>
      {/* </div> */}
    </Routes>
    // </Suspense>
    // </>
  );
};
