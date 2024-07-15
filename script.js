const checkButton = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const output = document.getElementById("results-div");
const clearButton = document.getElementById("clear-btn");

const validateNumber = (input) => {
  const telRegex = /^(\+?1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
  
  return telRegex.test(input) ? output.innerHTML = `Valid US number: ${input}` : output.innerHTML = `Invalid US number: ${input}`;
}

checkButton.addEventListener("click", () => {
  if(userInput.value === ""){
    return alert("Please provide a phone number");
  }

  validateNumber(userInput.value);
});

clearButton.addEventListener("click", () => {
  output.textContent = ``;
  userInput.value = "";
})
