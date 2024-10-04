import {createElement} from "./element-factory";
export {createMenu}

function createMenu() {
    const container = document.querySelector("#container");
    
    const menu = document.createElement("div");
    container.appendChild(menu);
}