import React from 'react';
import { Link } from 'react-router-dom';
import Button from './components/Button'; 
import Dropdown from './components/Dropdown';
import TextInput from './components/TextInput';
import MultiSelect from './components/MultiSelect';
import SearchableInput from './components/SearchableInput';
import Toggle from './components/Toggle';


function ViewExample2() {
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
                  <div className="container">
                {/* add autocomplete support */}

                {/* <TextInput className="test-class" autocomplete="given-name" label="First name" id="firstName" type="text" placeholder="Tobias" />
                <TextInput className="test-class" autocomplete="family-name" label="Last name" id="firstName" type="text" placeholder="Kepler" />
                <MultiSelect className="test-class" label="What’s your biological sex?" options={['Male', 'Female', 'I dont\'t want to share']} limit={1} /> */}

                <SearchableInput className="test-class" label="Where are you based?" />

                <MultiSelect className="test-class" label="Four things you can't live without" options={['Car', 'Coke Zero', 'Donut', 'Music', 'Phone', 'Car', 'Coke Zero', 'Donut', 'Music', 'Phone']} limit={4} />
                {/* <TextInput className="test-class" autocomplete="bday-year" label="Year you were born?" pattern="\d*" name="year" min="1920" max="9999" placeholder="ex. 1972" type='number' /> */}
                
                <TextInput className="test-class" autocomplete="address-level2" label="Name you character"  id="firstName" type="text" placeholder="Can be any name" />

                <Dropdown
                    dropdownLabel="What do you seek?"
                    label="Please select"
                    className="test-class"
                >
                    <option value="1">Wellness</option>
                    <option value="2">Emotional support</option>
                    <option value="3">A hug</option>
                </Dropdown>

                <SearchableInput className="test-class" label="In which indsutry do you work?" />

                <Toggle initialState="off" label="This is a very important checkmark" className="test-class" disabled={false} />

                {/* <Button className="size-b solid" label="Continue"  /> */}

                <Button
            label="Continue"
            variant={{ type: 'solid', size: 'large', shape: 'square' }}
            className="my-custom-button"
            // onClick={handleClick}
            link="/view-example-3"
          />


                </div>
            </div>
        </div>



      </div>
    </>
  );
}

export default ViewExample2;