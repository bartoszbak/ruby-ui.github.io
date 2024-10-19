import React from 'react';
import { Link } from 'react-router-dom';
import Button from './components/Button';
import SearchableInput from './components/SearchableInput';
import MultiSelectSearch from './components/MultiSelectSearch'; 


// import Dropdown from './components/Dropdown';
// import TextInput from './components/TextInput';
// import MultiSelect from './components/MultiSelect';
// import Toggle from './components/Toggle';


function ViewExample3() {
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
                <SearchableInput className="test-class" label="Where are you based?" />
                <MultiSelectSearch label="What topics do you like?" className="custom-multi-select-search" />
                <Button className="size-b solid" label="Continue" />
            </div>
        </div>



      </div>
    </>
  );
}

export default ViewExample3;