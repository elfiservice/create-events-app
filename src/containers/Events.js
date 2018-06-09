import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { signOut } from '../server'
import { Link } from 'react-router-dom';
import { checkNewEvent } from '../server'


class Events extends Component {

    componentDidMount() {
        let checkEvents = checkNewEvent(this.props.userStatus.uid)
        checkEvents.on('value', function(snapshot) {
            //updateStarCount(postElement, snapshot.val());
            console.log(snapshot.val());

        });
    }
    
    signOut() {
        signOut()
    }

    render() {
        const { userStatus } = this.props;
        if(!userStatus){
            return <Redirect to="/login" />
        }
console.log(userStatus);

        return (
            <section className="events container">
                <h2>Manage your Events Here</h2>
                <p>Hi, {userStatus.displayName} <button className="btn" onClick={this.signOut}>Sign Out</button></p>
                <Link to="/new-event" className="bkg-color-green rounded-btn" > &#9532; </Link> 

            </section>
        )
    }
}

export default Events