import './styles.css';
import DataField from './DataField.js';


import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
        <form>
           <div className="section">
                <DataField title="First Name" name="fname" type="text" />
                <DataField title="Last Name" name="lname" type="text" />
                <DataField title="Email" name="email" type="email" />
                <DataField title="Phone Number" name="phone" type="phone" />
           </div>
           <div className="section">
                <DataField title="School Name" name="school" type="text" />
                <DataField title="Major" name="major" type="text" />
                <DataField title="Starting Date" name="schoolStart" type="date" />
                <DataField title="Ending Date" name="schoolEnd" type="date" />
           </div>
           <div className="section">
                <DataField title="Company Name" name="company" type="text" />
                <DataField title="Position" name="position" type="text" />
                <DataField title="Main Tasks" name="tasks" type="text" />
                <DataField title="Starting Date" name="companyStart" type="date" />
                <DataField title="Ending Date" name="companyEnd" type="date" />
           </div>
        </form>
    </div>
  );
}

export default App;
