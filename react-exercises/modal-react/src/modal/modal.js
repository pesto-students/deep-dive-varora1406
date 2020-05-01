import React, { useEffect, useRef, useState } from "react";
import { Header } from "./header/header";
import { modalOverlay, modalWrapper, sizes, modal } from "./modal-css";
import { Show } from "../show/show";
import { isNumericString } from "./utils/number";

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

    const initRef = useRef();
    const endRef = useRef();

    const closeModal = () => {
        setModalState(false);
        options.onClose();
    };

    useEffect(() => {
        if (canShowModal) {
            const tabbableElements = Array.from(modalRef.current.querySelectorAll('button, input, select, textarea form div[contenteditable], span[user-modify="read-write"], anchor, area, fieldset, keygen, label, svg, rect, summary')).filter(el => {
                if (el.getAttribute('tabIndex') && isNumericString(el.getAttribute('tabIndex'))) {
                    return Number(el.getAttribute('tabIndex')) >= 0;
                }
                return true;
            });
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

