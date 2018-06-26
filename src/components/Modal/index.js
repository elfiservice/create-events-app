import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {
    render() {
        let modal = document.querySelector('.modal_window')
        if(!this.props.hide && modal) {
            modal.classList.add("show");
        } else if(this.props.hide && modal) {
            modal.classList.remove("show");
        }

        return (
            <div className="modal_window" >
                <article className="modal_content" role="dialog">
                    {this.props.children}
                </article>
            </div>
        )
    }
}

export default Modal