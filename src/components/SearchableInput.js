import React, { useState, useRef, useEffect } from 'react';
import './SearchableInput.css';

const SearchableInput = ({ label, className }) => {
  const options = [
    { id: 1, name: 'New York, United States' },
    { id: 2, name: 'Tokyo, Japan' },
    { id: 3, name: 'Paris, France' },
    { id: 4, name: 'Berlin, Germany' },
    { id: 5, name: 'Sydney, Australia' },
    { id: 6, name: 'São Paulo, Brazil' },
    { id: 7, name: 'Toronto, Canada' },
    { id: 8, name: 'Cape Town, South Africa' },
    { id: 9, name: 'Mumbai, India' },
    { id: 10, name: 'Beijing, China' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [isListOpen, setIsListOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState('below'); // Set initial dropdown position as 'below'
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Filter options based on search term
  const filteredOptions = options.filter(
    (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle input focus to open the dropdown
  const handleInputFocus = () => {
    calculateDropdownPosition();
    setIsListOpen(true);
  };

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSearchTerm(option.name);
    setIsListOpen(false); // Close dropdown
  };

  // Close dropdown when focus leaves the component (input or dropdown)
  const handleBlur = (e) => {
    const relatedTarget = e.relatedTarget;
    if (!inputRef.current.contains(relatedTarget)) {
      setTimeout(() => {
        setIsListOpen(false);
        setHighlightedIndex(-1);
      }, 150); // Slight delay to allow option selection
    }
  };

  // Handle outside click to close dropdown
  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setIsListOpen(false);
    }
  };

  // Handle keyboard navigation and closing dropdown with Esc
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
        setIsListOpen(false);  // Close dropdown on Escape
        setHighlightedIndex(-1);  // Reset highlight index
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

  // Add event listener to detect outside clicks
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Calculate whether dropdown should be above or below
  const calculateDropdownPosition = () => {
    const inputRect = inputRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const dropdownHeight = 280; // Max height for the dropdown list

    const spaceBelow = viewportHeight - inputRect.bottom;
    const spaceAbove = inputRect.top;

    if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
      setDropdownPosition('above'); // Not enough space below, open above
    } else {
      setDropdownPosition('below'); // Enough space, open below
    }
  };

  return (
    <div
      className={`searchable-list-container ${className}`}
      ref={inputRef}
      onBlur={handleBlur}
    >
      {label && (
        <label htmlFor="search-input" className="search-label">
          {label}
        </label>
      )}
      <input
        id="search-input"
        type="text"
        autoComplete="off"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          calculateDropdownPosition(); // Recalculate dropdown position on every change
          setIsListOpen(true); // Open dropdown while typing
        }}
        onFocus={handleInputFocus}
        onKeyDown={handleKeyDown}
        className="search-input"
      />

      {isListOpen && filteredOptions.length > 0 && (
        <ul
          className={`results-list ${dropdownPosition}`} // Apply above or below class
          ref={listRef}
        >
          {filteredOptions.map((option, index) => (
            <li
              key={option.id}
              className={`list-item ${index === highlightedIndex ? 'highlighted' : ''}`}
              onMouseEnter={() => setHighlightedIndex(index)}
              onMouseLeave={() => setHighlightedIndex(-1)}
              onMouseDown={() => handleOptionSelect(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}

      {isListOpen && filteredOptions.length === 0 && (
        <ul className={`results-list ${dropdownPosition}`} ref={listRef}>
          <li className="list-item no-results">No results found</li>
        </ul>
      )}
    </div>
  );
};

export default SearchableInput;