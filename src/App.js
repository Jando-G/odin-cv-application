import './styles.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
