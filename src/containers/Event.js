import React, { Component } from 'react'
import { getEvent } from '../server'
import '../containers/Event.css'
import { Link } from 'react-router-dom'
import * as Helpers from '../util/helpers'

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
                <h2><i>{this.state.event.nameOfEvent}</i> Event Page</h2>
                <div className="content">
                    <p>Type of event <b>{this.state.event.typeEvents}</b></p>
                    <p>Event host <b>{this.state.event.eventHost}</b></p>
                    <p>Start at <b>{Helpers.formatDate(this.state.event.startDateTime)}</b></p>
                    <p>Until at <b>{Helpers.formatDate(this.state.event.endDateTime)}</b></p>
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
                <Link to="/events" className="bkg-color-red rounded-btn" > &#8617; </Link>
            </section>
        )
    }
}

export default Event