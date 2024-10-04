import {makeElement} from "./element-factory";
export {createHome};

function createHome() {
    const container = document.querySelector("#container");

    const home = document.createElement("div");
    container.appendChild(home);

    makeElement("h2", "", "", "Home", home);
    makeElement("p", "", "", "Welcome to Odin's Steakhouse, where flavor meets perfection! Our steaks are hand-selected from the finest cuts of beef, aged to perfection, and expertly grilled to bring out rich, smoky flavors that melt in your mouth. Whether you're craving a juicy ribeye, a tender filet mignon, or our signature T-bone steak, we promise an unforgettable dining experience. Complement your meal with our carefully curated selection of fine wines and decadent sides. At Odin Steakhouse, we believe in serving only the best, so come indulge in a steakhouse experience like no other.", home);
}