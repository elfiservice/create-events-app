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
        // document.querySelector('.events').setAttribute('aria-hidden', true)    
        this.setState({ 
            eventId,
            hideModal: false })
    }

    cancelClickModal() {
        this.setState({ hideModal: true })
    }

    deleteClickModal(idEvent) {
        const idUser = this.props.userStatus.uid
        const submitBtn = document.querySelector('.delete-btn')
        Helpers.toggleBtnLoader(submitBtn)
        deleteEventDB(idUser, idEvent)
            .then(() => {
                this.setState({ hideModal: true })
                Helpers.toggleBtnLoader(submitBtn)
            })
            .catch(() => {
                console.log('Erros trying remove Event in DB');
                Helpers.toggleBtnLoader(submitBtn)            
            })
    }

    render() {
        console.log(this.props.eventList.length);
        
        if(this.props.eventList.length === 0) {
            return (
                <section className="content">
                    <small><i>Has no events yet. Create one now.</i></small>
                </section>
            )
        }
        return (
            <section className="content">
                <table className="table-list" >
                    <thead>
                        <tr>                    
                            <th>Event Name</th>
                            <th>Starts at</th>
                        </tr>
                    </thead>
                    <tbody role="list" aria-label="List of events">
                    {this.props.eventList.map((event, index) => (
                        <tr key={index} role="listitem">
                            <td>
                                <Link className="link" to={'/event/' + event.id} aria-label={event.nameOfEvent + " event"}>{event.nameOfEvent}</Link>
                                <Link className="link" to={'/event-edit/' + event.id} role="button" aria-label="Edit event"><i className="fas fa-edit"></i></Link>
                                <a className="link" onClick={() => this.deleteBtnClick(event.id)} role="button" aria-label="Delete event" tabIndex="0"><i className="far fa-trash-alt"></i></a>
                            </td>
                            <td tabIndex="0" aria-label={"Event starts at " + event.startDateTime}>{Helpers.formatDate(event.startDateTime)}</td>
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