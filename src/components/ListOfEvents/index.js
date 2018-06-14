import React, { Component } from 'react'
import './ListOfEvents.css'

class ListOfEvents extends Component {
    render() {
        return (
            <section className="container">
                <table className="table-list">
                    <thead>
                        <tr>                    
                            <th>Event Name</th>
                            <th>Starts at</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.eventList.map((event, index) => (
                        <tr key={index}>
                            <td>{event.nameOfEvent}</td>
                            <td>{event.startDateTime}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default ListOfEvents