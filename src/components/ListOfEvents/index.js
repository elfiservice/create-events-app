import React, { Component } from 'react'
import './ListOfEvents.css'
import { Link } from 'react-router-dom'
import * as Helpers from '../../util/helpers'
import Modal from '../Modal'
import DeleteEvent from '../../containers/DeleteEvent'

class ListOfEvents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventId: '',
            hideModal: true
        }
    }

    deleteClick(eventId) {
        console.log('event clicked '+ eventId);
        this.setState({ 
            eventId,
            hideModal: false })
    }

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
                            <td>
                                <Link className="link" to={'/event/' + event.id}>{event.nameOfEvent}</Link>
                                <Link className="link" to={'/event-edit/' + event.id}><i className="fas fa-edit"></i></Link>
                                <a className="link" onClick={() => this.deleteClick(event.id)}><i className="far fa-trash-alt"></i></a>
                            </td>
                            <td>{Helpers.formatDate(event.startDateTime)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Modal hide={this.state.hideModal}>
                    <DeleteEvent id={this.state.eventId}/>
                </Modal>
            </section>
        )
    }
}

export default ListOfEvents