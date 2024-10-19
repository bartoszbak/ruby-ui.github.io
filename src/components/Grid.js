import React from 'react';
import './Grid.css'; // Optional: for styling

const Grid = ({ cols, children }) => {
  const containerClasses = `grid-container ${getGridContainerClass(cols)}`;

  return (
    <div className={containerClasses}>
      {React.Children.map(children, (child) => (
        <div className={`grid-item ${getGridItemClass(cols)}`}>
          {child}
        </div>
      ))}
    </div>
  );
};

const getGridContainerClass = (cols) => {
  switch (cols) {
    case 1:
      return 'g-one-col';
    case 2:
      return 'g-two-cols';
    case 3:
      return 'g-three-cols';
    default:
      return 'g-four-cols';
  }
};

const getGridItemClass = (cols) => {
  return `${cols === 1 ? 'last-column' : ''}`;
};

export default Grid;