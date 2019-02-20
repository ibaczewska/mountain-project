import { hot } from 'react-hot-loader';
import React, { Component } from 'react';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
      </div>
    );
  }
}

export default hot(module)(App);

