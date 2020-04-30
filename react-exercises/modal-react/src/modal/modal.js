import React from 'react';
import { Toggle } from '../toggle/toggle';
import { modal, modalOverlay, modalWrapper, sizes } from './modal-css';

import { Header } from './header/header';

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
                                {
                                    React.Children.map(
                                        options.children,
                                        (child) =>
                                            child.type === Header ?
                                                React.cloneElement(child, { hideFunc: hide }) :
                                                child
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )}
            />

        </React.Fragment>
    )
}


export { Modal };
