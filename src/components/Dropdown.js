import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ dropdownLabel, label, children, className }) => {
  const [selectedValue, setSelectedValue] = useState('');

  // Handle selection change
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    alert(`Selected: ${e.target.value}`);
  };

  return (
    <div className={`${className} dropdown`}>
      {dropdownLabel && (
        <label className="dropdown-label" htmlFor="native-dropdown">
          {dropdownLabel}
        </label>
      )}

      <select
        id="native-dropdown"
        className="native-dropdown"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="" disabled>
          {label}
        </option>
        {children}
      </select>
    </div>
  );
};

export default Dropdown;