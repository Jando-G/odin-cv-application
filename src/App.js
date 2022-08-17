import './styles.css';
import MainInfoFields from './MainInfoFields';
import CompanyFields from './CompanyFields.js';
import SchoolFields from './SchoolFields.js';
import Page from './Page';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      FirstName: '',
      LastName: '',
      Email: '',
      PhoneNumber: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    
  }
  render() {
    return (
      <div className="App">
          <form>
            <MainInfoFields/>
            <CompanyFields />
            <SchoolFields />
          </form>
          <Page />
      </div>
    );
  }
}

export default App;
