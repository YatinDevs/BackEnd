const applyBtn = document.getElementById("apply-btn");
const resetBtn = document.getElementById("reset-btn");
const blockElements = document.querySelectorAll(".block");
const inputId = document.getElementById("wall_id");
const inputColor = document.getElementById("wall_color");

applyBtn.addEventListener("click", (e) => {
  const inputIDValue = parseInt(inputId.value);
  const inputColorValue = inputColor.value;
  console.log(inputColorValue);
  blockElements.forEach((element) => {
    console.log(element);
    console.log(element.id);
    console.log(element.value);

    if (element.id == inputIDValue) {
      element.style.backgroundColor = inputColorValue;
    }
  });
});

resetBtn.addEventListener("click", (e) => {
  blockElements.forEach((element) => {
    element.style.backgroundColor = "transparent";
  });
});
