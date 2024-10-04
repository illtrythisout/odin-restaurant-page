import "./styles.css"
import { createHome } from "./home"
import { createAboutUs } from "./about-us";
import { createMenu } from "./menu";
import { removeElement } from "./element-factory";

const container = document.querySelector("#container");
const btns = Array.from(document.querySelectorAll("button"));
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        removeElement(container);

        btns.forEach(btn => {
            btn.classList.remove("selected")
        })
        btn.classList.add("selected")

        switch (btn.getAttribute("id")) {
            case "home":
                createHome();
                break;
            case "aboutUs":
                createAboutUs();
                break;
            case "menu":
                createMenu();
                break;
        }
    });
});

createHome();