import React from 'react';

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
        <div>
            <div> {options.title} </div>
            {/* TODO: Body can come here*/}
            {/* TODO: Action bar can come here*/}
        </div>
    )
}

export { Modal };