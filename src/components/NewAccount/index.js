import React, { Component } from 'react'
import './NewAccount.css'
import { createAccount } from '../../server'

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
        console.log(this.state);
        createAccount(this.state)

    }

    render() {
        return (
            <main className="new-account container">
                <h2>Join With Us</h2>
                <section className="content">
                    <form>
                        <input 
                            className="input" 
                            autoComplete="name" 
                            aria-label="Name" 
                            id="name" 
                            name="name" 
                            type="text" 
                            placeholder="Name"
                            value={this.state.name} 
                            onChange={this.handleInputChange}
                            required />
                        <input 
                            className="input" 
                            autoComplete="email" 
                            aria-label="Email" 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="Email" 
                            value={this.state.email} 
                            onChange={this.handleInputChange}
                            required />
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
                            className="submit btn"
                            onClick={this.createUser}
                            >Join</button>
                    </form>
                </section>
            </main>
        )
    }
}

export default NewAccount;