import React from 'react';
import './Grid.css'; // Optional: for styling

const Grid = ({ children }) => {
  return <div className="grid-container">
    {React.Children.map(children, (child) => (
        <div class="grid-item">
            {child}
        </div>
    ))}
    </div>;
};

export default Grid;