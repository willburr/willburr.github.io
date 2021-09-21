import _ from "lodash";

const createNewElement = () => {
    const element = document.createElement("div");
    element.innerText = _.join(['Hello', 'there'], ' ');

    return element;
};

document.body.appendChild(createNewElement());