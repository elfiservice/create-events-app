import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

class NewEventForm extends Component {
    render() {
        const { userStatus } = this.props;
        if(!userStatus){
            return <Redirect to="/login" />
        }

        return (
            <section className="events container">
                <h3>Creating New Event...</h3>
                <Link to="/events" className="bkg-color-red rounded-btn" > &#8617; </Link>
            </section>
        )
    }
}

export default NewEventForm