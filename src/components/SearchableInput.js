import React, { useState, useRef, useEffect } from 'react';
import './SearchableInput.css'; // Assuming you create a CSS file for styling

const SearchableInput = ({ label, className }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isListOpen, setIsListOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // For controlling animation
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [dropdownPosition, setDropdownPosition] = useState('below'); // Position dropdown "above" or "below"
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Example array of cities with countries
  const dataArray = [
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

  // Filter the array based on the search term
  const filteredData = dataArray.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculatee dropdown position based on available space
  const calculateDropdownPosition = () => {
    const inputRect = inputRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - inputRect.bottom;
    const spaceAbove = inputRect.top;

    if (spaceBelow < 200 && spaceAbove > spaceBelow) {
      setDropdownPosition('above');
    } else {
      setDropdownPosition('below');
    }
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsListOpen(false);
        setIsAnimating(false);
      }, 100);
      setHighlightedIndex(-1);
    }
  };

  // Handle input focus (open dropdown)
  const handleInputFocus = () => {
    if (!isListOpen) {
      calculateDropdownPosition(); // Calculate position when opening
      setIsAnimating(true); // Trigger intro animation
      setIsListOpen(true);
    }
  };

  // Handle blur event (close the dropdown on focus loss)
  const handleBlur = (e) => {
    setTimeout(() => {
      if (!inputRef.current.contains(document.activeElement)) {
        setIsAnimating(true); // Trigger outro animation
        setTimeout(() => {
          setIsListOpen(false);
          setIsAnimating(false); // Reset animation state
        }, 100); // Time matches the CSS animation duration
        setHighlightedIndex(-1); // Reset highlight on blur
      }
    }, 100);
  };

  // Handle closing with the Escape key
  const handleKeyDown = (e) => {
    if (isListOpen) {
      if (e.key === 'Escape') {
        setIsAnimating(true); // Trigger outro animation
        setTimeout(() => {
          setIsListOpen(false);
          setIsAnimating(false); // Reset animation state
        }, 100);
        setHighlightedIndex(-1); // Reset highlight
      } else if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault(); // Prevent default Tab behavior to enable list navigation
        setHighlightedIndex((prevIndex) =>
          Math.min(prevIndex + 1, filteredData.length - 1)
        );
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault(); // Prevent default Shift + Tab behavior to enable list navigation
        setHighlightedIndex((prevIndex) =>
          Math.max(prevIndex - 1, 0)
        );
      } else if (e.key === 'Enter') {
        if (highlightedIndex >= 0 && highlightedIndex < filteredData.length) {
          setSearchTerm(filteredData[highlightedIndex].name);
          setIsAnimating(true); // Trigger outro animation
          setTimeout(() => {
            setIsListOpen(false);
            setIsAnimating(false); // Reset animation state
          }, 100);
          setHighlightedIndex(-1);
        }
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

  return (
    <div
      className={`searchable-list-container ${className} ${
        isListOpen ? 'open' : ''
      } ${dropdownPosition}`} // Apply the "above" or "below" class based on position
      ref={inputRef}
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
        placeholder="Type a city..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          if (!isListOpen) handleInputFocus(); // Open dropdown while typing
        }}
        onFocus={handleInputFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className="search-input"
      />
      {/* Dropdown is always rendered but visibility is controlled */}
      <ul
        className={`results-list ${isAnimating ? 'animating' : ''} ${
          isListOpen ? 'open' : ''
        }`}
        ref={listRef}
      >
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <li
              key={item.id}
              className={`list-item ${
                index === highlightedIndex ? 'highlighted' : ''
              }`}
              onMouseEnter={() => setHighlightedIndex(index)}
              onMouseLeave={() => setHighlightedIndex(-1)}
              onMouseDown={() => {
                setSearchTerm(item.name);
                setIsAnimating(true); // Trigger outro animation
                setTimeout(() => {
                  setIsListOpen(false);
                  setIsAnimating(false); // Reset animation state
                }, 100);
                setHighlightedIndex(-1);
              }}
            >
              {item.name}
            </li>
          ))
        ) : (
          <li className="list-item no-results">No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchableInput;