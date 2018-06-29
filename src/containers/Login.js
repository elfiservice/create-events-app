import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { authUser } from '../server'
import './Login.css'
import TypeText from '../components/Inputs/TypeText'
import * as Message from '../util/messages'
import { toggleBtnLoader } from '../util/helpers'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pass: ''
        }

        this.makeLogin = this.makeLogin.bind(this)
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

    makeLogin(e) {
        e.preventDefault()
        const msgElement = document.getElementById('msgError');
        Message.cleanMsgs(msgElement);
        const submitBtn = document.querySelector('.submit')
        toggleBtnLoader(submitBtn)
        authUser(this.state)
            .then(result => {
                Message.successMsg(msgElement, result.user.displayName);
                toggleBtnLoader(submitBtn)
            })
            .catch(function(error) {
                // Handle Errors here.
                // var errorCode = error.code;
                var errorMessage = error.message;
                Message.errorMsg(msgElement, errorMessage);
                toggleBtnLoader(submitBtn)
            })
    }

    render() {
        if(this.props.userStatus){
            return <Redirect to="/events" />
        }
        
        return (
            <section className="login container">
                <h2>You're ready to go in now....</h2>
                <div id="msgError"></div>
                <section className="content center-of-screen">
                    <form>
                        <TypeText
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={this.state.email} 
                            onChange={this.handleInputChange}
                            required={true}
                            autofocus={true}
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
                            onClick={this.makeLogin}
                            >Login</button>
                        <div className="loader-gif"><img width="20%" src="../assets/images/loader.gif" /></div>
                        <br/>
                        or
                        <br/>
                        <Link to="/" className="btn btn-std" role="button" aria-label="Back to create new account button" > &#8617; </Link>
                    </form>
                </section>
            </section>
        )
    }
}

export default Login;