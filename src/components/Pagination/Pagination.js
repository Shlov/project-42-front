import { PaginationWrapper, PaginationPanel, PaginationKey, PaginationKeyA, SvgIcon } from "./Pagination.styled";
import icon from '../../images/icons.svg';
import { useSelector } from "react-redux";
import { getPagination } from "Redux/notices/selector";



export const Pagination = ({calcNextPage, handleNextPage}) => {

  const { limit, numberNotices, page} = useSelector(getPagination);

  console.log('p',page, 'nN', numberNotices , 'l', limit)


  const isDisabled = false

  // const allPages = 4;
  const allPages = Math.ceil(numberNotices/limit);
  const start = 1;
  const thisPage = Number(page);
  // const thisPage = 1;
  const array = Array.from({ length: allPages }, (_, index) => index + start);


  // const handlePageNext = (page) => {
  //   console.log(`go page ${page}`)
  // }

  // const handlePageTransition = (page) => {
  //   console.log(`go page ${page}`)
  // }

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
      <PaginationKey onClick={() => calcNextPage(-1)}>
        <SvgIcon>
          <use href={icon + "#chevron-down"}/>
        </SvgIcon>
      </PaginationKey>
      {paginationMarkup(allPages, thisPage)}
      {/* <PaginationKeyA isActive onClick={() => handlePageTransition('T')}>
              T
      </PaginationKeyA> */}
      <PaginationKey disabledBtn={isDisabled} onClick={() => calcNextPage(+1)}>
        <SvgIcon>
          <use href={icon + "#chevron-up"}/>
        </SvgIcon>
      </PaginationKey>
    </PaginationPanel>
    </PaginationWrapper>
  )
}