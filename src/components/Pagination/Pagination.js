import { PaginationWrapper, PaginationPanel, PaginationKey, PaginationKeyA, SvgIcon } from "./Pagination.styled";
import icon from '../../images/icons.svg';
import { useDispatch, useSelector } from "react-redux";
import { getPagination } from "Redux/notices/selector";
import { updateFuturePage } from "Redux/notices/slice";

export const Pagination = () => {

  const  dispatch = useDispatch();
  const { limit, numberNotices, page} = useSelector(getPagination);
  // console.log('p',page, 'nN', numberNotices , 'l', limit)
  
  const calcNextPage = (calcPage) => {
    const futurePage = Number(page) + calcPage;
    const allPages = Math.ceil(numberNotices/limit);
    if (futurePage > 0 && allPages >= futurePage) {
      return dispatch(updateFuturePage(futurePage));
    }
    dispatch(updateFuturePage(1))
  }

  const handleNextPage = (nextPage) => {
    dispatch(updateFuturePage(nextPage));
  }

  const allPages = Math.ceil(numberNotices/limit);
  const start = 1;
  const thisPage = Number(page);
  const array = Array.from({ length: allPages }, (_, index) => index + start);

  const paginationMarkup = (allPages, thisPage) => {
    if (allPages < 6) {
      return array.map(paginationKey => {
        if (paginationKey === thisPage) {
          return  (
            <PaginationKeyA disabled key={paginationKey} onClick={() => handleNextPage(paginationKey)}>
              {paginationKey}
            </PaginationKeyA>)
        } else {
          return (
            <PaginationKey key={paginationKey} onClick={() => handleNextPage(paginationKey)}>
              {paginationKey}
            </PaginationKey>)
        }
      }
      );
    } 
    // else if () {
      
    // } 
    // else {
    //   return array.map(paginationKey => {
    //     if (paginationKey === thisPage) {
    //       return  (
    //         <PaginationKeyA disabled key={paginationKey} onClick={() => handleNextPage(paginationKey)}>
    //           {paginationKey}
    //         </PaginationKeyA>)
    //     } else {
    //       return (
    //         <PaginationKey key={paginationKey} onClick={() => handleNextPage(paginationKey)}>
    //           {paginationKey}
    //         </PaginationKey>)
    //     }
    //   }
    //   );
    // }
  };

  return(
    <PaginationWrapper>

    <PaginationPanel>
      <PaginationKey disabledBtn={thisPage === 1} onClick={() => calcNextPage(-1)}>
        <SvgIcon>
          <use href={icon + "#chevron-down"}/>
        </SvgIcon>
      </PaginationKey>
      {paginationMarkup(allPages, thisPage)}
      <PaginationKey disabledBtn={thisPage === allPages} onClick={() => calcNextPage(+1)}>
        <SvgIcon>
          <use href={icon + "#chevron-up"}/>
        </SvgIcon>
      </PaginationKey>
    </PaginationPanel>
    </PaginationWrapper>
  )
}