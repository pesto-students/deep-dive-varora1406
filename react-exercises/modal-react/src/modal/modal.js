import React, { useEffect, useRef, useState } from "react";
import { Header } from "./header/header";
import { modalOverlay, modalWrapper, sizes, modal } from "./modal-css";
import { Show } from "../show/show";
import { getTabbableChildren } from "./utils/dom";

const defaultOptions = {
    title: "",
    size: "sm",
    onClose: () => { }
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

const Modal = (props) => {
    const options = {
        ...defaultOptions,
        ...props,
    };

    const [canShowModal, setModalState] = useState(true);
    const modalRef = useRef();

    // TODO: use firstTabbableElement && lastTabbableElement for focus trap of modal
    const firstTabbableElement = useRef();
    const lastTabbableElement = useRef();

    const closeModal = () => {
        setModalState(false);
        options.onClose();
    };

    useEffect(() => {
        if (canShowModal) {
            // TODO: use tabbableElements further for focus trap of modal
            const tabbableElements = getTabbableChildren(modalRef.current);

            modalRef.current.focus();
        }
    });

    return (
        <React.Fragment>
            <Show show={canShowModal}>
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

                    <div ref={modalRef} style={modal} aria-modal="true" tabIndex={0}>
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

