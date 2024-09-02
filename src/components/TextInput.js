import React, { useState } from 'react';
import './TextInput.css'; // Assuming you save the CSS in this file

const TextInput = ({ label, id, className, placeholder, name, type = 'text', autocomplete }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`${className} textInput`}>
      <input 
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        autocomplete={autocomplete}
        name={name}
        required
      />
      <label htmlFor={id} className={value ? 'filled' : ''}>
        {label}
      </label>
    </div>
  );
};

export default TextInput;