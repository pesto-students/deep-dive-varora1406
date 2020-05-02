import React from 'react';
import { modalHeader, modalCloseButton } from './header-css';

const Header = (props) => {
    return (
        <div style={modalHeader}>
            <h3 style={{ flex: '1' }}>{props.children}</h3>
            <button style={modalCloseButton} type="button" data-dismiss="modal" aria-label="Close" onClick={props.hideFunc}>
                <span aria-hidden="true">&#10006;</span>
            </button>
        </div>
    );
}

export { Header }