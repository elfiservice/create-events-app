import React, { Component } from 'react';
import './App.css';
import NewAccount from '../components/NewAccount'
import { checkUserAuth } from '../server'
import { Route } from 'react-router-dom';
import Login from '../containers/Login'
import Events from '../containers/Events'
import Event from '../containers/Event'
import EditEvent from '../containers/EditEvent'
import NewEvent from '../containers/NewEvent'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { checkAuth } from './appActions'

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
          this.props.checkAuth(user)
          //this.setState({userAuthenticated : user})
        }, 1000)
      } else {
        console.log('erro - user not Authenticaded');
        this.props.checkAuth(false)
        //this.setState({userAuthenticated : false})
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
          <NewAccount  />
        )} />

        <Route path="/login" render={() => (
          <Login  />
        )} />

        <Route path="/events" render={() => (
          <Events  />
        )} />

        <Route path="/new-event" render={(dataRoute) => (
            // <NewEventForm userStatus={this.state.userAuthenticated} />
            <NewEvent dataRoute={dataRoute} userStatus={this.state.userAuthenticated} />
        )} />
        
        <Route path="/event/:ide" render={(dataRoute) => (
            <Event dataRoute={dataRoute} userStatus={this.state.userAuthenticated} />
        )} />

        <Route path="/event-edit/:ide" render={(dataRoute) => (
            <EditEvent dataRoute={dataRoute} userStatus={this.state.userAuthenticated} />
        )} />
        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ checkAuth }, dispatch)

export default connect(null, mapDispatchToProps)(App);
