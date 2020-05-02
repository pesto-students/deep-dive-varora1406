import React from 'react';

const defaultOptions = {
    show: true
}

const Show = (props) => {
    const options = {
        ...defaultOptions,
        ...props
    };

    return options.show ? <>{options.children}</> : null;
};

export { Show }