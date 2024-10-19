import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import Grid from './components/Grid';
import Button from './components/Button'; 
import Dropdown from './components/Dropdown';
import MultiSelect from './components/MultiSelect';
import TextInput from './components/TextInput';
import Toggle from './components/Toggle';
import SearchableInput from './components/SearchableInput';
import MultiSelectSearch from './components/MultiSelectSearch';
import Dialog from './components/Dialog';


function ComponentList() {

  const handleClick = () => {
    console.log('Custom button click');
  };

  const dialogRef = useRef(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.openDialog();
    }
  };


  return (
    <div className="component-list">

      <div className="component-index">
        <ul className="index-list">
          <li><a href=''>Typography</a></li>
          <li><a href=''>Button</a></li>
          <li><a href=''>Selects</a></li>
          <li><a href=''>Input</a></li>
          <li><Link to="/view-example">Go to view example</Link></li>
        </ul>
        
      </div>

      <div className="component-showcase">



        <div className='grid-title'>
            <p>Buttons</p>
        </div>

        <Grid>

        {/* Buttons size: large */}

         <Button
            label="Solid large"
            variant={{ type: 'solid', size: 'large', shape: 'square' }}
            className="my-custom-button"
            onClick={handleClick}
          />

          <Button
            label="Soft large"
            variant={{ type: 'soft', size: 'large', shape: 'square' }}
            className="my-custom-button"
          />

          <Button 
            variant={{ type: 'ghost', size: 'large', shape: 'square', option: 'iconLabel' }}
            iconName="people"
            label="Ghost large"
            className="my-custom-button"
          />

          <Button 
              variant={{ type: 'ghost', size: 'large', shape: 'square', option: 'icon' }}
              iconName="people"
              className="my-custom-button"    
          />

          {/* Buttons size: normal */}

          <Button
            label="Solid normal"
            variant={{ type: 'solid', size: 'normal', shape: 'square' }}
            className="my-custom-button"
            onClick={handleClick}
          />

          <Button
            label="Soft normal"
            variant={{ type: 'soft', size: 'normal', shape: 'square' }}
            className="my-custom-button"
          />

          <Button 
            variant={{ type: 'ghost', size: 'normal', shape: 'square', option: 'iconLabel' }}
            iconName="people"
            label="Ghost normal"
            className="my-custom-button"
          />

          <Button 
              variant={{ type: 'ghost', size: 'normal', shape: 'square', option: 'icon' }}
              option="icon"
              iconName="people"
              className="my-custom-button"
          />

          {/* Buttons size: small */}

          <Button
            label="Solid small"
            variant={{ type: 'solid', size: 'small', shape: 'square' }}
            className="my-custom-button"
            onClick={handleClick}
          />

          <Button
            label="Soft small"
            variant={{ type: 'soft', size: 'small', shape: 'square' }}
            className="my-custom-button"
          />

          <Button 
            variant={{ type: 'ghost', size: 'small', shape: 'square', option: 'iconLabel' }}
            iconName="people"
            label="Ghost normal"
            className="my-custom-button"
          />

          <Button 
              variant={{ type: 'ghost', size: 'small', shape: 'square', option: 'icon' }}
              option="icon"
              iconName="people"
              className="my-custom-button"
          />
      </Grid>
      
      <div className='grid-title'>
            <p>Selects</p>
      </div>

      <Grid cols={2}>

        <MultiSelect className="fixed-width" label="What’s your biological sex?" options={['Male', 'Female', 'I dont\'t want to share']} limit={1} />

      
        <MultiSelect className="fixed-width" label="Four things you can't live without" options={['Car', 'Coke Zero', 'Donut', 'Music', 'Phone']} limit={4} />

        <SearchableInput className="fixed-width" label="In which indsutry do you work?" />

        <Toggle initialState="off" label="Important checkmark" className="test-class" disabled={false} />

        <MultiSelectSearch label="What topics do you like?" className="fixed-width" />

        <Dropdown className="fixed-width" dropdownLabel="What do you seek" label="Choose one option">
          <option value="1">Wellness</option>
          <option value="2">Emotional support</option>
          <option value="3">A hug</option>
        </Dropdown>

      </Grid>

      <div className='grid-title'>
            <p>Text input</p>
      </div>

      <Grid cols={2}>

      

      <TextInput
        label="Your Name"
        id="name"
        className="fixed-width"
        placeholder="Enter your name"
        variant="input" // Or leave it out since 'input' is the default
      />

      <TextInput
        label="Your Message"
        id="message"
        className="fixed-width"
        placeholder="Enter your message"
        variant="textarea"
      />

      </Grid>

      <div className='grid-title'>
          <p>Dialog</p>
      </div>

      <Grid cols={1}>

        <>
        
          <Dialog
            ref={dialogRef}
            customClass="fixed-dialog-width"
          >

            <h2>Dialog Content</h2>
            <p>This is an example of the dialog content used inside the dialog.</p>
            
          </Dialog>

          <Button
            label="Open dialog"
            variant={{ type: 'soft', size: 'large', shape: 'square' }}
            className=""
            onClick={openDialog}
          />

          <Button
            label="Open dialog"
            variant={{ type: 'soft', size: 'large', shape: 'square' }}
            className=""
            onClick={openDialog}
          />
      
        </>

      </Grid>

    </div>
    </div>

  );
}

export default ComponentList;