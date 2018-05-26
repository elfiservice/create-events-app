import React, { Component } from 'react';
import './App.css';
import NewAccount from '../components/NewAccount'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Create And Schedule Your Event</h1>
          <p><i>by elfiservice</i></p>
        </header>
        <p className="App-intro">
          <NewAccount />
        </p>
      </div>
    );
  }
}

export default App;
