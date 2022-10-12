import { message } from "./util";
import "./style.css";
import "./header.css";
import flower from "./images/flower.jpg";

const text = message("<h1>Funcoding</h1>");
const img = `<div class="photo"><img src="${flower}" alt="flower"></div>`;

document.getElementById("root").innerHTML = img + text;
