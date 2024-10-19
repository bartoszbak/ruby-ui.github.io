import React, { useState } from 'react';
import './TextInput.css';

const TextInput = ({
  label,
  id,
  className,
  
  name,
  type = 'text',
  autocomplete,
  variant = 'input', // 'input' or 'textarea'
}) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (value === '') {
      setIsFocused(false);
    }
  };

  return (
    <div
      className={`${className} textInput ${variant === 'input' ? 'input' : 'textarea'}`}
    >
      <label
        htmlFor={id}
        className={`label ${isFocused || value ? 'focused' : ''}`}
      >
        {label}
      </label>

      {variant === 'input' ? (
        <input
          type={type}
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete={autocomplete}
          name={name}
          
          required
          className="input"
        />
      ) : (
        <textarea
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
          
          required
          className="textarea"
          rows="4" // You can adjust the number of rows
        />
      )}
    </div>
  );
};

export default TextInput;