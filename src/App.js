import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import './styles/theme.sass';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);

