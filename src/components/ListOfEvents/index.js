import React, { Component } from 'react'
import './ListOfEvents.css'
import { Link } from 'react-router-dom'
import * as Helpers from '../../util/helpers'
import Modal from '../Modal'
import DeleteEvent from '../../containers/DeleteEvent'
import { deleteEventDB } from '../../server'

class ListOfEvents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventId: '',
            hideModal: true
        }

        this.cancelClickModal = this.cancelClickModal.bind(this)
        this.deleteClickModal = this.deleteClickModal.bind(this)
    }

    deleteBtnClick(eventId) {
        this.setState({ 
            eventId,
            hideModal: false })
    }

    cancelClickModal() {
        this.setState({ hideModal: true })
    }

    deleteClickModal(idEvent) {
        const idUser = this.props.userStatus.uid
        deleteEventDB(idUser, idEvent)
            .then(() => {
                this.setState({ hideModal: true })
            })
            .catch(() => {
                console.log('Erros trying remove Event in DB');
                
            })
    }

    render() {
        if(this.props.eventList.length === 0) {
            return (
                <section className="content">
                    <small><i>Has no events yet. Create one now.</i></small>
                </section>
            )
        }
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
                                <a className="link" onClick={() => this.deleteBtnClick(event.id)}><i className="far fa-trash-alt"></i></a>
                            </td>
                            <td>{Helpers.formatDate(event.startDateTime)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Modal hide={this.state.hideModal}>
                    <DeleteEvent 
                        id={this.state.eventId} 
                        cancelClick={this.cancelClickModal} 
                        deleteEvent={this.deleteClickModal} />
                </Modal>
            </section>
        )
    }
}

export default ListOfEvents