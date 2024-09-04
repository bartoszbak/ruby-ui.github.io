import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComponentList from './ComponentList';
import ViewExample from './ViewExample';
import ViewExample2 from './ViewExample2';

function App() {
  

  return (

    <Router>
      <Routes>
        <Route path="/" element={<ComponentList />} />
        <Route path="/view-example" element={<ViewExample />} />
        <Route path="/view-example-2" element={<ViewExample2 />} />
      </Routes>
    </Router>

    
  );
}

export default App;
