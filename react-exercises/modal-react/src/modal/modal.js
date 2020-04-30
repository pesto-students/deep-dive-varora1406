import React from 'react';
import { modalOverlay, modalWrapper, modal, modalHeader, modalTitle, modalCloseButton, sizes } from './modal-css';
import { Toggle } from '../toggle/toggle';

const defaultOptions = {
    title: '',
    size: 'xs',
}

const getStyle = size => {
    const supportedSizes = Object.getOwnPropertyNames(sizes);
    if (!supportedSizes.includes(size)) {
        size = 'md'
    }
    return {
        ...modalWrapper,
        ...sizes[size]
    }
}

const ESCAPE_KEYCODE = 27;
const executeFuncOnEscape = (event, func) => {
    if (event.keyCode === ESCAPE_KEYCODE) {
        func();
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
                    <div>
                        <div style={modalOverlay} onClick={hide} />
                        <div style={getStyle(options.size)} aria-modal aria-hidden tabIndex={-1} role="dialog" onKeyDownCapture={(event) => executeFuncOnEscape(event, hide)}>
                            <div style={modal}>
                                <div style={modalHeader}>
                                    <h3 style={{ flex: '1' }}>{options.title}</h3>
                                    <button style={modalCloseButton} type="button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                {/* TODO: Body can come here*/}
                                {/* TODO: Action bar can come here*/}
                            </div>
                        </div>
                    </div>
                )}
            />

        </React.Fragment>
    )
}


export { Modal };