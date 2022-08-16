import React, { Component } from 'react';
import DataField from './DataField.js';

class CompanyFields extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="Section">
          <h1>Work Experience</h1>
          <div className="companyFields">
            <DataField RenderInfo={this.props.RenderInfo} title="Company Name" name="company" type="text" />
            <DataField RenderInfo={this.props.RenderInfo} title="Position" name="position" type="text" />
            <DataField RenderInfo={this.props.RenderInfo} title="Main Tasks" name="tasks" type="text" />
            <DataField RenderInfo={this.props.RenderInfo} title="Starting Date" name="companyStart" type="date" />
            <DataField RenderInfo={this.props.RenderInfo} title="Ending Date" name="companyEnd" type="date" />
          </div>
          <div className="AddBtn">Add Work Experience</div>
        </div>
    );
  }
}

export default CompanyFields;
