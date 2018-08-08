import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import NewAccount from '../containers/NewAccount'
import Login from '../containers/Login'
import Events from '../containers/Events'
import EditEvent from '../containers/EditEvent'
import NewEvent from '../containers/NewEvent'

export default props => (
    <Switch>
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

        <Route path="/event-edit/:ide" render={(dataRoute) => (
            <EditEvent dataRoute={dataRoute} />
        )} />

        <Redirect from="*" to="/" />
    </Switch>
)