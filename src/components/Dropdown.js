import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.css';

const Dropdown = ({ dropdownLabel, label, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFullyOpen, setIsFullyOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [position, setPosition] = useState('below'); // Track dropdown position
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setIsFullyOpen(true);
      }, 100); // Duration of the opening animation

      // Determine if there's enough space below or above
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - dropdownRect.bottom;
      const spaceAbove = dropdownRect.top;

      if (spaceBelow < 200 && spaceAbove > spaceBelow) {
        setPosition('above');
      } else {
        setPosition('below');
      }
    } else {
      setIsAnimating(true);
      setIsFullyOpen(false);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 100); // Duration of the closing animation
    }
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsAnimating(true);
    setIsFullyOpen(false);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 100); // Duration of the closing animation
    alert(`Selected: ${option.props.value}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsAnimating(true);
      setIsFullyOpen(false);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 100); // Duration of the closing animation
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsAnimating(true);
      setIsFullyOpen(false);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 300); // Duration of the closing animation
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={`${className} dropdown ${isFullyOpen ? 'open' : ''}`}>
      {dropdownLabel && <label className="dropdown-label">{dropdownLabel}</label>}
      <div className="dropdown-btn">

          <span className='dropdown-icon'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 8L9.37531 11.5002C9.74052 11.7924 10.2595 11.7924 10.6247 11.5002L15 8" stroke="#ccc" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>

        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedOption ? selectedOption.props.children : label}
          
        </button>
        {(isOpen || isAnimating) && (
          <div className={`dropdown-menu ${isFullyOpen ? 'open' : 'closing'} ${position}`}>
            {React.Children.map(children, (child) => (
              <a
                className="dropdown-item"
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(child);
                }}
                href="a"
              >
                {child.props.children}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;