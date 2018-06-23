import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {


    render() {
        if(!this.props.hide) {
            let modal = document.querySelector('.modal_window')
            modal.classList.add("show");
        }
        
        return (
            <div className="modal_window">
                <article className="modal_content">
                    {this.props.children}
                </article>
            </div>
        )
    }
}

export default Modal