import { Field, ErrorMessage } from 'formik';
const CategoryStep = ({ onNext }) => (
  <>
    {/* Radio buttons for selecting a category */}
    <div>
      <label>
        <Field type="radio" name="category" value="your-pet" checked />
        {/* Initial selection is "your pet" */}
        your pet
      </label>
      <label>
        <Field type="radio" name="category" value="sell" />
        sell
      </label>
      <label>
        <Field type="radio" name="category" value="lost-found" />
        lost/found
      </label>
      <label>
        <Field type="radio" name="category" value="for-free" />
        in good hands
      </label>
      <ErrorMessage name="category" component="div" className="error-message" />
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

export default CategoryStep;
