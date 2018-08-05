import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FormEvent from '../../components/FormEvent'

class NewEvent extends Component {
    render() {
        return (
            <section className="container edit-event">
                <h2 tabIndex="0">Creating New Event...</h2>
                <FormEvent userStatus={this.props.userStatus} dataRoute={this.props.dataRoute} />
                <Link to="/events" className="bkg-color-red rounded-btn"
                    role="button"
                    aria-label="Back to the list of events" > &#8617; </Link>
            </section>
        )
    }
}

const mapStateToProps = state => ({ userStatus: state.userStatus.userAuthenticated })
export default connect(mapStateToProps)(NewEvent)