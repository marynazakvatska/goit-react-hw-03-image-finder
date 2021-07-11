import React, { Component } from 'react';
import { createPortal } from 'react-dom';
/* import React from 'react'; */
import s from './Modal.module.css';


const modalRoot = document.querySelector('#modal-root')

export default class  Modal extends Component  {
    
    componentDidMount() {
        console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.handleKeyDown)
    }
    componentWillUnmount() {
        console.log('Modal componentWillUnmount')
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {

            this.props.onClose();
        }
    };


    handleBackdropClick = e => {
        console.log('backdrop');
        console.log('currentTarget:', e.currentTarget);
        console.log('target:', e.target);
        
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
}



    render() {
     return createPortal (
         <div className={s.overlay} onClick={this.handleBackdropClick}>
             <div className={s.modal}>
                <img src="" alt="" />{this.props.children}
            </div>
         </div>,
     modalRoot,)
}
   
}