import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import TypeText from '../Inputs/TypeText'
import './NewEventForm.css'

class NewEventForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameOfEvent: '',
            typeEvents: '',
            eventHost: '',
            startDateTime: '',
            endDateTime: '',
            guestList: '',
            location: '',
            message: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    render() {
        const { userStatus } = this.props;
        if(!userStatus){
            return <Redirect to="/login" />
        }
console.log(this.state);

        return (
            <section className="events container">
                <h2>Creating New Event...</h2>
                <section className="content center-of-screen">
                    <form>
                        <TypeText 
                            name="nameOfEvent" 
                            placeholder="Name of the event" 
                            value={this.state.name} 
                            onChange={this.handleInputChange}
                            />
                        <input 
                            aria-label="Type of the event" 
                            list="type-events" 
                            id="typeEvents"
                            name="typeEvents"
                            placeholder="Type of the event"
                            value={this.state.name} 
                            onChange={this.handleInputChange}
                            required />
                            <datalist id="type-events">
                                <option value="Party"></option>
                                <option value="Meeting"></option>
                                <option value="Conference Talk"></option>
                                <option value="Sports Game"></option>
                            </datalist>
                        <TypeText 
                            name="eventHost" 
                            placeholder="Event host" 
                            value={this.state.name} 
                            onChange={this.handleInputChange}
                            />
                        <label htmlFor="startDateTime" className="date-time-label">Start at</label>
                        <input 
                            className="date-time-input"
                            aria-label="Event start date and time" 
                            id="startDateTime" 
                            name="startDateTime" 
                            type="datetime-local" 
                            value={this.state.name} 
                            onChange={this.handleInputChange}
                            required />
                        <label htmlFor="endDateTime" className="date-time-label">Until</label>
                        <input 
                            className="date-time-input"
                            aria-label="Event end date and time" 
                            id="endDateTime" 
                            name="endDateTime" 
                            type="datetime-local" 
                            value={this.state.name} 
                            onChange={this.handleInputChange}
                            required />
                        <label htmlFor="guestList" className="date-time-label">Your Guest List</label>
                        <textarea 
                            className="textarea-input"
                            aria-label="Your Guest List" 
                            id="guestList" 
                            name="guestList" 
                            placeholder="List..." 
                            value={this.state.name} 
                            onChange={this.handleInputChange}
                            required />
                        <TypeText 
                            name="location" 
                            placeholder="Location" 
                            value={this.state.name} 
                            onChange={this.handleInputChange}
                            />
                        <label htmlFor="message" className="date-time-label">Message to Guest List (optional)</label>
                        <textarea 
                            className="textarea-input"
                            aria-label="Message to Guest List (optional)"
                            placeholder="Message..." 
                            id="message" 
                            name="message" 
                            value={this.state.name} 
                            onChange={this.handleInputChange}
                            required />
                    </form>
                </section>    

                <Link to="/events" className="bkg-color-red rounded-btn" > &#8617; </Link>
            </section>
        )
    }
}

export default NewEventForm