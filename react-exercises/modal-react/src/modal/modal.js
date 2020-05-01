import React, { useEffect, useRef, useState } from "react";
import { Show } from "../show/show";
import { Header } from "./header/header";
import { modal, modalOverlay, modalWrapper, sizes } from "./modal-css";
import { getTabbableChildren } from "./utils/dom";
import { handleEscapePressEvent, handleTabEvent } from "./utils/event";

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

const Modal = (props) => {
    const options = {
        ...defaultOptions,
        ...props,
    };

    const [canShowModal, setModalState] = useState(true);
    const modalRef = useRef();

    let firstTabbableElement = useRef();
    let lastTabbableElement = useRef();

    const closeModal = () => {
        setModalState(false);
        options.onClose();
    };

    useEffect(() => {
        if (canShowModal) {
            const tabbableElements = getTabbableChildren(modalRef.current);
            firstTabbableElement = tabbableElements[0];
            lastTabbableElement = tabbableElements[tabbableElements.length - 1];

            modalRef.current.focus();
        }
    });

    // TODO: Continue implementation of focus trap
    const handleTabbable = (event) => {
        console.log(event.target === firstTabbableElement);
        console.log(event.target === lastTabbableElement);
    }

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
                    onKeyDownCapture={(event) => handleEscapePressEvent(event, closeModal)}
                    onKeyUpCapture={(event) => handleTabEvent(event, handleTabbable)}
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

