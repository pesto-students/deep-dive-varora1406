import { SlideUp } from "./slide-up";
import { SlideDown } from "./slide-down";
import React, { useRef, useEffect } from "react";

const defaultProps = {
    direction: 'up', // (optional) direction in which slide should happen
    time: 0.5, // (optional) time animation should take
    flow: true, // (optional) animation should run or not, can be controlled with this bit
    onComplete: () => { } // (optional) callback when animation is done
}

const animate = ({ animatorElement, heightInterval, calculatorElement, direction, onComplete }) => {
    window.requestAnimationFrame(() => {
        if (direction === 'up') {
            SlideUp.animate({ animatorElement, heightInterval }).then(() => {
                onComplete();
            });
        } else if (direction === 'down') {
            SlideDown.animate({ animatorElement, heightInterval, calculatorElement }).then(() => {
                onComplete();
            });
        }
    });
}

const Slide = (props) => {
    const finalProps = { ...defaultProps, ...props };

    const animatorElement = useRef(null);
    const calculatorElement = useRef(null);
    let heightInterval = 0;

    useEffect(() => {
        if (finalProps.start) {
            const animationFrameTime = 16;
            const timeInMilliSeconds = finalProps.time * 1000;
            const childrenHeight = window.getComputedStyle(calculatorElement.current).height;
            heightInterval = (parseInt(childrenHeight, 10) / timeInMilliSeconds) * animationFrameTime;

            animate({
                animatorElement: animatorElement.current,
                heightInterval,
                direction: finalProps.direction,
                calculatorElement: calculatorElement.current,
                onComplete: finalProps.onComplete
            });
        }
    });

    return <div style={{ overflow: 'hidden' }} ref={animatorElement}>
        <div ref={calculatorElement}>{finalProps.children}</div>
    </div>;
};

export { Slide }