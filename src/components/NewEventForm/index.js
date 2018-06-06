import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

class NewEventForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameOfEvent: '',
            typeEvents: '',
            eventHost: '',
            startDateTime: '',
            endDateTime: ''
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
                        <input 
                            aria-label="Name of the event" 
                            id="nameOfEvent" 
                            name="nameOfEvent" 
                            type="text" 
                            placeholder="Name of the event"
                            value={this.state.name} 
                            onChange={this.handleInputChange}
                            required />
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
                        <input 
                            aria-label="Event host" 
                            id="eventHost" 
                            name="eventHost" 
                            type="text" 
                            placeholder="Event host"
                            value={this.state.name} 
                            onChange={this.handleInputChange}
                            required />
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
                        <label htmlFor="endDateTime" className="date-time-label">Util at</label>
                        <input 
                            className="date-time-input"
                            aria-label="Event end date and time" 
                            id="endDateTime" 
                            name="endDateTime" 
                            type="datetime-local" 
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