import React, { Component } from 'react'
import { getEvent } from '../server'

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

        return (
            <section>
                <h2>{this.state.event.nameOfEvent} Event Page</h2>
            </section>
        )
    }
}

export default Event