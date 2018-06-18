import React, { Component } from 'react'
import './ListOfEvents.css'
import { Link } from 'react-router-dom'
import * as Helpers from '../../util/helpers'

class ListOfEvents extends Component {

    render() {
        return (
            <section className="content">
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
                            <td><Link to={'/event/' + event.id}>{event.nameOfEvent}</Link></td>
                            <td>{Helpers.formatDate(event.startDateTime)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default ListOfEvents