import React from 'react';
import { Slide } from './slide';

const SlideDown = (props) => {
    const finalProps = { direction: 'down', ...props };
    return <Slide props={finalProps}>{finalProps.children}</Slide>;
}

const animate = ({ animatorElement, heightInterval, calculatorElement }) => {
    const promise = new Promise((resolver, rejector) => {
        let animatorElementHeight = parseInt(animatorElement.style.height, 10);
        let height = animatorElementHeight + heightInterval;
        if (height < 0) {
            height = 0;
        }

        const calculatorElementHeight = window.getComputedStyle(calculatorElement).height;
        animatorElement.style.height = height + 'px';
        if (height < parseInt(calculatorElementHeight, 10)) {
            return window.requestAnimationFrame(() => {
                const innerPromise = animate({ animatorElement, heightInterval, calculatorElement });
                innerPromise.then(() => {
                    resolver(true);
                })
            });
        }

        //TODO: addEventListener -> animationEnd
        // WebAnimationAPI

        // TODO: code refactor

        return resolver(true);
    });

    return promise;
}

SlideDown.animate = animate;

export { SlideDown };