/*
const inputMaxValue = document.getElementById("max-sum");
const rangeBInput = document.getElementById("range-b");
const rangeAInput = document.getElementById("range-a");
const sumDiv = document.getElementById("sum-value");

let sum = parseInt(rangeAInput.value) + parseInt(rangeBInput.value);

inputMaxValue.addEventListener("input", (e) => {
  let inputMaxVal = parseInt(e.target.value);
  console.log(inputMaxVal);
  rangeAInput.max = inputMaxVal - parseInt(rangeBInput.value);
  rangeBInput.max = inputMaxVal - parseInt(rangeAInput.value);
});

const rangeAInputdisplay = document.getElementById("range-a-value");
rangeAInput.addEventListener("input", (e) => {
  rangeAInputdisplay.textContent = e.target.value;
  rangeBInput.max = parseInt(inputMaxValue.value) - parseInt(rangeAInput.value);
  sum = parseInt(rangeAInput.value) + parseInt(rangeBInput.value);
  sumDiv.textContent = sum;
});

const rangeBInputdisplay = document.getElementById("range-b-value");
rangeBInput.addEventListener("input", (e) => {
  rangeBInputdisplay.textContent = e.target.value;
  rangeAInput.max = parseInt(inputMaxValue.value) - parseInt(rangeBInput.value);
  sum = parseInt(rangeAInput.value) + parseInt(rangeBInput.value);
  sumDiv.textContent = sum;
});

*/
// ----------------------------------------
const selectors = {
  input: {
    a: "#range-a-holder input",
    b: "#range-b-holder input",
    max: "#max-sum-holder input",
  },
  value: {
    a: "range-a-value",
    b: "range-b-value",
    sum: "sum-value",
  },
};

function maxSumChange() {
  setMax(selectors.input.b, getMax() - getRangeAValue());
  setMax(selectors.input.a, getMax() - getRangeBValue());
}

function getInputValue(selector) {
  return document.querySelector(selector).value;
}

function getMax() {
  return getInputValue(selectors.input.max);
}

function getRangeAValue() {
  return getInputValue(selectors.input.a);
}

function getRangeBValue() {
  return getInputValue(selectors.input.b);
}

function setMax(selector, val) {
  document.querySelector(selector).max = val;
}

function setSum() {
  document.querySelector(selectors.value.sum).innerText =
    parseInt(getRangeAValue()) + parseInt(getRangeBValue());
}

function rangeAChange(event) {
  const val = document.querySelector(selectors.value.a);
  val.innerText = event.target.value;
  setMax(selectors.input.b, getMax() - getRangeAValue());
  setSum();
}

function rangeBChange(event) {
  const val = document.querySelector(selectors.value.b);
  val.innerText = event.target.value;
  setMax(selectors.input.a, getMax() - getRangeBValue());
  setSum();
}
