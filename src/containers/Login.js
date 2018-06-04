import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { authUser } from '../server'
import './Login.css'

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
        authUser(this.state);
        // authUser(this.state).then(result => {
        //     console.log('user authenticated ' + result.user.email)
        // })
        // .catch(((error) => {
        //     console.log('Error trying make Login : ' + error);
            
        // })); 
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
                            onClick={this.makeLogin}
                            >Login</button>
                        <br/>
                        or
                        <br/>
                        <Link to="/" className="btn" > &#8617; </Link>
                    </form>
                </section>
            </section>
        )
    }
}

export default Login;