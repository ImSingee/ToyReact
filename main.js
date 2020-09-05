function createElement(elementName, attributes, ...children) {
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



document.body.appendChild (
    <div id="a" class="b" xx="c">
        <div></div>
        <div></div>
        <div></div>
        777
    </div>
);