import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export const SharedLayout = ({ desktop, tablet, mobile, isConnect }) => {

  return (
    <>
      <Header desktop={desktop} tablet={tablet} mobile={mobile} isConnect={isConnect} />
      <Outlet />
    </>
  );
};
