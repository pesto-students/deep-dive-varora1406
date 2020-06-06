import React from 'react';
import { Slide } from './slide';

const SlideDown = (props) => {
    const finalProps = { direction: 'down', ...props };
    return <Slide props={finalProps}>{finalProps.children}</Slide>;
}

SlideDown.animate = (element, heightInterval) => {
    let height = element.offsetHeight - heightInterval;
    if (height < 0) {
        height = 0;
    }

    element.style.height = height + 'px';
    if (element.offsetHeight > 0) {
        window.requestAnimationFrame(animate);
    }
}

export { SlideDown };