import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComponentList from './ComponentList';
import ViewExample from './ViewExample';

function App() {
  

  return (

    <Router>
      <Routes>
        <Route path="/" element={<ComponentList />} />
        <Route path="/view-example" element={<ViewExample />} />
      </Routes>
    </Router>

    
  );
}

export default App;
