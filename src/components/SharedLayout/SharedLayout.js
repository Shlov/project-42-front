import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Toaster } from 'react-hot-toast';
import { Suspense } from "react";
import Loader from '../Loader/Loader';

export const SharedLayout = () => {

  return (
    <>
      <Header/>
      <Toaster/>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
