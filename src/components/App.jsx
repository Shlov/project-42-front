import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
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
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
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
    </>
  );
};
