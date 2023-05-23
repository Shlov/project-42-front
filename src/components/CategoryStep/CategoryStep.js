import { Field, ErrorMessage } from 'formik';
import { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BackLink from './../BackLink/BackLink';

const CategoryStep = ({ onNext, onSelectCategory, selectedCategory }) => {
  const location = useLocation();
  const locRef = useRef(location.state?.from ?? '/main'); // for Back button
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    !selectedCategory ? setIsDisabled(true) : setIsDisabled(false);
  }, [selectedCategory]);

  const handleCategoryChange = event => {
    const selectedCategory = event.target.value;
    onSelectCategory(selectedCategory);
  };

  return (
    <>
      {/* Radio buttons for selecting a category */}
      <div>
        <label>
          <Field
            type="radio"
            name="category"
            value="your-pet"
            checked={selectedCategory === 'your-pet'}
            onChange={handleCategoryChange}
          />
          {/* Initial selection is "your pet" */}
          your pet
        </label>
        <label>
          <Field
            type="radio"
            name="category"
            value="sell"
            checked={selectedCategory === 'sell'}
            onChange={handleCategoryChange}
          />
          sell
        </label>
        <label>
          <Field
            type="radio"
            name="category"
            value="lost-found"
            checked={selectedCategory === 'lost-found'}
            onChange={handleCategoryChange}
          />
          lost/found
        </label>
        <label>
          <Field
            type="radio"
            name="category"
            value="for-free"
            checked={selectedCategory === 'for-free'}
            onChange={handleCategoryChange}
          />
          in good hands
        </label>
        <ErrorMessage
          name="category"
          component="div"
          className="error-message"
        />
        {/* Validation error message for the category field */}
      </div>
      <BackLink to={locRef.current}>Cancel</BackLink>
      {/* Cancel button, must be changed to BackLink */}
      <button type="button" onClick={onNext} disabled={isDisabled}>
        {/* Proceed to the next step */}
        Next
      </button>
    </>
  );
};

export default CategoryStep;
