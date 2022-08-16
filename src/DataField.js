import React, { Component } from 'react';

class DataField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="input">
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <input
          onChange={this.props.RenderInfo}
          name={this.props.name}
          type={this.props.type}
        />
      </div>
    );
  }
}

export default DataField;
