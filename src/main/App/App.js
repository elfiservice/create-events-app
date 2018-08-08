import React, { Component } from 'react'
import './App.css'
import { checkUserAuth } from '../../server'

import { BrowserRouter } from "react-router-dom";
import Routes from '../routes'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { checkAuth } from './appActions'

class App extends Component {

  componentDidMount() {
    checkUserAuth().onAuthStateChanged((user) => {
      if (user) {
        //set this time to the User has time to Read the Msg
        setTimeout(() => {
          this.props.checkAuth(user)
        }, 1000)
      } else {
        console.log('erro - user not Authenticaded');
        this.props.checkAuth(false)
      }
    })
  }

  render() {
    return (
      <BrowserRouter>      
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Create And Schedule Your Event</h1>
            <p><i>by elfiservice</i></p>
          </header>
          <Routes />
        </div> 
      </BrowserRouter>

    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ checkAuth }, dispatch)
export default connect(null, mapDispatchToProps)(App);
