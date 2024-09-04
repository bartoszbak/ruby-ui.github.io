import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({ className, label, icon, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link); // Redirect to the specified link
    } else {
      alert(`Button Clicked: ${label}`);
    }
  };

  return (
    <button className={`btn ${className}`} onClick={handleClick}>
      {label && <span className="label">{label}</span>}
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

export default Button;