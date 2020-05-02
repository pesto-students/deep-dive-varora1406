const addChildrenIfMissing = (jsxArray, requiredChildren) => {
    console.log(jsxArray);
    let childrenClone = [];

    if (Array.isArray(jsxArray)) {
        childrenClone = [...jsxArray];
    } else if (isObject(jsxArray)) {
        childrenClone = [jsxArray];
    }

    for (const child of requiredChildren) {
        childrenClone = addChildIfMissing(childrenClone, child);
    }

    return childrenClone;
}

const addChildIfMissing = (jsxArray, child) => {
    if (!jsxArray.some(element => element.type === child)) {
        return [...jsxArray, React.createElement(child)];
    }

    return jsxArray;
}

export { addChildrenIfMissing }