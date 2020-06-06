import React from 'react';
import { Slide } from './slide';

const SlideUp = (props) => {
    const finalProps = { direction: 'up', ...props };
    return <Slide {...finalProps}>{finalProps.children}</Slide>;
}

const animate = (element, heightInterval) => {
    let height = element.offsetHeight - heightInterval;
    if (height < 0) {
        height = 0;
    }

    element.style.height = height + 'px';
    if (element.offsetHeight > 0) {
        window.requestAnimationFrame(() => {
            animate(element, heightInterval);
        });
    }
}

SlideUp.animate = animate;

export { SlideUp };

