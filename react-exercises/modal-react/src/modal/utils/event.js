const ESCAPE_KEYCODE = 27;
const handleEscapePressEvent = (event, functionToExecute) => {
    if (event.keyCode === ESCAPE_KEYCODE) {
        functionToExecute();
    }
};

export { handleEscapePressEvent }