import React, { Component } from 'react';
import DataField from './DataField.js';

class MainInfoFields extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }

  render() {
    const { renderInfo } = this.props;
    return (
      <div className="Section">
        <DataField title="First Name" name="fname" type="text" />
        <DataField title="Last Name" name="lname" type="text" />
        <DataField title="Email" name="email" type="email" />
        <DataField title="Phone Number" name="phone" type="phone" />
      </div>
    );
  }
}

export default MainInfoFields;