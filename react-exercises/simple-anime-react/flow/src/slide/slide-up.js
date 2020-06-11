import React from 'react';
import { Slide } from './slide';

const SlideUp = (props) => {
    const finalProps = { direction: 'up', ...props };
    return <Slide {...finalProps}>{finalProps.children}</Slide>;
}

const animate = ({ animatorElement, heightInterval }) => {
    const promise = new Promise((resolver, rejector) => {
        let newHeight = animatorElement.offsetHeight - heightInterval;
        if (newHeight < 0) {
            newHeight = 0;
        }

        animatorElement.style.height = newHeight + 'px';
        if (animatorElement.offsetHeight > 0) {
            return window.requestAnimationFrame(() => {
                const innerPromise = animate({ animatorElement, heightInterval });
                innerPromise.then(() => {
                    resolver(true);
                })
            });
        }

        return resolver(true);
    });

    return promise;
}

SlideUp.animate = animate;

export { SlideUp };

