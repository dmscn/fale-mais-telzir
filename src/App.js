
// @flow
import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Header />
          <Calculator />
          <Footer />
        </React.Fragment>
    );
  }
}

export default App;
