import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.css';

const Dropdown = ({ dropdownLabel, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFullyOpen, setIsFullyOpen] = useState(false); // Track if the dropdown is fully open
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setIsFullyOpen(true);
      }, 100); // Duration of the opening animation
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
    // alert(`Selected: ${option.props.value}`);
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
    <div ref={dropdownRef} className={`dropdown ${isFullyOpen ? 'open' : ''}`}>
      {dropdownLabel && <label className="dropdown-label">{dropdownLabel}</label>}
      <div className="dropdown-btn">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedOption ? selectedOption.props.children : label}
          <span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 8L9.37531 11.5002C9.74052 11.7924 10.2595 11.7924 10.6247 11.5002L15 8" stroke="#ccc" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
        {(isOpen || isAnimating) && (
          <div className={`dropdown-menu ${isFullyOpen ? 'open' : 'closing'}`}>
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