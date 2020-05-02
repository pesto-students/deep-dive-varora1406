import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Modal } from "./modal";


let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("test modal props", () => {
    it("renders modal component given the props", () => {
        act(() => {
            render(<Modal />, container);
        })
        const overlay = document.querySelectorAll('[data-testid=modal-overlay]');
        expect(overlay).toHaveLength(1);
    });
});


describe("test modal events", () => {
    it("should close the modal when ESC is pressed", () => {
        const closeFn = jest.fn();
        act(() => {
            render(<Modal onClose={closeFn}></Modal>, container);
        })
        const event = new KeyboardEvent('keydown', { key: 'Escape' });
        document.dispatchEvent(event);
        expect(closeFn).toHaveBeenCalledTimes(1);
    });
    it("should close when clicked outside modal", () => {
        const closeFn = jest.fn();
        act(() => {
            render(<Modal onClose={closeFn}></Modal>, container);
        })
        const event = new MouseEvent('click', { 'bubbles': true });
        const overlayArea = document.querySelector('[data-testid=modal-overlay]');
        overlayArea.dispatchEvent(event);
        expect(closeFn).toHaveBeenCalledTimes(1);
    });
    it("should not close when clicked on modal", () => {
        const closeFn = jest.fn();
        act(() => {
            render(<Modal onClose={closeFn}></Modal>, container);
        })
        const event = new MouseEvent('click', { 'bubbles': true });
        const modal = document.querySelector('[data-testid=modal-area]');
        modal.dispatchEvent(event);
        expect(closeFn).toHaveBeenCalledTimes(0);
    });
});