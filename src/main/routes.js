import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import NewAccount from '../components/NewAccount'
import Login from '../containers/Login'
import Events from '../containers/Events'
import Event from '../containers/Event'
import EditEvent from '../containers/EditEvent'
import NewEvent from '../containers/NewEvent'

export default props => (
    <Router>
        <div>
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
            <NewEvent dataRoute={dataRoute} />
            )} />
            
            <Route path="/event/:ide" render={(dataRoute) => (
                <Event dataRoute={dataRoute} />
            )} />

            <Route path="/event-edit/:ide" render={(dataRoute) => (
                <EditEvent dataRoute={dataRoute} />
            )} />
        </div>
    </Router>
)