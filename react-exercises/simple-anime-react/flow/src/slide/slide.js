import { SlideUp } from "./slide-up";
import { SlideDown } from "./slide-down";
import React, { useRef, useEffect } from "react";

const defaultProps = {
    direction: 'up',
    time: 0.5, // time animation should take
    flow: true // optional condition, which can be passed to run animation according to user 
}

const Slide = (props) => {
    const finalProps = { ...defaultProps, ...props };

    const thisElement = useRef(null);
    let heightInterval = 0;

    const style = { overflow: finalProps.flow ? 'hidden' : '' };

    useEffect(() => {
        if (finalProps.flow) {
            const animationFrameTime = 16;
            const timeInMilliSeconds = finalProps.time * 1000;
            heightInterval = (thisElement.current.offsetHeight / timeInMilliSeconds) * animationFrameTime;

            window.requestAnimationFrame(() => {
                if (finalProps.direction === 'up') {
                    console.log(SlideUp);
                    SlideUp.animate(thisElement.current, heightInterval);
                } else if (finalProps.direction === 'down') {
                    SlideDown.animate(thisElement.current, heightInterval);
                }
            });
        }
    });

    return <div style={style} ref={thisElement}>{finalProps.children}</div>;
};

export { Slide }