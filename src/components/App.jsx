import { Route, Routes } from "react-router-dom";
import { lazy, useEffect, useState, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setDesktop, setTablet, setMobile } from '../Redux/main/main-slice'
import { SharedLayout } from './SharedLayout/SharedLayout';
import Loader from './Loader/Loader';


import '../index.css'
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


export const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const desktop = useSelector((state) => state.main.desktop)
  const tablet = useSelector((state) => state.main.tablet)
  const mobile = useSelector((state) => state.main.mobile)
  const isConnect = useSelector((state) => state.auth.isConnect)

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(setDesktop(width > 992))
    dispatch(setTablet(width > 768 && width < 991))
    dispatch(setMobile(width < 768))
  }, [width, dispatch]);


  return (
    <>
      {/* <div className="container"> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <SharedLayout
                desktop={desktop}
                tablet={tablet}
                mobile={mobile}
                isConnect={isConnect}
              />
            }
          >
            {/* <Route index element={<MainPage />}/> */}

            <Route index element={<Main />} />
            <Route path="/user" element={<User />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/notices">
              <Route index element={<Notices desktop={desktop} />} />
              <Route path=":categoryName" element={<Notices desktop={desktop} />} />
            </Route>
            <Route path="/add-pet" element={<AddPet />} />
            <Route path="/news" element={<News />} />
            <Route path="/friends" element={<OurFriends />} />

            {/* <Route path="/user" element={
              <PrivateRoute redirectTo="/login" component={<UserPage/>}/>
            }/>
            <Route path="/login" element={
              <RestrictedRoute redirectTo="/user" component={<LoginPage/>}/>
            }/> */}
          </Route>
        </Routes>
      </Suspense>
      {/* </div> */}
    </>
  );
};


