import {createElement} from "./element-factory";
export {createHome}

function createHome() {
    const container = document.querySelector("#container");

    const h2 = createElement("h2", "", "", "Hopefully this worked!", container)
}