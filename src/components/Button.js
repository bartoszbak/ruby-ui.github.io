import React from 'react';
import './Button.css'; 

const Button = ({ label, className="" }) => {
  const handleClick = () => {
    // alert(`Button Clicked: ${label}`);
  };

  return (
    <button className={`btn ${className}`} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;