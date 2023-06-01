import { useState } from 'react'
import { Button, FilterCSS, FilterSelect, FilterSelectTitle, FiltersButton, FiltersChevron, FiltersRound, FilterWrapper, FilterItem } from './NoticesFilter.styled'
import icons from 'images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import RemoveItem from '../../images/icons/cross-small-1.svg'
import { updateFuturePage } from 'Redux/notices/slice';

export const FindFilter = ({ setAges, ages, genders, setGenders, setOpenFilter, openFilter, setActiveButtons, activeButtons, handleRemoveItem }) => {
  const mobile = useSelector(state => state.main.mobile)
  const tablet = useSelector(state => state.main.tablet)
  const desktop = useSelector(state => state.main.desktop)
  const theme = useSelector(state => state.main.theme)
  const  dispatch = useDispatch();
  const [activeAgeButton, setActiveAgeButton] = useState(false)
  const [activeGenderButton, setActiveGenderButton] = useState(false)
  const filters = {
    age: {
      name: 'age',
      items: ['3-12 m', '1 year', '2+ year']
    },
    gender: {
      name: 'gender',
      items: ['male', 'female']
    }
  }

  const handleChange = (event, ageText) => {
    if (event.target.checked) {
      if (!ages.includes(ageText)) {
        setAges([...ages, ageText]);
        setActiveButtons([...activeButtons, ageText]);
      }
    } else {
      setAges(ages.filter(cat => cat !== ageText));
      setActiveButtons(activeButtons.filter(btn => btn !== ageText));
    }
  }

  const handleGender = (event, genderText) => {
    if (event.target.checked) {
      if (!genders.includes(genderText)) {
        setGenders([genderText]);
        setActiveButtons([genderText]); // Обновление состояния activeButtons
      }
    } else {
      setGenders(genders.filter(gender => gender !== genderText));
      setActiveButtons(activeButtons.filter(btn => btn !== genderText)); // Обновление состояния activeButtons
    }
  }

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter)
  }

  // onClick={() => dispatch(updateFuturePage(1))}

  return (
    <FilterWrapper desktop={desktop} mobile={mobile} tablet={tablet}>
      {desktop &&
        activeButtons.map((button, i) =>
          <FilterItem key={i}>
            <p>{button}</p>
            <img src={RemoveItem} alt="" onClick={() => handleRemoveItem(button)} />
          </FilterItem>
        )
      }
      <Button onClick={handleOpenFilter} mobile={mobile} ages={ages} theme={theme}>
        {!mobile && 'Filter'}
        <FilterCSS width="21" height="24" mobile={mobile} ages={ages}/>
      </Button>

      {openFilter ?
        <FilterSelect theme={theme}>
          <FilterSelectTitle>Filter</FilterSelectTitle>
          <FiltersButton>
            <div onClick={() => {setActiveAgeButton(!activeAgeButton); dispatch(updateFuturePage(1))}} style={{marginBottom: activeAgeButton ? '16px' : '0px'}}>
              {activeAgeButton ? <FiltersChevron><use href={icons + '#chevron-up'} /></FiltersChevron> : <FiltersChevron><use href={icons + '#chevron-down'} /></FiltersChevron>}
              <p>By age</p>
            </div>
              {filters.age.items.map((item, i) =>
                activeAgeButton ?
                  <label key={i} htmlFor={item}>
                    <input type="checkbox" name={filters.age.name} id={item} onChange={(event) => handleChange(event, item)} />
                    {ages.includes(item) ? <FiltersRound><use href={icons + '#check-round'} /></FiltersRound> : <FiltersRound><use href={icons + '#round'} /></FiltersRound>}
                    {item}
                  </label>
                : null
              )}
          </FiltersButton>
          <FiltersButton>
            <div onClick={() => {setActiveGenderButton(!activeGenderButton); dispatch(updateFuturePage(1))}} style={{marginBottom: activeGenderButton ? '16px' : '0px'}}>
              {activeGenderButton ? <FiltersChevron><use href={icons + '#chevron-up'} /></FiltersChevron> : <FiltersChevron><use href={icons + '#chevron-down'} /></FiltersChevron>}
              <p>By gender</p>
            </div>
              {filters.gender.items.map((item, i) =>
                activeGenderButton ?
                  <label key={i} htmlFor={item}>
                    <input type="radio" name={filters.gender.name} id={item} onChange={(event) => handleGender(event, item)} />
                    {genders.includes(item) ? <FiltersRound><use href={icons + '#check-round'} /></FiltersRound> : <FiltersRound><use href={icons + '#round'} /></FiltersRound>}
                    {item}
                  </label>
                : null
              )}
          </FiltersButton>
        </FilterSelect>
        : null
      }
    </FilterWrapper>
  )
}
