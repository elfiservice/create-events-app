import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <section>
                <h2>You're ready to go in now....</h2>
                <Link to="/" className="btn" > &#8617; </Link>
            </section>
        )
    }
}

export default Login;