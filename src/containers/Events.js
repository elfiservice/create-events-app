import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { signOut } from '../server'
import { Link } from 'react-router-dom';
import { checkNewEvent } from '../server'


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
console.log(this.state.listOfEvents);

        return (
            <section className="events container">
                <h2>Manage your Events Here</h2>
                <p>Hi, {userStatus.displayName} <button className="btn" onClick={this.signOut}>Sign Out</button></p>
                <Link to="/new-event" className="bkg-color-green rounded-btn" > &#9532; </Link> 
                {this.state.listOfEvents.map((event, index) => (
                    <li key={index}>{event.id}</li>
                ))}
            </section>
        )
    }
}

export default Events