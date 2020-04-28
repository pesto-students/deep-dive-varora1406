import React from 'react';
import { modalStyle } from './modal-css';

const defaultOptions = {
    title: '',
    size: 'md',
}

function Modal(props) {
    const options = {
        ...defaultOptions,
        ...props
    }

    return (
        <div style={modalStyle}>
            <div> {options.title} </div>
            {/* TODO: Body can come here*/}
            {/* TODO: Action bar can come here*/}
        </div>
    )
}

export { Modal };