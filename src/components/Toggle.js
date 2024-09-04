import React from 'react';
import './Toggle.css';

const Toggle = ({ initialState = 'off', disabled = false, label = '', className = '' }) => {
  const [toggleState, setToggleState] = React.useState(initialState);

  const handleToggle = () => {
    if (!disabled) {
      setToggleState(toggleState === 'on' ? 'off' : 'on');
    }
  };

  // Handle key press for space bar to toggle the switch
  const handleKeyDown = (e) => {
    if (e.code === 'Space' || e.key === ' ' || e.code === 'Enter' || e.key === 'Enter') {
      e.preventDefault(); 
      handleToggle();
    }
  };

  return (
    <div className={`toggle ${className}`}>
      <div className={`toggle-container ${disabled ? 'disabled' : ''}`}>
        <div
          className={`toggle-box ${toggleState}`}
          onClick={handleToggle}
          onKeyDown={handleKeyDown} // Listen for key presses
          role="switch"
          aria-checked={toggleState === 'on'}
          tabIndex="0"
          aria-disabled={disabled}
        >
          <div className="toggle-thumb"></div>
        </div>
        {label && <label className="toggle-label">{label}</label>}
      </div>
    </div>
  );
};

export default Toggle;