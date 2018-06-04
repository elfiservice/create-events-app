import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { signOut } from '../server'

class Events extends Component {

    signOut() {
        signOut()
    }

    render() {
        const { userStatus } = this.props;
        if(!userStatus){
            return <Redirect to="/login" />
        }

        return (
            <section className="events container">
                <h2>Manage your Events Here</h2>
                <p>Hi, {userStatus.displayName} <button className="btn" onClick={this.signOut}>Sign Out</button></p>
            </section>
        )
    }
}

export default Events