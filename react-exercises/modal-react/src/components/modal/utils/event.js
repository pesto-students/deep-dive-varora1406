const ESCAPE = 'Escape';
const TAB = 'Tab';

const handleEscapePressEvent = (event, functionToExecute) => {
    if (event.key === ESCAPE) {
        functionToExecute(event);
    }
};

const handleTabEvent = (event, functionToExecute) => {
    if (event.key === TAB) {
        functionToExecute(event);
    }
}

export { handleEscapePressEvent, handleTabEvent }