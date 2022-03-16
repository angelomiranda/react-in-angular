import * as React from "react";

function Input({ type, placeholder }) {
  const [inputType] = React.useState(type);
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type={inputType}
      name="form-input"
      value={inputValue}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default Input;
