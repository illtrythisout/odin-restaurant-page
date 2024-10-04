import { makeElement } from "./element-factory";
export {createMenu};

function createMenu() {
    const container = document.querySelector("#container");
    
    const menu = document.createElement("div");
    container.appendChild(menu);

    makeElement("h2", "", "", "Menu", menu);

    const menuContainer = makeElement("div", "class", "menuContainer", "", menu);

    const item1 = makeElement("div", "class", "separateContent", "", menuContainer);
    makeElement("p", "", "", "Ribs", item1);
    makeElement("p", "class", "price", "24€", item1);

    const item2 = makeElement("div", "class", "separateContent", "", menuContainer);
    makeElement("p", "", "", "Sirloin Steak", item2);
    makeElement("p", "class", "price", "26€", item2);

    const item3 = makeElement("div", "class", "separateContent", "", menuContainer);
    makeElement("p", "", "", "Baby Beef", item3);
    makeElement("p", "class", "price", "25€", item3);

    const item4 = makeElement("div", "class", "separateContent", "", menuContainer);
    makeElement("p", "", "", "Wagyu Steak", item4);
    makeElement("p", "class", "price", "34€", item4);

    const item5 = makeElement("div", "class", "separateContent", "", menuContainer);
    makeElement("p", "", "", "Beef Skewers", item5);
    makeElement("p", "class", "price", "19€", item5);
}