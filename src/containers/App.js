import React, { Component } from 'react';
import './App.css';
import NewAccount from '../components/NewAccount'
import { checkUserAuth } from '../server'
import { Route } from 'react-router-dom';
import Login from '../containers/Login'
import Events from '../containers/Events'
import NewEventForm from '../components/NewEventForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userAuthenticated: false
    }
  }

  componentDidMount() {
    checkUserAuth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in..
        //set this time to the User has time to Read the Msg
        setTimeout(() => {
          this.setState({userAuthenticated : user})
        }, 1000)
      } else {
        console.log('erro - user no Authebtucat');
        this.setState({userAuthenticated : false})
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Create And Schedule Your Event</h1>
          <p><i>by elfiservice</i></p>
        </header>

        <Route exact path={'/'} render={() => (
          <NewAccount userStatus={this.state.userAuthenticated} />
        )} />

        <Route path="/login" render={() => (
          <Login userStatus={this.state.userAuthenticated} />
        )} />

        <Route path="/events" render={() => (
          <Events userStatus={this.state.userAuthenticated} />
        )} />

        <Route path="/new-event" render={() => (
            <NewEventForm userStatus={this.state.userAuthenticated} />
        )} />
        
      </div>
    );
  }
}

export default App;
