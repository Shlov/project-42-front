import { Field, ErrorMessage, useFormikContext } from 'formik';
const PersonalDetailsStep = ({ onBack, onNext }) => {
  const { values } = useFormikContext();
  return (
    <>
      {/* Field "title" is only for the "sell" and "lost" categories */}
      {['sell', 'lost-found'].includes(values.category) && (
        <div>
          <label>
            Title of add
            <Field type="text" name="title" placeholder="Type name pet" />
          </label>
        </div>
      )}

      {/* Input field for capturing the name of the pet */}
      <div>
        <label>
          Name pet
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
      <button type="button" onClick={onNext}>
        Next
      </button>
    </>
  );
};

export default PersonalDetailsStep;
