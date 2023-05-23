import { useState, useCallback, useEffect } from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import ImageInput from 'components/ImageInput/ImageInput';
const MoreInfoStep = ({ onBack, selectedCategory, setFormValues }) => {
  const { values, setTouched } = useFormikContext();
  const [isDisabled, setIsDisabled] = useState(true);

  // Function to validate form fields. useCallback is used to memoize the validateFields function
  const validateFields = useCallback(() => {
    let formErrors = {};

    if (selectedCategory !== 'your-pet') {
      if (!values.sex) {
        formErrors.sex = 'Sex is required';
      }
      if (!values.location) {
        formErrors.location = 'Location is required';
      }
    }

    if (selectedCategory === 'sell') {
      if (!values.price) {
        formErrors.price = 'Price is required';
      }
    }

    if (!values.avatar) {
      formErrors.avatar = 'Avatar is required';
    }

    // Validate breed field
    if (!values.comments) {
      formErrors.comments = 'Comments are required';
    }
    return formErrors;
  }, [selectedCategory, values]);

  // Handle next button click
  const handleSubmitClick = () => {
    setTouched({
      sex: true,
      location: true,
      price: true,
      avatar: true,
      comments: true,
    });

    const formErrors = validateFields();

    if (Object.keys(formErrors).length === 0) {
      setFormValues(prevState => ({
        ...prevState,
        sex: values.sex,
        location: values.location,
        price: values.price,
        avatar: values.avatar,
        comments: values.comments,
      }));
    }
  };

  // Update disabled state based on form field validation
  useEffect(() => {
    const formErrors = validateFields();
    setIsDisabled(Object.keys(formErrors).length > 0);
  }, [values, selectedCategory, validateFields]); //  When any of these values change, the effect will run again to update the disabled state

  return (
    <>
      {/*     {/* Fields "sex" and "location" are only for the "sell" and "lost" categories */}
      {['sell', 'lost-found'].includes(selectedCategory) && (
        <>
          <div>
            <p>The sex</p>
            <label>
              Female
              <Field type="radio" name="sex" value="female" />
            </label>

            <label>
              Male
              <Field type="radio" name="sex" value="male" />
            </label>
            <ErrorMessage
              name="sex"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label>
              Location
              <Field
                type="text"
                name="location"
                placeholder="Type of location"
              />
            </label>
            <ErrorMessage
              name="location"
              component="div"
              className="error-message"
            />
          </div>
        </>
      )}

      {/* Field "price" is only for the "sell" category */}
      {selectedCategory === 'sell' && (
        <div>
          <label>
            Price
            <Field
              type="number"
              min="0"
              name="price"
              placeholder="Type of price"
            />
          </label>
          <ErrorMessage
            name="price"
            component="div"
            className="error-message"
          />
        </div>
      )}

      <div>
        <label>
          Load the pet’s image:
          <Field name="avatar" component={ImageInput} />
        </label>
        <ErrorMessage name="avatar" component="div" className="error-message" />
      </div>
      {/* Field "comments" for additional comments */}
      <div>
        <label>
          Comments
          <Field
            name="comments"
            rows="5"
            placeholder="Type breed"
            component="textarea"
          ></Field>
        </label>
        <ErrorMessage
          name="comments"
          component="div"
          className="error-message"
        />
      </div>

      {/* Button to navigate to the previous step */}
      <button type="button" onClick={onBack}>
        Back
      </button>
      {/* Button to submit the form */}
      <button type="submit" onClick={handleSubmitClick} disabled={isDisabled}>
        Done
      </button>
    </>
  );
};

export default MoreInfoStep;
