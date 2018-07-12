import React, { Component } from 'react'
import './NewAccount.css'
import { createAccount } from '../../server'
import { Link, Redirect } from 'react-router-dom'
import TypeText from '../Inputs/TypeText'
import * as Message from '../../util/messages'
import { toggleBtnLoader } from '../../util/helpers'
import LoaderGif from '../LoaderGif'

import { connect } from 'react-redux'

class NewAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            pass: ''
        }

        this.createUser = this.createUser.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    createUser(e) {
        e.preventDefault()
        const msgElement = document.getElementById('msgError');
        Message.cleanMsgs(msgElement);
        const submitBtn = document.querySelector('.submit')
        toggleBtnLoader(submitBtn)
        const dataUser = this.state
        createAccount(dataUser)
            .then(result => {
                let user = result.user;
                user.updateProfile({ displayName: dataUser.name })
                    .then(function() {
                        Message.successMsg(msgElement, dataUser.name);
                        toggleBtnLoader(submitBtn)
                    })
                    .catch(function(error) {
                        console.error('Error trying to Updating New Account : ' + error);
                        toggleBtnLoader(submitBtn)
                    });
            })
            .catch(function(error) {
                Message.errorMsg(msgElement, error.message);
                console.log(error.code);
                toggleBtnLoader(submitBtn)
            });
    }

    render() {
        if(this.props.userStatus){
            return <Redirect to="/events" />
        }

        return (
            <main className="new-account container">
                <h2 tabIndex="0">Join With Us</h2>
                <div id="msgError"></div>
                <section className="content center-of-screen">
                    <form onSubmit={this.createUser}>
                        <TypeText
                            name="name"
                            placeholder="Your name"
                            value={this.state.name} 
                            onChange={this.handleInputChange}
                            required={true}
                            autofocus={true}
                            />
                        <TypeText
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={this.state.email} 
                            onChange={this.handleInputChange}
                            required={true}
                            />
                        <TypeText
                            type="password"
                            name="pass"
                            placeholder="Your Password"
                            value={this.state.pass} 
                            onChange={this.handleInputChange}
                            required={true}
                            />
                        <button 
                            type="submit" 
                            className="submit btn btn-cta"
                            >Join</button>
                        <LoaderGif />
                        <br/>
                        or
                        <br/>
                        <Link to="/login" className="btn btn-std" role="button" aria-label="Go to make a Log in     ">Login</Link>
                    </form>
                </section>
            </main>
        )
    }
}

const mapStateToProps = state => ({ userStatus: state.userStatus.userAuthenticated })

export default connect(mapStateToProps)(NewAccount)