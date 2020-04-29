import React from 'react';
import { modalOverlay, modalWrapper, modal, modalHeader, modalTitle, modalCloseButton, sizes, floatingBox } from './modal-css';
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
                    <div>
                        <div style={modalOverlay} />
                        <div style={modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
                            <div style={getStyle(options.size)} onKeyDownCapture={(event) => executeFuncOnEscape(event, hide)}>
                                <div style={modal}>
                                    {/* TODO: Body can come here*/}
                                    {/* TODO: Action bar can come here*/}
                                    <div style={modalHeader}>
                                        <button style={modalCloseButton} type="button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <p>{options.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            />

        </React.Fragment>
    )
}


export { Modal };