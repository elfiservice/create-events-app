import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { signOut, checkNewEvent } from '../server'
import ListOfEvents from '../components/ListOfEvents'


class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfEvents: []
        }
    }

    componentDidMount() {
        let checkEvents = checkNewEvent(this.props.userStatus.uid)
        checkEvents.on('value', (snapshot) => {

            if(snapshot.val() != null) {
                const listOfEvents = snapshot.val()
                let array = [];
                for (var key in listOfEvents) {

                    listOfEvents[key].id = key;
                    array.push(listOfEvents[key])
                  }

                this.setState({ listOfEvents : array })
            }
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

        return (
            <section className="events container">
                <h2 tabIndex="0">Manage your Events Here</h2>
                <p>Hi, {userStatus.displayName} <button className="btn btn-singout" onClick={this.signOut} aria-label="Log out button"><i className="fas fa-sign-out-alt"></i></button></p>
                <ListOfEvents eventList={this.state.listOfEvents} userStatus={userStatus} />
                <Link to="/new-event" 
                    className="bkg-color-green rounded-btn"
                    role="button"
                    aria-label="Add new event button" > &#9532; </Link> 
            </section>
        )
    }
}

export default Events