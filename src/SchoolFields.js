import React, { Component } from 'react';
import DataField from './DataField.js';

class SchoolFields extends Component {
  constructor(props) {
    super(props);

    this.state = {
     children: 1
    };

    this.addSection = this.addSection.bind(this);
  }
  addSection = () => {
    this.setState({ children: this.state.children + 1});
  }
  render() {
    const children = [];
    for (let i = 0; i < this.state.children; i++) {
      children.push( <div className="SchoolSection" key={i}>
      <DataField title="School Name" name="school" type="text" />
      <DataField title="Major" name="major" type="text" />
      <DataField title="Starting Date" name="schoolStart" type="date" />
      <DataField title="Ending Date" name="schoolEnd" type="date" />
    </div>);
    }
    return (
      <div className="Section">
        <h1>Education</h1>
          {children}
        <div className="AddBtn" onClick={() => this.addSection()}>Add Education</div>
      </div>
    );
  }
}

export default SchoolFields;
