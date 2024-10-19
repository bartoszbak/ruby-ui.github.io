import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from './Icons'; // Import the Icon component
import './Button.css';

// Define all variants in the same file
const buttonVariants = {
  type: {
    solid: 'btn-solid',
    soft: 'btn-soft',
    ghost: 'btn-ghost',
  },
  option: {
    label: 'btn-label',
    iconLabel: 'btn-icon-label',
    icon: 'btn-icon',
  },
  size: {
    large: 'btn-size-l btn-square-radius',
    normal: 'btn-size-n btn-square-radius-s',
    small: 'btn-size-s btn-square-radius-s',
  },
  shape: {
    rounded: 'btn-round',
    square: 'btn-square',
  },
};

const Button = ({
  variant = {},
  className = '',
  label,
  iconName,
  link,
  onClick, // Add new prop for onClick event handler
}) => {
  const navigate = useNavigate();

  const handleInternalClick = () => {
    if (onClick) { // If onClick is defined, call it instead of the default behavior
      onClick();
    } else if (link) {
      navigate(link); // Redirect to the specified link
    } else {
      alert(`Button Clicked: ${label}`);
    }
  };

  // Destructure variant types from the variant prop, with defaults
  const { type = 'solid', option = 'label', size = 'normal', shape = 'rounded' } = variant;

  // Map the variant types to the appropriate CSS classes
  const variantClasses = [
    buttonVariants.type[type],
    buttonVariants.size[size],
    buttonVariants.option[option],
    buttonVariants.shape[shape],
  ].join(' ');

  return (
    <button className={`btn ${variantClasses} ${className}`} onClick={handleInternalClick}>
      {iconName && <span className="btn-icon"><Icon name={iconName} /></span>}
      {label && <span className="btn-label">{label}</span>}
    </button>
  );
};

export default Button;