import React, { Component } from 'react'

class Event extends Component {
    render() {
        console.log(this.props.dataRoute);
        const { dataRoute } = this.props;
        //todo: do the request to the data of Event
        return (
            <section>
                <h2>{dataRoute.match.params.ide} Event Page</h2>
            </section>
        )
    }
}

export default Event