import React from 'react';
import { Link } from 'react-router-dom';
import Button from './components/Button'; 
import Dropdown from './components/Dropdown';
import TextInput from './components/TextInput';
import MultiSelect from './components/MultiSelect';


function ViewExample() {
  return (
    <>
      <div className=''>
        <div className='navigator'>
            <Link to="/">Go to componet list</Link>
        </div>

        <div className='two-col-grid'>
            <div className='col'>
                {/* <p>Patient navigator account</p>
                <h2>Let’s start with a few basic things.</h2> */}
            </div>
            <div className='col'>

                {/* add autocomplete support */}

                <TextInput className="test-class" autocomplete="given-name" label="First name" id="firstName" type="text" placeholder="Tobias" />
                <TextInput className="test-class" autocomplete="family-name" label="Last name" id="firstName" type="text" placeholder="Kepler" />
                <MultiSelect className="test-class" label="What’s your biological sex?" options={['Male', 'Female', 'I dont\'t want to share']} limit={1} />
                {/* <MultiSelect className="test-class" label="Four things you can't live without" options={['Car', 'Coke Zero', 'Donut', 'Music', 'Phone']} limit={4} /> */}
                <TextInput className="test-class" autocomplete="bday-year" label="Year you were born?" pattern="\d*" name="year" min="1920" max="9999" placeholder="ex. 1972" type='number' />
                <TextInput className="test-class" autocomplete="address-level2" label="Where are you based?"  id="firstName" type="text" placeholder="Type to search" />

                <Dropdown dropdownLabel="What do you seek" label="Choose one option">
                    <option value="1">Wellness</option>
                    <option value="2">Emotional support</option>
                    <option value="3">A hug</option>
                </Dropdown>

                <Button className="size-b solid" label="Continue" link="/view-example-2" />
            </div>
        </div>



      </div>
    </>
  );
}

export default ViewExample;