import React, { Component } from 'react'
import './ListOfEvents.css'

class ListOfEvents extends Component {

    formatDate(date) {
        var d = new Date(date);
        let day = d.getDate()
        let month = d.getMonth()
        let year = d.getFullYear()
        let hours = d.getHours()
        let min = d.getMinutes()
        return `${day}/${month + 1}/${year} at ${(hours < 10 ? "0"+hours : hours)}:${(min < 10 ? "0"+min : min)}`
    }

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
                            <td>{this.formatDate(event.startDateTime)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default ListOfEvents