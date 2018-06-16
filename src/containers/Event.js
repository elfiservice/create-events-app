import React, { Component } from 'react'
import { getEvent } from '../server'

class Event extends Component {
    constructor(props) {
        super(props)
        this.state = {
            event: {}
        }
    }

    componentWillMount() {
        const userId = this.props.userStatus.uid
        const eventId = this.props.dataRoute.match.params.ide
        getEvent(userId, eventId)
            .then((snapshot) => {
                //console.log(snapshot.val());
                this.setState({ event: snapshot.val() })
            })
    }

    render() {
        //console.log(this.props.dataRoute);
        const { dataRoute } = this.props;
        //todo: do the request to the data of Event
        console.log(this.state.event);
        
        return (
            <section>
                <h2>{this.state.event.nameOfEvent} Event Page</h2>
            </section>
        )
    }
}

export default Event