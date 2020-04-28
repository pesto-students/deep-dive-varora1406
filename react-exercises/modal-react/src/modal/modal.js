import React from 'react';
import { modalStyle } from './modal-css';
import { Toggle } from '../toggle/toggle';

const defaultOptions = {
    title: '',
    size: 'md',
}

const Modal = (props) => {
    const options = {
        ...defaultOptions,
        ...props
    }

    return (
        <React.Fragment>

            <Toggle
                toggle = { show => <button onClick={show}>👋 Open Dialog</button> }
                content = { hide => (
                  <div style={modalStyle} className='modal'>
                      <div> {options.title} </div>
                      {/* TODO: Body can come here*/}
                      {/* TODO: Action bar can come here*/}
                      <button onClick={hide}> 👉 Close </button>
                  </div>
                )}
            />
            
        </React.Fragment>
    )
}

export { Modal };