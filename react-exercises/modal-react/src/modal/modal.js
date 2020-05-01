import React, { useEffect, useRef, useState } from "react";
import { Header } from "./header/header";
import { modalOverlay, modalWrapper, sizes, modal } from "./modal-css";

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

    const modalRef = useRef(null);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    useEffect(() => {
        if (showModal) {
            modalRef.current.focus();
        }
    });

    return (
        <React.Fragment>
            <button className="modal-open-button" onClick={openModal}><span role="img" aria-label="">💪</span> Open Dialog</button>

            <Show showModal={showModal}>
                <div style={modalOverlay} onClick={closeModal} tabIndex={-1} />
                <div
                    style={getStyle(options.size)}
                    aria-modal
                    aria-hidden
                    tabIndex={-1}
                    role="dialog"
                    onKeyDownCapture={(event) =>
                        handleEscapePressEvent(event, closeModal)
                    }
                >

                    <div ref={modalRef} style={modal} aria-modal="true" tabIndex="-1">
                        {React.Children.map(options.children, (child) =>
                            child.type === Header
                                ? React.cloneElement(child, {
                                    hideFunc: closeModal,
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

