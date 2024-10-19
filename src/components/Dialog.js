
import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import Button from './Button'; 
import './Dialog.css';

const Dialog = forwardRef(({ children, customClass = '' }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    openDialog,
    closeDialog,
  }));

  const openDialog = () => {
    setIsVisible(true);
    setTimeout(() => setIsOpen(true), 10); // Small delay to trigger CSS transition
  };

  const closeDialog = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 300); // Delay matches CSS transition duration
  };

  return (
    isVisible && (
      <div className={`dialog-overlay ${isOpen ? 'open' : 'close'}`} onClick={closeDialog}>
        <div className={`dialog ${customClass} ${isOpen ? 'open' : 'close'}`} onClick={(e) => e.stopPropagation()}>

          {children}

          <div className='dialog-button-group'>
            <Button
              label="Save dialog"
              variant={{ type: 'solid', size: 'large', shape: 'square' }}
              className="full-width"
              onClick={closeDialog}
            />
            <Button
              label="Close dialog"
              variant={{ type: 'soft', size: 'large', shape: 'square' }}
              className="full-width"
              onClick={closeDialog}
            />  
          </div>
        </div>
      </div>
    )
  );
});

export default Dialog;