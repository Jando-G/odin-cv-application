import React, { Component } from 'react';

class DataField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  render() {
    const { content } = this.state;
    return (
      <div id="input">
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <input
          onChange={this.handleChange}
          name={this.props.name}
          type={this.props.type}
        />
        <div>{content}</div>
      </div>
    );
  }
}

export default DataField;
