import React from 'react';
import { modalStyle, modalSize } from './modal-css';
import { Toggle } from '../toggle/toggle';

const defaultOptions = {
    title: '',
    size: 'xxl',
}

const getStyle = size => {
    const supportedSizes = Object.getOwnPropertyNames(modalStyle);
    if (!supportedSizes.includes(size)) {
        size = 'md'
    }
     return {
        ...modalStyle,
        ...modalSize[size]
    }
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
                  <div style={getStyle(options.size)} className='modal'>
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