import React, { Component } from 'react'
import './NewAccount.css'
import { createAccount } from '../../server'
import { Link, Redirect } from 'react-router-dom'
import TypeText from '../Inputs/TypeText'

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
        createAccount(this.state)
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
                    <form>
                        <TypeText
                            name="name"
                            placeholder="Your name"
                            value={this.state.name} 
                            onChange={this.handleInputChange}
                            required={true}
                            autofocus={true}
                            />
                        <TypeText
                            name="email"
                            placeholder="Your email"
                            value={this.state.email} 
                            onChange={this.handleInputChange}
                            required={true}
                            />
                        <input 
                            className="input" 
                            aria-label="Password" 
                            id="pass" 
                            type="password" 
                            name="pass" 
                            placeholder="Password" 
                            value={this.state.pass} 
                            onChange={this.handleInputChange}
                            required />
                        <button 
                            type="submit" 
                            className="submit btn btn-cta"
                            onClick={this.createUser}
                            >Join</button>
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

export default NewAccount;