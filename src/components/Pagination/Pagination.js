import { PaginationWrapper, PaginationPanel, PaginationKey, PaginationKeyA, SvgIcon } from "./Pagination.styled";
import icon from '../../images/icons.svg';



export const Pagination = () => {

  const isDisabled = false

  const allPages = 4;
  const start = 1;
  const thisPage = 1;
  const array = Array.from({ length: allPages }, (_, index) => index + start);
  // console.log( 'array' , array)

  const handlePageNext = (page) => {
    console.log(`go page ${page}`)
  }

  const handlePageTransition = (page) => {
    console.log(`go page ${page}`)
  }

  const paginationMarkup = (allPages, thisPage) => {
    if (allPages < 6) {
      return array.map(paginationKey => {
        if (paginationKey === thisPage) {
          return  (
            <PaginationKeyA disabled key={paginationKey} onClick={() => handlePageTransition(paginationKey)}>
              {paginationKey}
            </PaginationKeyA>)
        } else {
          return (
            <PaginationKey key={paginationKey} onClick={() => handlePageTransition(paginationKey)}>
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
            <PaginationKeyA disabled key={paginationKey} onClick={() => handlePageTransition(paginationKey)}>
              {paginationKey}
            </PaginationKeyA>)
        } else {
          return (
            <PaginationKey key={paginationKey} onClick={() => handlePageTransition(paginationKey)}>
              {paginationKey}
            </PaginationKey>)
        }
      }
      );
    }
  };

  return(
    <PaginationWrapper>

    <PaginationPanel>
      <PaginationKey onClick={() => handlePageNext(-1)}>
        <SvgIcon>
          <use href={icon + "#chevron-down"}/>
        </SvgIcon>
      </PaginationKey>
      {paginationMarkup(allPages, thisPage)}
      {/* <PaginationKeyA isActive onClick={() => handlePageTransition('T')}>
              T
      </PaginationKeyA> */}
      <PaginationKey disabledBtn={isDisabled} onClick={() => handlePageNext(+1)}>
        <SvgIcon>
          <use href={icon + "#chevron-up"}/>
        </SvgIcon>
      </PaginationKey>
    </PaginationPanel>
    </PaginationWrapper>
  )
}