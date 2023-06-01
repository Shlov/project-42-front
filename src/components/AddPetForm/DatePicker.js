// import { Field, useFormikContext } from 'formik';
// import { parse, format } from 'date-fns';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Input } from './Input/Input.styled';
// import styled from 'styled-components';

// const DateField = styled(DatePicker)`
//   width: 100%;
//   ${Input}
// `;

// const CustomDatePicker = ({ name, placeholder, ...rest }) => {
//   const { setFieldValue } = useFormikContext();

//   const handleChange = date => {
//     if (date) {
//       const formattedDate = format(date, 'dd.MM.yyyy');
//       setFieldValue(name, formattedDate);
//     } else {
//       setFieldValue(name, null);
//     }
//   };

//   const parseDate = (value, originalValue) => {
//     if (value && value instanceof Date) {
//       return value;
//     }
//     if (originalValue) {
//       const parsedDate = parse(originalValue, 'dd.MM.yyyy', new Date());
//       return parsedDate;
//     }
//     return null;
//   };

//   return (
//     <div>
//       <Field name={name} parse={parseDate}>
//         {({ field }) => (
//           <DateField
//             isClearable
//             id={name}
//             {...field}
//             {...rest}
//             placeholderText={placeholder}
//             dateFormat="dd.MM.yyyy"
//             selected={field.value ? parseDate(null, field.value) : null}
//             onChange={handleChange}
//           />
//         )}
//       </Field>
//     </div>
//   );
// };

// export default CustomDatePicker;
