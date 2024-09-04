import React from 'react';
import { Link } from 'react-router-dom';

import Grid from './components/Grid';
import Button from './components/Button'; 
import Dropdown from './components/Dropdown';
import MultiSelect from './components/MultiSelect';
import TextInput from './components/TextInput';
import Toggle from './components/Toggle';
import SearchableInput from './components/SearchableInput';

function ComponentList() {
  return (
    <div>
        


      <div className="component-showcase">
        <div className='navigator'>
            <Link to="/view-example">Go to view example</Link>
        </div>
        <Grid>
            <Button className="size-s solid" label="New appointment" />
            <Button className="size-n solid" label="Select file" />
            <Button className="size-b solid" label="Continue" />
            <Button className="size-s soft" label="New appointment" />
            <Button className="size-n soft" label="Select file" />
            <Button className="size-b soft" label="Continue" />

            <Button className="size-s icon-label" label="More info"  icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>}/>

            <Button className="size-n icon-label" label="More info"  icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>}/>

            <Button className="size-b icon-label" label="More info"  icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>}/>

            <Button className="size-s icon" label=""  icon={<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}/>

            <Button className="size-n icon" label=""  icon={<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}/>

            <Button className="size-b icon" label=""  icon={<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}/>

            <TextInput className="test-class" label="First name" id="firstName" type="text" placeholder="Tobias" />

            <MultiSelect className="test-class" label="What’s your biological sex?" options={['Male', 'Female', 'I dont\'t want to share']} limit={1} />

            <MultiSelect className="test-class" label="Four things you can't live without" options={['Car', 'Coke Zero', 'Donut', 'Music', 'Phone']} limit={4} />

            <SearchableInput className="test-class" label="In which indsutry do you work?" />

            <Toggle initialState="off" label="This is a very important checkmark" className="test-class" disabled={false} />



            

            <Dropdown className="dropdałn" dropdownLabel="What do you seek" label="Choose one option">
              <option value="1">Wellness</option>
              <option value="2">Emotional support</option>
              <option value="3">A hug</option>
            </Dropdown>
        </Grid>
    </div>


    </div>
  );
}

export default ComponentList;