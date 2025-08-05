const TextField = ({ type, name, id, label, value, readOnly }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className="textField"
        type={type}
        name={name}
        id={id}
        label={label}
        value={value}
        readOnly={readOnly}
      />
    </>
  );
};

export default TextField;
