// javascript code goes here

function displayRandomNumber() {
  let res = Math.floor(Math.random() * 40 - 20);
  const resultPara = document.getElementById("num");
  resultPara.textContent = res;
  return res;
}

displayRandomNumber();
