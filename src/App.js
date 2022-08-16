import './styles.css';
import MainInfoFields from './MainInfoFields';
import CompanyFields from './CompanyFields.js';
import SchoolFields from './SchoolFields.js';

import React, { Component } from 'react';

function App() {
  function renderInfo(e) {
    return 69;
  }
  return (
    <div className="App">
        <form>
          <MainInfoFields RenderInfo={renderInfo}/>
          <CompanyFields />
          <SchoolFields />
        </form>
        <div className="Page">
          
        </div>
    </div>
  );
}

export default App;
