import './App.css';
import React from 'react';
import Grid from './components/Grid';
import Button from './components/Button'; 
import Dropdown from './components/Dropdown';


function App() {

  return (
    <div className="component-showcase">
      <Grid>
        <Button className="size-s solid" label="New appointment" />
        <Button className="size-n solid" label="Select file" />
        <Button className="size-b solid" label="Continue" />
        <Button className="size-s soft" label="New appointment" />
        <Button className="size-n soft" label="Select file" />
        <Button className="size-b soft" label="Continue" />
        <Dropdown dropdownLabel="What do you seek" label="Choose one option">
          <option value="1">Wellness</option>
          <option value="2">Emotional support</option>
          <option value="3">A hug</option>
      </Dropdown>
      </Grid>
    </div>
  );
}

export default App;
