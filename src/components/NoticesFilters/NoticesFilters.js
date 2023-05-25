import { useState } from 'react'
import { Button, FilterCSS, FilterSelect, FilterSelectTitle, FiltersButton, FiltersChevron, FiltersRound, FilterWrapper } from './NoticesFilter.styled'
import icons from 'images/icons.svg';

export const FindFilter = ({ setAges, ages, genders, setGenders, setOpenFilter, openFilter }) => {
  const [activeAgeButton, setActiveAgeButton] = useState(false)
  const [activeGenderButton, setActiveGenderButton] = useState(false)
  const filters = {
    age: {
      name: 'age',
      items: ['3-12 m', '1 year', '2 year']
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
      }
    } else {
      setAges(ages.filter(cat => cat !== ageText));
    }
  }

  const handleGender = (event, genderText) => {
    if (event.target.checked) {
      if (!genders.includes(genderText)) {
        setGenders([...genders, genderText]);
      }
    } else {
      setGenders(genders.filter(gender => gender !== genderText));
    }
  }

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter)
  }

  return (
    <FilterWrapper>
      <Button onClick={handleOpenFilter}>
        Filter
        <FilterCSS width="21" height="24" />
      </Button>
      {openFilter ?
        <FilterSelect>
          <FilterSelectTitle>Filter</FilterSelectTitle>
          <FiltersButton>
            <div onClick={() => setActiveAgeButton(!activeAgeButton)} style={{marginBottom: activeAgeButton ? '16px' : '0px'}}>
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
            <div onClick={() => setActiveGenderButton(!activeGenderButton)} style={{marginBottom: activeGenderButton ? '16px' : '0px'}}>
              {activeGenderButton ? <FiltersChevron><use href={icons + '#chevron-up'} /></FiltersChevron> : <FiltersChevron><use href={icons + '#chevron-down'} /></FiltersChevron>}
              <p>By gender</p>
            </div>
              {filters.gender.items.map((item, i) =>
                activeGenderButton ?
                  <label key={i} htmlFor={item}>
                    <input type="checkbox" name={filters.gender.name} id={item} onChange={(event) => handleGender(event, item)} />
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
