import React, { Component } from 'react';
import './App.css';
import NewAccount from '../components/NewAccount'
import { checkUserLogIn } from '../server'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userLogIn: false
    }
  }

  componentDidMount() {
    console.log(checkUserLogIn());
     
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Create And Schedule Your Event</h1>
          <p><i>by elfiservice</i></p>
        </header>
        <NewAccount />
      </div>
    );
  }
}

export default App;
