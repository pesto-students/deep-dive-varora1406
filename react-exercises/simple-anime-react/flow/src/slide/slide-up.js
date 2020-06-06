import React, { useRef, useEffect } from 'react';

const defaultProps = {
    time: 0.5, // time animation should take
    flow: true // optional condition, which can be passed to run animation according to user
}


const SlideUp = (props) => {
    const thisElement = useRef(null);
    let heightReducer = 0;

    const finalProps = { ...defaultProps, ...props };
    const style = { overflow: finalProps.flow ? 'hidden' : '' };

    useEffect(() => {
        if (finalProps.flow) {
            const animationFrameTime = 16;
            const timeInMilliSeconds = finalProps.time * 1000;
            heightReducer = (thisElement.current.offsetHeight / timeInMilliSeconds) * animationFrameTime;
            window.requestAnimationFrame(animate);
        }
    });


    const animate = () => {
        let height = thisElement.current.offsetHeight - heightReducer;
        if (height < 0) {
            height = 0;
        }

        thisElement.current.style.height = height + 'px';
        if (thisElement.current.offsetHeight > 0) {
            window.requestAnimationFrame(animate);
        }
    }

    return <div style={style} ref={thisElement}>{finalProps.children}</div>;
}

export { SlideUp };

