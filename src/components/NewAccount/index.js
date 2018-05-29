import React, { Component } from 'react'
import './NewAccount.css'
import { insert } from '../../server'

class NewAccount extends Component {

    putUser(data) {
        this.preventDefault();
        console.log(data);
        
    }

    render() {
        //console.log(insert);
        // insert('11', 'junior', 'elfi@elfi.com')
        return (
            <main className="new-account container">
                <h2>Join With Us</h2>
                <section className="content">
                    <form>
                        <input className="input" autoComplete="name" aria-label="Name" id="name" type="text" placeholder="Name" required />
                        <input className="input" autoComplete="email" aria-label="Email" id="email" type="email" placeholder="Email" required />
                        <input className="input" aria-label="Password" id="pass" type="password" placeholder="Password" required />
                        <button className="submit btn" onSubmit={(e) => this.putUser(e)}>Join</button>
                    </form>
                </section>
            </main>
        )
    }
}

export default NewAccount;