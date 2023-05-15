let checkbox;
checkbox = document.getElementById("checkbox");
console.log(checkbox.checked);
checkbox.addEventListener("change", changeBackgroundColor);

function changeBackgroundColor() {
  if (checkbox.checked) {
    document.body.style.background = "#000";
  } else {
    document.body.style.background = "rgb(249, 249, 249)";
  }
}
