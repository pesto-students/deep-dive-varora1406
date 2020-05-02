import React, { useEffect, useRef, useState } from "react";
import { getTabbableChildren } from "../../utils/dom";
import { handleEscapePressEvent, handleTabEvent } from "../../utils/event";
import { addChildrenIfMissing } from "../../utils/jsx";
import { Show } from "../show/show";
import { Body } from "./body/body";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { modal, modalOverlay, modalWrapper, sizes } from "./modal-css";

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

const requiredChildren = [
    Header,
    Body,
    Footer
];

const Modal = (props) => {
    const options = {
        ...defaultOptions,
        ...props,
    };

    options.children = addChildrenIfMissing(options.children, requiredChildren);

    const elementActiveBeforeModalOpen = document.activeElement;

    const [canShowModal, setModalState] = useState(true);
    const modalRef = useRef(null);

    let firstTabbableElement = useRef(null);
    let lastTabbableElement = useRef(null);

    const closeModal = () => {
        setModalState(false);
        document.removeEventListener('keydown', handleModalKeyDown, true);
        options.onClose();
        elementActiveBeforeModalOpen.focus();
    };

    useEffect(() => {
        if (canShowModal) {
            const tabbableElements = getTabbableChildren(modalRef.current);
            if (tabbableElements.length > 0) {
                firstTabbableElement.current = tabbableElements[0];
                lastTabbableElement.current = tabbableElements[tabbableElements.length - 1];
            }
            // CrossButton Autofocus set to default because it is already part of default modal.
            const crossButtonReference = tabbableElements[0];
            const defaultTabbedElement = tabbableElements.length > 2 ? tabbableElements[1] : crossButtonReference;
            defaultTabbedElement.focus();
        }
    });

    const handleModalKeyDown = (event) => {
        handleEscapePressEvent(event, closeModal);
        handleTabEvent(event, handleTabPressEvent);
    }

    const handleTabPressEvent = (event) => {
        const currentActiveElement = document.activeElement;

        if (event.shiftKey) {
            if (currentActiveElement === firstTabbableElement.current) {
                lastTabbableElement.current.focus();
                event.preventDefault();
            }
        } else {
            if (currentActiveElement === lastTabbableElement.current) {
                firstTabbableElement.current.focus();
                event.preventDefault();
            }
        }
    }

    document.addEventListener('keydown', handleModalKeyDown, true);

    return (
        <Show show={canShowModal}>
            <div style={modalOverlay} onClick={closeModal} tabIndex={-1} />
            <div
                style={getStyle(options.size)}
                aria-modal
                aria-hidden
                tabIndex={-1}
                role="dialog"
            >
                <div ref={modalRef} style={modal} aria-modal="true" tabIndex={-1}>
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
    );
};
export { Modal };
