import { PaginationWrapper, PaginationPanel, PaginationKey, PaginationKeyA, SvgIcon } from "./Pagination.styled";
import icon from '../../images/icons.svg';
import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
// import { getPagination } from "Redux/notices/selector";
// import { updateFuturePage } from "Redux/notices/slice";

export const Pagination = ({currentPage, totalPages, onPageChange}) => {

  // const  dispatch = useDispatch();
  // const { limit, numberNotices, page} = useSelector(getPagination);
  const theme = useSelector(state => state.main.theme)
  console.log('currentPage',currentPage, 'totalPages', totalPages )
  
  // const calcNextPage = (calcPage) => {
  //   const futurePage = Number(page) + calcPage;
  //   const allPages = Math.ceil(numberNotices/limit);
  //   if (futurePage > 0 && allPages >= futurePage) {
  //     return dispatch(updateFuturePage(futurePage));
  //   }
  //   dispatch(updateFuturePage(1))
  // }

  // const handleNextPage = (nextPage) => {
  //   dispatch(updateFuturePage(nextPage));
  // }



  const allPages = totalPages;
  const length = totalPages < 6 ? totalPages : 5;
  let start = 1;
  const thisPage = currentPage;
  const isPaginationOnLeft = currentPage > 3 && totalPages > 5;
  const isPaginationOnRight = (totalPages - 2) > currentPage && totalPages > 5;
  
  const creatingStartForArray = () => {
    if (currentPage > 3) {
      start = currentPage - 2
    }
    if (currentPage > totalPages - 3) {
      start = totalPages - 4
    }
  }
  creatingStartForArray()
  const array = Array.from({ length: length }, (_, index) => index + start);

  const paginationMarkup = (allPages, thisPage) => {
    if (allPages < 6) {
      return array.map(paginationKey => {
        if (paginationKey === thisPage) {
          return  (
            <PaginationKeyA disabled key={paginationKey} onClick={() => onPageChange(paginationKey)}>
              {paginationKey}
            </PaginationKeyA>)
        } else {
          return (
            <PaginationKey key={paginationKey} onClick={() => onPageChange(paginationKey)} theme={theme}>
              {paginationKey}
            </PaginationKey>)
        }
      }
      );
    }
    // else if () {

    // }
    else {
      return array.map(paginationKey => {
        if (paginationKey === thisPage) {
          return  (
            <PaginationKeyA disabled key={paginationKey} onClick={() => onPageChange(paginationKey)}>
              {paginationKey}
            </PaginationKeyA>)
        } else {
          return (
            <PaginationKey key={paginationKey} onClick={() => onPageChange(paginationKey)} theme={theme}>
              {paginationKey}
            </PaginationKey>)
        }
      }
      );
    }
  };

  return(
    <PaginationWrapper>

    <PaginationPanel theme={theme}>
    <PaginationKey disabledBtn={thisPage === 1} onClick={() => onPageChange(1)} theme={theme}>
        <SvgIcon>
          <use href={icon + "#chevron-down"}/>
        </SvgIcon>
        <SvgIcon>
          <use href={icon + "#chevron-down"}/>
        </SvgIcon>
      </PaginationKey>
      <PaginationKey disabledBtn={thisPage === 1} onClick={() => onPageChange(currentPage - 1)} theme={theme}>
        <SvgIcon>
          <use href={icon + "#chevron-down"}/>
        </SvgIcon>
      </PaginationKey>

      { isPaginationOnLeft &&
        <PaginationKey disabledBtn={thisPage === 1} onClick={() => onPageChange(2)} theme={theme}>
          ···
        </PaginationKey>
      }


      {paginationMarkup(allPages, thisPage)}

      { isPaginationOnRight &&
        <PaginationKey disabledBtn={thisPage === 1} onClick={() => onPageChange(190)} theme={theme}>
          ···
        </PaginationKey>
      }

      <PaginationKey disabledBtn={thisPage === allPages} onClick={() => onPageChange(currentPage + 1)} theme={theme}>
        <SvgIcon>
          <use href={icon + "#chevron-up"}/>
        </SvgIcon>
      </PaginationKey>
      <PaginationKey disabledBtn={thisPage === allPages} onClick={() => onPageChange(totalPages)} theme={theme}>
        <SvgIcon>
          <use href={icon + "#chevron-up"}/>
        </SvgIcon>
        <SvgIcon>
          <use href={icon + "#chevron-up"}/>
        </SvgIcon>
      </PaginationKey>
    </PaginationPanel>
    </PaginationWrapper>
  )
}
