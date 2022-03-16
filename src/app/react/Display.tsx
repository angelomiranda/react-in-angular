import * as React from "react";

function Input(props) {
  const [inputType] = React.useState(props.type);
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  };

  return (
    <>
      <input
        type={inputType}
        name="form-input"
        value={inputValue}
        onChange={handleChange}
      />
    </>
  );
}

export default Input;
