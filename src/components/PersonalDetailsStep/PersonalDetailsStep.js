import { Field, ErrorMessage, useFormikContext } from 'formik';
import { useState, useEffect, useCallback } from 'react';

const PersonalDetailsStep = ({
  onBack,
  onNext,
  selectedCategory,
  setFormValues,
}) => {
  const { values, setTouched } = useFormikContext();
  const [isDisabled, setIsDisabled] = useState(true);

  // Function to validate form fields. useCallback is used to memoize the validateFields function
  const validateFields = useCallback(() => {
    let formErrors = {};

    // Validate title field if category is 'sell', 'lost-found' or 'for-free'
    if (selectedCategory !== 'your-pet') {
      if (!values.title) {
        formErrors.title = 'Title is required';
      }
    }

    // Validate name field
    if (!values.name) {
      formErrors.name = 'Name is required';
    }

    // Validate date field
    if (!values.date) {
      formErrors.date = 'Date of birth is required';
    }

    // Validate breed field
    if (!values.breed) {
      formErrors.breed = 'Breed is required';
    }

    return formErrors;
  }, [selectedCategory, values]);

  // Handle next button click
  const handleNextClick = () => {
    setTouched({
      title: true,
      name: true,
      date: true,
      breed: true,
    });

    const formErrors = validateFields();

    if (Object.keys(formErrors).length === 0) {
      setFormValues(prevState => ({
        ...prevState,
        title: values.title,
        name: values.name,
        date: values.date,
        breed: values.breed,
      }));
      onNext();
    }
  };

  // Update disabled state based on form field validation
  useEffect(() => {
    const formErrors = validateFields();
    setIsDisabled(Object.keys(formErrors).length > 0);
  }, [values, selectedCategory, validateFields]); //  When any of these values change, the effect will run again to update the disabled state

  return (
    <>
      {/* Field "title" is only for the "sell" and "lost" categories */}
      {selectedCategory !== 'your-pet' && (
        <div>
          <label>
            Title of add
            <Field type="text" name="title" placeholder="Type title" />
          </label>
          <ErrorMessage
            name="title"
            component="div"
            className="error-message"
          />
        </div>
      )}

      {/* Input field for capturing the name of the pet */}
      <div>
        <label>
          Pet’s name
          <Field type="text" name="name" placeholder="Type name pet" />
        </label>
        <ErrorMessage name="name" component="div" className="error-message" />
      </div>
      {/* Input field for capturing the date of birth of the pet */}
      <div>
        <label>
          Date of birth
          <Field type="text" name="date" placeholder="Type date of birth" />
        </label>
        <ErrorMessage name="date" component="div" className="error-message" />
      </div>
      {/* Input field for capturing the breed of the pet */}
      <div>
        <label>
          Breed
          <Field type="text" name="breed" placeholder="Type breed" />
        </label>
        <ErrorMessage name="breed" component="div" className="error-message" />
      </div>
      {/* Button to navigate to the previous step */}
      <button type="button" onClick={onBack}>
        Back
      </button>
      {/* Button to navigate to the next step */}
      <button type="button" onClick={handleNextClick} disabled={isDisabled}>
        Next
      </button>
    </>
  );
};

export default PersonalDetailsStep;
