import { useState } from 'react'
import { Button, FilterCSS, FilterSelect, FilterSelectTitle, FiltersButton } from './NoticesFilter.styled'
import { ReactComponent as ArrowDown} from '../../images/icons/chevron-down.svg'
import { ReactComponent as ArrowUp} from '../../images/icons/chevron-up.svg'
import { ReactComponent as Round } from '../../images/icons/round.svg'
import { ReactComponent as CheckRound } from '../../images/icons/check-round.svg'

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

  const handleAges = (event, ageText) => {
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
    <>
      <Button onClick={handleOpenFilter}>
        Filter
        <FilterCSS width="21" height="24" />
      </Button>
      {openFilter ?
        <FilterSelect>
          <FilterSelectTitle>Filter</FilterSelectTitle>
          <FiltersButton>
            <div onClick={() => setActiveAgeButton(!activeAgeButton)} style={{marginBottom: activeAgeButton ? '16px' : '0px'}}>
              {activeAgeButton ? <ArrowUp /> : <ArrowDown />}
              <p>By age</p>
            </div>
              {filters.age.items.map((item, i) =>
                activeAgeButton ?
                  <label key={i} htmlFor={item}>
                    <input type="checkbox" name={filters.age.name} id={item} onChange={(event) => handleAges(event, item)} />
                    {ages.includes(item) ? <CheckRound /> : <Round />}
                    {item}
                  </label>
                : null
              )}
          </FiltersButton>
          <FiltersButton>
            <div onClick={() => setActiveGenderButton(!activeGenderButton)} style={{marginBottom: activeGenderButton ? '16px' : '0px'}}>
              {activeGenderButton ? <ArrowUp /> : <ArrowDown />}
              <p>By gender</p>
            </div>
              {filters.gender.items.map((item, i) =>
                activeGenderButton ?
                  <label key={i} htmlFor={item}>
                    <input type="checkbox" name={filters.gender.name} id={item} onChange={(event) => handleGender(event, item)} />
                    {genders.includes(item) ? <CheckRound /> : <Round />}
                    {item}
                  </label>
                : null
              )}
          </FiltersButton>
        </FilterSelect>
        : null
      }
    </>
  )
}
