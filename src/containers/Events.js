import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { signOut, checkNewEvent } from '../server'
import ListOfEvents from '../components/ListOfEvents'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getList } from '../containers/eventsAcitons'

class Events extends Component {

    componentDidMount() {
        checkNewEvent(this.props.userStatus.uid)
            .on('value', (snapshot) => {
                let array = [];
                if(snapshot.val() != null) {
                    const listOfEvents = snapshot.val()
                    for (var key in listOfEvents) {
                        listOfEvents[key].id = key;
                        array.push(listOfEvents[key])
                    }
                }
                // this.setState({ listOfEvents : array })
                this.props.getList(array)
            });
    }
    
    componentWillUnmount() {
        checkNewEvent(this.props.userStatus.uid).off()
    }

    signOut() {
        signOut()
    }

    render() {
        const { userStatus } = this.props;
        if(!userStatus){
            return <Redirect to="/login" />
        }

        return (
            <section className="events container">
                <h2 tabIndex="0">Manage your Events Here</h2>
                <p>Hi, {userStatus.displayName} <button className="btn btn-singout" onClick={this.signOut} aria-label="Log out button"><i className="fas fa-sign-out-alt"></i></button></p>
                <ListOfEvents eventList={this.props.listOfEvents} userStatus={userStatus} />
                <Link to="/new-event" 
                    className="bkg-color-green rounded-btn"
                    role="button"
                    aria-label="Add new event button" > &#9532; </Link> 
            </section>
        )
    }
}

const mapStateToProps = state => ({ userStatus: state.userStatus.userAuthenticated, listOfEvents: state.eventsList.list })
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Events)