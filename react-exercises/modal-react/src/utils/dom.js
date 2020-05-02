import { isNumericString } from './number';

const tabbableElements = [
    'button',
    'input',
    'select',
    'textarea',
    'div[contenteditable]',
    'span[user-modify="read-write"]',
    'anchor',
    'area',
    'fieldset',
    'keygen',
    'label',
    'svg',
    'rect',
    'summary',
    '[tabIndex]'
];

const isTabbableElement = (element) => {
    if (element.getAttribute('tabIndex') && isNumericString(element.getAttribute('tabIndex'))) {
        return Number(element.getAttribute('tabIndex')) >= 0;
    }
    return true;
}

const getTabbableChildren = (element) => {
    const possibleTabbableElements = element.querySelectorAll(tabbableElements.join(','));
    const filteredTabbableElements = [...possibleTabbableElements].filter(isTabbableElement);
    return filteredTabbableElements;
}

export { getTabbableChildren }

