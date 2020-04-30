import React, { useState } from "react";
import { modal, modalOverlay, modalWrapper, sizes } from "./modal-css";
import { Header } from "./header/header";

const defaultOptions = {
    title: "",
    size: "sm",
};

const getStyle = (size) => {
    const supportedSizes = Object.getOwnPropertyNames(sizes);
    if (!supportedSizes.includes(size)) {
        size = "md";
    }
    return {
        ...modalWrapper,
        ...sizes[size],
    };
};

const ESCAPE_KEYCODE = 27;
const handleEscapePressEvent = (event, closeModalFunction) => {
    if (event.keyCode === ESCAPE_KEYCODE) {
        closeModalFunction();
    }
};

const Show = (props) => {
    return props.showModal ? <>{props.children}</> : null;
};

const Modal = (props) => {

    const options = {
        ...defaultOptions,
        ...props,
    };

    const [showModal, setShowModal] = useState(false);

    return (
        <React.Fragment>
            <button onClick={() => setShowModal(!showModal)}>💪 Open Dialog</button>

            <Show showModal={showModal}>
                <div style={modalOverlay} onClick={() => setShowModal(!showModal)} />
                <div
                    style={getStyle(options.size)}
                    aria-modal
                    aria-hidden
                    tabIndex={-1}
                    role="dialog"
                    onKeyDownCapture={(event) =>
                        handleEscapePressEvent(event, () => setShowModal(!showModal))
                    }
                >
                    <div style={modal}>
                        {React.Children.map(options.children, (child) =>
                            child.type === Header
                                ? React.cloneElement(child, {
                                    hideFunc: () => setShowModal(!showModal),
                                })
                                : child
                        )}
                    </div>
                </div>
            </Show>
        </React.Fragment>
    );
};

export { Modal };
