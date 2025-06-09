import "../css/style.css";
import { homeContent } from "./home.js";
import { menuContent } from "./menu.js";
import { aboutContent } from "./about.js";

const container = document.querySelector("#content");
container.appendChild(homeContent);

const homeBtn = document.querySelector("#homePage");
const menuBtn = document.querySelector("#menuPage");
const aboutBtn = document.querySelector("#aboutPage");

homeBtn.addEventListener("click", () => {
  clearContent();
  container.appendChild(homeContent);
});

menuBtn.addEventListener("click", () => {
  clearContent();
  container.appendChild(menuContent);
});

aboutBtn.addEventListener("click", () => {
  clearContent();
  container.appendChild(aboutContent);
});

const clearContent = () => {
  while (container.firstChild) {
    container.firstChild.remove();
  }
};
