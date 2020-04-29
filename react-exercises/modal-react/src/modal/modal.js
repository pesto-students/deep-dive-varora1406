import React from 'react';
import { modal, sizes, floatingBox } from './modal-css';
import { Toggle } from '../toggle/toggle';

const defaultOptions = {
    title: '',
    size: 'xxl',
}

const getStyle = size => {
    const supportedSizes = Object.getOwnPropertyNames(sizes);
    if (!supportedSizes.includes(size)) {
        size = 'md'
    }
    return {
        ...floatingBox,
        ...sizes[size]
    }
}

const ESCAPE_KEYCODE = 27;
const executeFuncOnEscape = (event, hideFunc) => {
    if (event.keyCode === ESCAPE_KEYCODE) {
        hideFunc();
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
                toggle={show => <button onClick={show}>👋 Open Dialog</button>}
                content={hide => (
                    <div style={getStyle(options.size)} onKeyDownCapture={(event) => executeFuncOnEscape(event, hide)}>
                        <div style={modal}>
                            <div> {options.title} </div>
                            {/* TODO: Body can come here*/}
                            {/* TODO: Action bar can come here*/}
                            <button onClick={hide}> 👉 Close </button>
                        </div>
                    </div>
                )}
            />

        </React.Fragment>
    )
}


export { Modal };