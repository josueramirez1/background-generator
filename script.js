const colorInfo = document.querySelector(".css-title");
const btn1 = document.querySelector(".btn-input1");
const btn2 = document.querySelector(".btn-input2");
const body = document.querySelector("#gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + btn1.value + ", " + btn2.value + ")";

  colorInfo.innerText = body.style.background + ";";
}

btn1.addEventListener("input", setGradient);
btn2.addEventListener("input", setGradient);
