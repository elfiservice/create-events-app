import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './EditEvent.css'
import { connect } from 'react-redux'
import FormEvent from '../../components/FormEvent'

class EditEvent extends Component {
    render() {
        return (
            <section className="container edit-event">
                <h2>Editing NameOfEvent Event...</h2>
                <FormEvent userStatus={this.props.userStatus} dataRoute={this.props.dataRoute} />
                <Link to="/events" className="bkg-color-red rounded-btn" > &#8617; </Link>
            </section>
        )
    }
}

const mapStateToProps = state => ({ userStatus: state.userStatus.userAuthenticated })
export default connect(mapStateToProps)(EditEvent)