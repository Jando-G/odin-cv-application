import React, { Component } from 'react';
import DataField from './DataField.js';

class CompanyFields extends Component {
  constructor(props) {
    super(props);

    this.state = {
      children: 1
    }

    this.addSection = this.addSection.bind(this);
  }
  addSection = () => {
    this.setState({ children: this.state.children + 1});
  }
  render() {
    const children = [];
    for (let i = 0; i < this.state.children; i++) {
      children.push(<div className="companySection" key={i}>
      <DataField RenderInfo={this.props.RenderInfo} title="Company Name" name="company" type="text" />
      <DataField RenderInfo={this.props.RenderInfo} title="Position" name="position" type="text" />
      <DataField RenderInfo={this.props.RenderInfo} title="Main Tasks" name="tasks" type="text" />
      <DataField RenderInfo={this.props.RenderInfo} title="Starting Date" name="companyStart" type="date" />
      <DataField RenderInfo={this.props.RenderInfo} title="Ending Date" name="companyEnd" type="date" />
    </div>);
    }
    return (
        <div className="Section">
          <h1>Work Experience</h1>
            {children}
          <div className="AddBtn" onClick={() => this.addSection()}>Add Work Experience</div>
        </div>
    );
  }
}

export default CompanyFields;
