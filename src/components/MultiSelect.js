import React, { useState } from 'react';
import './MultiSelect.css'; 

const MultiSelect = ({ options, label, className, limit }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option, e) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (limit === 1) {
      setSelectedOptions([option]); 
    } else if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else if (limit === undefined || selectedOptions.length < limit) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className={`${className} multiSelect ${limit === 1 ? 'singleSelect' : ''}`}>
      <label>{label}</label>
      <div className='options'>
        {options.map((option) => (
          <a 
            href="#"
            key={option}
            className={`pill ${selectedOptions.includes(option) ? 'selected' : ''}`}
            onClick={(e) => toggleOption(option, e)}
          >
            {option}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;