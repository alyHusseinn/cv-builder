function Input(props) {
  const { id, type, name, value, maxLength, onChange } = props;
  return (
    <div className="input-field">
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        maxLength={maxLength}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
