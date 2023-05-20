import { Route, Routes } from "react-router-dom";
import { lazy, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setDesktop, setTablet, setMobile } from '../Redux/main/main-slice'
import { SharedLayout } from './SharedLayout/SharedLayout';


import '../index.css'
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';

const MainPage = lazy(() => import('../pages/MainPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));


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
  }, [width])


  return (
    <>
      <div className="container">
        {/* <Header desktop={desktop} tablet={tablet} mobile={mobile} isConnect={isConnect} /> */}
        <Routes>
          <Route path="/" element={<SharedLayout desktop={desktop} tablet={tablet} mobile={mobile} isConnect={isConnect}/>}>
            {/* <Route index element={<MainPage />}/> */}

            <Route path="/main" element={<MainPage/>}/>
            <Route path="/user" element={<UserPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/notices" element={<NoticesPage/>}/>
            <Route path="/add-pet" element={<AddPetPage/>}/>
            <Route path="/news" element={<NewsPage/>}/>
            <Route path="/friends " element={<OurFriendsPage/>}/>

            {/* <Route path="/user" element={
              <PrivateRoute redirectTo="/login" component={<UserPage/>}/>
            }/>
            <Route path="/login" element={
              <RestrictedRoute redirectTo="/user" component={<LoginPage/>}/>
            }/> */}

          </Route>
        </Routes>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }}
        >
          Your pet....
        </div>
      </div>
    </>
  );
};
