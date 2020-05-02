import React from 'react';

const defaultOptions = {
    text: "",
    clickFunc = () => { }
}

function Button(props) {
    const options = {
        ...defaultOptions,
        ...props
    };

    const clickFunc = (func) => {
        if (typeof func === 'function') {
            func();
        } else {
            throw TypeError(`Expected function param, instead recieved one is type of ${typeof func}`);
        }
    };

    return (
        <button onClick={clickFunc(options.clickFunc)}>{options.text}</button>
    );
}

export { Button }