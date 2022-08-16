import React, { Component } from 'react';
import DataField from './DataField.js';

class SchoolFields extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }

  render() {
    return (
      <div className="Section">
        <h1>Education</h1>
        <div className="SchoolFields">
          <DataField title="School Name" name="school" type="text" />
          <DataField title="Major" name="major" type="text" />
          <DataField title="Starting Date" name="schoolStart" type="date" />
          <DataField title="Ending Date" name="schoolEnd" type="date" />
        </div>
        <div className="AddBtn">Add Education</div>
      </div>
    );
  }
}

export default SchoolFields;
