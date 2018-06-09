import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import TypeText from '../Inputs/TypeText'
import './NewEventForm.css'
import { insertDB } from '../../server'
import * as Message from "../../util/messages"

class NewEventForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventForm: {
                nameOfEvent: '',
                typeEvents: '',
                eventHost: '',
                startDateTime: '',
                endDateTime: '',
                guestList: '',
                location: '',
                message: ''
            },
            eventCreated: false
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
        this.createEvent = this.createEvent.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        // nested state - https://stackoverflow.com/questions/43040721/how-to-update-a-nested-state-in-react
        this.setState(prevState => ({
            ...prevState,
            eventForm: {
                ...prevState.eventForm,
                    [name]: value 
                }
            }))
    }

    createEvent(e) {
        e.preventDefault()
        let userID = this.props.userStatus.uid
        const msgElement = document.getElementById('msgError');
        insertDB(userID, this.state.eventForm).then(result => {
            this.setState({ eventCreated : true })
        })
        .catch(function(error) {
            Message.errorMsg(msgElement, error.message)
            setTimeout(Message.cleanMsgs(msgElement), 4000)
        });
    }

    render() {
        const { userStatus } = this.props;
        if(!userStatus){
            return <Redirect to="/login" />
        }

        if(this.state.eventCreated) {
            return <Redirect to="/events" />
        }

        return (
            <section className="events container">
                <h2>Creating New Event...</h2>
                <div id="msgError"></div>
                <section className="content center-of-screen">
                    <form onSubmit={this.createEvent}>
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
                        <button 
                            type="submit" 
                            className="submit btn"
                            
                            >Create</button>
                    </form>
                </section>    

                <Link to="/events" className="bkg-color-red rounded-btn" > &#8617; </Link>
            </section>
        )
    }
}

export default NewEventForm