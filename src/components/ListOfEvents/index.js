import React, { Component } from 'react'

class ListOfEvents extends Component {
    render() {
        return (
            <section className="container">
                <table>
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