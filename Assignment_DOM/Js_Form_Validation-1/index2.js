function ageChange(e) {
  const errorDisplayUI = document.getElementById("errors-holder");
  const submitBtn = document.querySelector("button");
  let inputValue = parseInt(e.target.value);

  console.log(inputValue);

  if (inputValue < 5) {
    errorDisplayUI.textContent = `You need to be atleast 5 years old to participate`;
    submitBtn.disabled = true;
    return;
  } else {
    errorDisplayUI.textContent = ``;
    submitBtn.disabled = false;
    return;
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const errorDisplayUI = document.getElementById("errors-holder");
  const resultDisplayUI = document.getElementById("result-holder");
  const checkBoxValue = document.getElementById("q_owns_phone");
  const inputBox = document.getElementById("q_age");
  let inputValue = parseInt(inputBox.value);
  const ownsPhone = checkBoxValue.checked;

  console.log(inputValue);
  if (inputValue === 0) {
    errorDisplayUI.textContent = `Please choose age`;
    return;
  }

  if (ownsPhone) {
    console.log(ownsPhone);
    if (inputValue < 13) {
      resultDisplayUI.textContent = `You are too young to have a phone`;
    } else {
      resultDisplayUI.textContent = `Use your phone in moderation`;
    }
  } else {
    if (inputValue < 13) {
      resultDisplayUI.textContent = `You will get a phone soon`;
    } else {
      resultDisplayUI.textContent = `You should get a phone`;
    }
  }
  console.log("submit-handled", inputValue);
}
