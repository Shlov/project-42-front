// import { useState } from 'react';
// import { FormSearch, InputSearch, Wrap, ButtonIcon } from './Search.styled';
// import icons from 'images/icons.svg';

// export const ButtonIconForm = ({ searchQuery, onClick }) => {
//   return (
//     <Wrap>
//       <ButtonIcon type="submit" color="#54ADFF" hovercolor="#1075d3">
//         <svg width={24} height={24} fill="#54ADFF">
//           <use href={icons + '#icon-search'}></use>
//         </svg>
//       </ButtonIcon>

//       {searchQuery !== '' && (
//         <ButtonIcon
//           type="button"
//           color="#FFC107"
//           fill={'#757575'}
//           hovercolor="#F43F5E"
//           onClick={onClick}
//         >
//         </ButtonIcon>
//       )}
//     </Wrap>
//   );
// };

// export const Search = ({ onSubmit }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit(searchQuery);
//   };

//   const handleChange = e => {
//     setSearchQuery(e.target.value.toLowerCase());
//   };

//   const handleReset = () => {
//     setSearchQuery('');
//     onSubmit('');
//   };

//   return (
//     <FormSearch onSubmit={handleSubmit}>
//       <InputSearch
//         placeholder="Search"
//         type="text"
//         name="searchQuery"
//         value={searchQuery}
//         onChange={e => handleChange(e)}
//       />
//       <ButtonIconForm onClick={handleReset} searchQuery={searchQuery} />
//     </FormSearch>
//   );
// };