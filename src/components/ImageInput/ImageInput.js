const ImageInput = ({ form, field }) => (
  <input
    name={field.name}
    type="file"
    accept="image/*"
    onChange={e => form.setFieldValue(field.name, e.target.files[0])}
  />
);

export default ImageInput;
