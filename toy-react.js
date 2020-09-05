export function createElement(elementName, attributes, ...children) {
    const e = document.createElement(elementName);

    for (let k in attributes) {
        e.setAttribute(k, attributes[k]);
    }

    for (let child of children) {
        if (typeof child === "string") {
            e.appendChild(document.createTextNode(child));
        } else {
            e.appendChild(child);
        }   
    }

    return e;
}

export function render(component, parentElement) {
    parentElement.appendChild(component);
}