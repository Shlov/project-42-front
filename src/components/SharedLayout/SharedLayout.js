// Компонент рендериться на маршрут "/" . Містить в собі Header та обгортає вкладені маршрути з їх відповідними сторінками

import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  
  return (
    <>
      <h2>SharedLayout</h2>
      <Outlet />
    </>
  );
};
