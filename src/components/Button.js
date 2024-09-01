import React from 'react';
import './Button.css'; 

const Button = ({ className, label, icon }) => {
  const handleClick = () => {
    alert(`Button Clicked: ${label}`);
  };

  return (
    <button className={`btn ${className}`} onClick={handleClick}>
      {label && <span className="label">{label}</span>}
      {icon && <span className="icon">{icon}</span>}
      
    </button>
  );
};

export default Button;


