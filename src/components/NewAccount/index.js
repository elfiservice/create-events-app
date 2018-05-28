import React, { Component } from 'react'
import './NewAccount.css'

class NewAccount extends Component {
    render() {
        return (
            <div className="new-account container">
                <h2>Join With Us</h2>
                <section className="content">
                    <form>
                        <label for="name">
                            <input class="input" autocomplete="name" aria-label="Name" id="name" type="text" placeholder="Name" required />
                        </label>
                        <label for="email">
                            <input class="input" autocomplete="email" aria-label="Email" id="email" type="email" placeholder="Email" required />
                        </label>
                        <label for="pass">
                            <input class="input" aria-label="Password" id="pass" type="password" placeholder="Password" required />
                        </label>
                        <button class="submit btn">Join</button>
                    </form>
                </section>
            </div>
        )
    }
}

export default NewAccount