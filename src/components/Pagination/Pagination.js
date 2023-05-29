import { PaginationPanel, PaginationKey, SvgIcon } from "./Pagination.styled";
import icon from '../../images/icons.svg';



export const Pagination = () => {

  return(
    <PaginationPanel>
      <PaginationKey>
        <SvgIcon >
          <use href={icon + "#chevron-down"}/>
        </SvgIcon>
      </PaginationKey>
      <PaginationKey>
        1
      </PaginationKey>
      <PaginationKey>
        2
      </PaginationKey>
      <PaginationKey>
        3
      </PaginationKey>
      <PaginationKey>
        4
      </PaginationKey>
      <PaginationKey>
        <SvgIcon>
          <use href={icon + "#chevron-up"}/>
        </SvgIcon>
      </PaginationKey>
    </PaginationPanel>
  )
}