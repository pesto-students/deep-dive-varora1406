import React from 'react';
import { modalBody } from './body-css';

const Body = (props) => {
    return (
        <div style={modalBody}>
            {props.children}
        </div>
    )
}

export { Body }