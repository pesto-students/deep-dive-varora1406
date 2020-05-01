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
    const modalRef = useRef(null);
    let firstTabbableElement = useRef(null);
    let lastTabbableElement = useRef(null);

    const closeModal = () => {
        setModalState(false);
        options.onClose();
    };

    useEffect(() => {
        if (canShowModal) {
            const tabbableElements = getTabbableChildren(modalRef.current);
            if (tabbableElements.length > 0) {
                firstTabbableElement.current = tabbableElements[0];
                lastTabbableElement.current = tabbableElements[tabbableElements.length - 1];
            }
            modalRef.current.focus();
        }
    });

    // TODO: Check if the focus is in init state on the modal. Then what should be the behaviour of Shift + Tab ?
    const TAB_KEYCODE = 9;
    const handleTabPressEvent = (event) => {
        if (event.keyCode === TAB_KEYCODE) {
            const currentActiveElement = document.activeElement;
            // If current element is equal to the first element
            if (event.shiftKey && event.keyCode === TAB_KEYCODE) {
                // If Shift + Tab is Pressed
                if (currentActiveElement === firstTabbableElement.current) {
                    lastTabbableElement.current.focus();
                }
            }
            // If the current element is equal to the last element
            if (currentActiveElement === lastTabbableElement.current) {
                // If Tab is Pressed
                if (event.keyCode === TAB_KEYCODE) {
                    firstTabbableElement.current.focus();
                }
            }
        }
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
                    onKeyUpCapture={(event) => handleTabPressEvent(event)}
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

