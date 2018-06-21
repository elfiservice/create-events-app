import React, { Component } from 'react'
import FormEvent from '../components/FormEvent'
import { Link } from 'react-router-dom'

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

export default EditEvent