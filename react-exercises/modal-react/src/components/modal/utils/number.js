const isNumericString = (token) => {
    try {
        return typeof token === "string" && !isNaN(Number(token));
    } catch (e) {
        return false;
    }
}

export { isNumericString }