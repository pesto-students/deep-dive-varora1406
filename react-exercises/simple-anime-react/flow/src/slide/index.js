import React, { useRef, useEffect } from 'react';

const SlideUp = (props) => {
    const thisElement = useRef(null);
    let heightReducer = 0;

    useEffect(() => {
        if (props.flow) {
            heightReducer = thisElement.current.offsetHeight / (props.time * 1000) * 16;

            thisElement.current.style.overflow = 'hidden';
            window.requestAnimationFrame(animate);
        }
    });


    const animate = () => {
        if (thisElement.current.offsetHeight - heightReducer > 0) {
            thisElement.current.style.height = (thisElement.current.offsetHeight - heightReducer) + 'px';
        } else {
            thisElement.current.style.height = '0px';
        }

        if (thisElement.current.offsetHeight > 0) {
            window.requestAnimationFrame(animate);
        }
    }

    return <div ref={thisElement}>{props.children}</div>;
}

export { SlideUp };

