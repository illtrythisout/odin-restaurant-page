import {makeElement} from "./element-factory";
export {createAboutUs};

function createAboutUs() {
    const container = document.querySelector("#container");

    const aboutUs = document.createElement("div");
    container.appendChild(aboutUs);

    makeElement("h2", "", "", "About Us", aboutUs);
    makeElement("p", "", "", "Founded in 2024, Odin Steakhouse began as a small family-owned restaurant with a simple mission: to serve the best steak in town. What started as a humble grill on the corner of Main Street quickly grew into a local favorite, renowned for its dedication to quality and passion for perfectly cooked steaks. Passed down through generations, our secret seasoning and grilling techniques have been refined over the years, but our commitment to sourcing the finest ingredients has remained unchanged. Today, Prime Cuts is known not only for its exceptional food but also for its warm, welcoming atmosphere, where guests are treated like family. From our early days to now, our mission remains the same—to offer a steakhouse experience that's both classic and unforgettable.", aboutUs);
}