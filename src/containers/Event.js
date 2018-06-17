import React, { Component } from 'react'
import { getEvent } from '../server'
import '../containers/Event.css'

class Event extends Component {
    constructor(props) {
        super(props)
        this.state = {
            event: {}
        }
    }

    componentDidMount() {
        this.getDataOfEvent()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userStatus !== this.props.userStatus) {
            this.getDataOfEvent();
          }
    }

    getDataOfEvent() {
        if (this.props && this.props.userStatus) {
            const userId = this.props.userStatus.uid
            const eventId = this.props.dataRoute.match.params.ide
            console.log(userId);
            
            getEvent(userId, eventId)
                .then((snapshot) => {
                    //console.log(snapshot.val());
                    this.setState({ event: snapshot.val() })
                })
                .catch(() => {
                    console.log('Erros trying fetch Event Data');
                    
                })
        }
    }

    render() {
        if (!this.props.userStatus) {
            return <div>Loading...</div>
          }

        return (
            <section className="container event">
                <h2>{this.state.event.nameOfEvent} Event Page</h2>
                <div className="content">
                    <p>Type of event <b>{this.state.event.typeEvents}</b></p>
                    <p>Event host <b>{this.state.event.eventHost}</b></p>
                    <p>Start at <b>{this.state.event.startDateTime}</b></p>
                    <p>Until at <b>{this.state.event.endDateTime}</b></p>
                    <p>Location <b>{this.state.event.location}</b></p>
                    <p>Guest list 
                        <div className="box-textarea">
                            <b>{this.state.event.guestList}</b>
                        </div>
                    </p>
                    <p>Message 
                        <div className="box-textarea">
                            <b>{this.state.event.message}</b>
                        </div>
                    </p>
                </div>
            </section>
        )
    }
}

export default Event