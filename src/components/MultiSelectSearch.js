import React, { useState, useRef, useEffect } from 'react';
import Icon from './Icons';
import './MultiSelectSearch.css';

const MultiSelectSearch = ({ label, className }) => {
  const topics = [
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Mobile App Development' },
    { id: 3, name: 'Data Science' },
    { id: 4, name: 'Machine Learning' },
    { id: 5, name: 'Cybersecurity' },
    { id: 6, name: 'Cloud Computing' },
    { id: 7, name: 'DevOps' },
    { id: 8, name: 'UI/UX Design' },
    { id: 9, name: 'Digital Marketing' },
    { id: 10, name: 'Blockchain' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [isListOpen, setIsListOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownPosition, setDropdownPosition] = useState('below');
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const componentRef = useRef(null);

  // Filter the options based on the search term
  const filteredOptions = topics.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedOptions.some((selected) => selected.id === item.id)
  );

  // Calculate whether the dropdown should appear above or below the input
  const calculateDropdownPosition = () => {
    const inputRect = inputRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const dropdownHeight = 280; // Example dropdown height

    const spaceBelow = viewportHeight - inputRect.bottom;
    const spaceAbove = inputRect.top;

    if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
      setDropdownPosition('above');
    } else {
      setDropdownPosition('below');
    }
  };

  // Open the dropdown and calculate its position
  const handleInputFocus = () => {
    calculateDropdownPosition();
    setIsListOpen(true);
    inputRef.current.focus(); // Set focus on input
  };

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOptions([...selectedOptions, option]);
    setSearchTerm('');
    setIsListOpen(false);
  };

  // Handle removing a selected option
  const handleRemoveOption = (option) => {
    setSelectedOptions(selectedOptions.filter((selected) => selected.id !== option.id));
  };

  // Handle key press on remove button
  const handleRemoveKeyPress = (e, option) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent scrolling for spacebar press
      handleRemoveOption(option);
    }
  };

  // Close dropdown when focus leaves the component
  const handleBlur = (e) => {
    const relatedTarget = e.relatedTarget;
    if (!componentRef.current.contains(relatedTarget)) {
      setTimeout(() => {
        setIsListOpen(false);
        setHighlightedIndex(-1);
      }, 150); // Small delay to allow interactions
    }
  };

  // Ensure dropdown reopens when focus returns to the input
  const handleFocus = (e) => {
    const relatedTarget = e.relatedTarget;
    if (e.target === inputRef.current && !componentRef.current.contains(relatedTarget)) {
      setIsListOpen(true);
    }
  };

  // Handle keyboard navigation and closing dropdown with Escape
  const handleKeyDown = (e) => {
    if (isListOpen) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedIndex((prevIndex) =>
          Math.min(prevIndex + 1, filteredOptions.length - 1)
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (e.key === 'Enter' && highlightedIndex >= 0) {
        handleOptionSelect(filteredOptions[highlightedIndex]);
      } else if (e.key === 'Escape') {
        setIsListOpen(false);
        setHighlightedIndex(-1);
      } else if (e.key === 'Tab') {
        setIsListOpen(false);
        setHighlightedIndex(-1);
      }
    }
  };

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const listItem = listRef.current.children[highlightedIndex];
      if (listItem) {
        listItem.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth',
        });
      }
    }
  }, [highlightedIndex]);

  // Add event listener for clicks outside the component
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!componentRef.current.contains(e.target)) {
        setIsListOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`multi-select-container ${className}`}
      ref={componentRef}
      tabIndex={-1}
      onBlur={handleBlur}
      onFocus={handleFocus}
    >
      {label && (
        <label
          htmlFor="ms-search-input"
          className="multiselect-search-label"
          onClick={handleInputFocus} // Trigger input focus and dropdown toggle on label click
        >
          {label}
        </label>
      )}

      <input
        id="multiselect-search-input"
        type="text"
        autoComplete="off"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          if (!isListOpen) handleInputFocus();
        }}
        onFocus={handleInputFocus}
        onKeyDown={handleKeyDown}
        className="multiselect-search-input"
        ref={inputRef}
      />

      {isListOpen && (
        <ul className={`multiselect-results-list ${dropdownPosition}`} ref={listRef}>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={option.id}
                className={`ms-list-item ${index === highlightedIndex ? 'highlighted' : ''}`}
                onMouseEnter={() => setHighlightedIndex(index)}
                onMouseLeave={() => setHighlightedIndex(-1)}
                onMouseDown={() => handleOptionSelect(option)}
              >
                {option.name}
              </li>
            ))
          ) : (
            <li className="ms-list-item no-results">No results found</li>
          )}
        </ul>
      )}

      <div className="selected-options">
        {selectedOptions.map((option) => (
          <div key={option.id} className="selected-tag">
            <span
              className="remove-tag"
              tabIndex={0}
              onClick={() => handleRemoveOption(option)}
              onKeyDown={(e) => handleRemoveKeyPress(e, option)}
              role="button"
              aria-label={`Remove ${option.name}`}
            >
              <Icon name="cross"/>
            </span>
              {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectSearch;