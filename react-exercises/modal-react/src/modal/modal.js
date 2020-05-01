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
            <button className="modal-open-button" onClick={() => setShowModal(!showModal)}><span role="img" aria-label="">💪</span> Open Dialog</button>

            <Show showModal={showModal}>
                <div style={modalOverlay} onClick={() => setShowModal(!showModal)} tabIndex={-1} />
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
                    <div style={modal} aria-modal="true" tabIndex="-1">
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
        </React.Fragment >
    );
};

export { Modal };
