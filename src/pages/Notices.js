import { NoticeCategoryItem } from "components/NoticeCategoryItem/NoticeCategoryItem";
import { NoticesPage } from "components/NoticesPage/NoticesPage";

const Notices = () => {
  return (
    <>
      <h2>Notices</h2>
      <NoticesPage/>
      <NoticeCategoryItem/>
    </>
  );
};

export default Notices;
