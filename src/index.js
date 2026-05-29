import "./styles.css";
import bootstrap from "bootstrap";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderBook } from "./book.js";

const navBtns = document.getElementsByClassName("nav-item");

function refresh() {
  const container = document.getElementById("content");
  container.innerHTML = "";

  for (var i = 0; i < navBtns.length; i++) {
    navBtns[i].classList.remove("selected");
  }
}

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", function () {
  refresh();
  this.classList.add("selected");
  renderHome();
});
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", function () {
  refresh();
  this.classList.add("selected");
  renderMenu();
});
const bookBtn = document.getElementById("bookBtn");
bookBtn.addEventListener("click", function () {
  refresh();
  this.classList.add("selected");
  renderBook();
});

homeBtn.click();
