import { Field, ErrorMessage, useFormikContext } from 'formik';
const MoreInfoStep = ({ onBack }) => {
  const { values } = useFormikContext(); // useFormikContext is used to access the values and setFieldValue properties from the Formik context
  console.log(values);
  return (
    <>
      {/*     {/* Fields "sex" and "location" are only for the "sell" and "lost" categories */}
      {['sell', 'lost-found'].includes(values.category) && (
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
      {values.category === 'sell' && (
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
          Add photo
          <Field type="file" name="avatar" />
        </label>
        <ErrorMessage name="avatar" component="div" className="error-message" />
      </div>
      {/* Field "comments" for additional comments */}
      <div>
        <label>
          Comments
          <textarea
            name="comments"
            rows="5"
            placeholder="Type breed"
          ></textarea>
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
      <button type="submit">Done</button>
    </>
  );
};

export default MoreInfoStep;
