import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './styles/theme.sass';
import Nav from './components/Nav';
import Header from './components/Header';
import Modal from './components/Modal';
import Footer from './components/Footer';
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { 
    show: false 
  };
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="App">
        <Nav />
        <Header name="Enter the gates" onButtonClick={this.showModal}/>
        <Modal show={this.state.show} handleClose={this.hideModal}/>
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);

