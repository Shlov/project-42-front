import { Field, ErrorMessage } from 'formik';
const CategoryStep = ({ onNext, onSelectCategory }) => {
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
            checked
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
            onChange={handleCategoryChange}
          />
          sell
        </label>
        <label>
          <Field
            type="radio"
            name="category"
            value="lost-found"
            onChange={handleCategoryChange}
          />
          lost/found
        </label>
        <label>
          <Field
            type="radio"
            name="category"
            value="for-free"
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
      <button type="button">Cancel</button>
      {/* Cancel button, must be changed to BackLink */}
      <button type="button" onClick={onNext}>
        {/* Proceed to the next step */}
        Next
      </button>
    </>
  );
};

export default CategoryStep;
