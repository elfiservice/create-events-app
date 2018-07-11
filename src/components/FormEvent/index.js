import React, { Component } from 'react'
import TypeText from '../Inputs/TypeText'
import TypeDataList from '../Inputs/TypeDataList'
import TypeTextarea from '../Inputs/TypeTextarea'
import TypeDatetime from '../Inputs/TypeDatetime'
import { getEvent, putEvent } from '../../server'
import * as Message from "../../util/messages"
import { Redirect } from 'react-router-dom'
import { toggleBtnLoader } from '../../util/helpers'
import LoaderGif from '../LoaderGif'

class FormEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventForm: {
                nameOfEvent: '',
                typeEvents: '',
                eventHost: '',
                startDateTime: '',
                endDateTime: '',
                guestList: '',
                location: '',
                message: ''
            },
            eventCreated: false
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.eventSubmit = this.eventSubmit.bind(this)
    }

    componentWillMount() {
        this.getDataOfEvent()
     }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userStatus !== this.props.userStatus && !this.state.eventCreated) {
            this.getDataOfEvent()
          }
    }

    getDataOfEvent() {
        //ckeck if exist a ID of event in the URL (to fill the fields when Editing )
        if (this.props && this.props.userStatus && this.props.dataRoute.match.params.ide) {
            const userId = this.props.userStatus.uid
            const eventId = this.props.dataRoute.match.params.ide
            
            getEvent(userId, eventId)
                .then((snapshot) => {
                    this.setState({ eventForm: snapshot.val() })
                })
                .catch(() => {
                    console.log('Erros trying fetch Event Data');
                    
                })
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        // nested state - https://stackoverflow.com/questions/43040721/how-to-update-a-nested-state-in-react
        this.setState(prevState => ({
            ...prevState,
            eventForm: {
                ...prevState.eventForm,
                    [name]: value 
                }
            }))
    }

    eventSubmit(e) {
        e.preventDefault()
        let userID = this.props.userStatus.uid
        const eventId = this.props.dataRoute.match.params.ide
        const msgElement = document.getElementById('msgError');
        const submitBtn = document.querySelector('.submit')
        toggleBtnLoader(submitBtn)

        putEvent(userID, eventId, this.state.eventForm)
            .then(result => {
                this.setState({ eventCreated : true })
                toggleBtnLoader(submitBtn)
            })
            .catch(function(error) {
                Message.errorMsg(msgElement, error.message)
                toggleBtnLoader(submitBtn)
                setTimeout(Message.cleanMsgs(msgElement), 4000)
            });
    }

    render() {
        const { userStatus } = this.props;
        if(!userStatus){
            return <Redirect to="/login" />
        }
        
        if(this.state.eventCreated) {
            return <Redirect to="/events" />
        }
        
        return (
            <section className="content center-of-screen">
            <div id="msgError"></div>
            <form onSubmit={this.eventSubmit}>
                <TypeText 
                    name="nameOfEvent" 
                    placeholder="Name of the event" 
                    value={this.state.eventForm.nameOfEvent} 
                    onChange={this.handleInputChange}
                    required={true}
                    autofocus={true}
                    />
                <TypeDataList
                    name="typeEvents"
                    placeholder="Type of the event list or enter yours"
                    value={this.state.eventForm.typeEvents} 
                    onChange={this.handleInputChange}
                    required={true}
                    dataList={["Party","Meeting","Conference Talk","Sports Game"]}
                />
                <TypeText 
                    name="eventHost" 
                    placeholder="Event host" 
                    value={this.state.eventForm.eventHost} 
                    onChange={this.handleInputChange}
                    required={true}
                    />
                <label htmlFor="startDateTime" className="date-time-label">Start at</label>
                <TypeDatetime
                    label="Event start date and time"
                    name="startDateTime"
                    value={this.state.eventForm.startDateTime} 
                    onChange={this.handleInputChange}
                    required={true}
                    />
                <label htmlFor="endDateTime" className="date-time-label">Until</label>
                <TypeDatetime
                    label="Event end date and time"
                    name="endDateTime"
                    value={this.state.eventForm.endDateTime} 
                    onChange={this.handleInputChange}
                    required={true}
                    />
                <TypeTextarea
                    name="guestList"
                    placeholder="Your Guest List"
                    value={this.state.eventForm.guestList} 
                    onChange={this.handleInputChange}
                    required={true}
                    />
                <TypeText 
                    name="location" 
                    placeholder="Location" 
                    value={this.state.eventForm.location} 
                    onChange={this.handleInputChange}
                    required={true}
                    />
                <TypeTextarea
                    name="message"
                    placeholder="Message to Guest List (optional)"
                    value={this.state.eventForm.message} 
                    onChange={this.handleInputChange}
                    />
                <button 
                    type="submit" 
                    className="submit btn btn-cta">Save</button>
                <LoaderGif />
            </form>
        </section>   
        )
    }

}

export default FormEvent