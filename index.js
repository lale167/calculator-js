const buttons = document.querySelectorAll(".button");
const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const deleteButton = document.querySelector(".delete");
const equalsButton = document.querySelector(".equals");
let numberArray = [];
let expression = "";

buttons.forEach((button) => {
   button.addEventListener("click", () => {
      expression += button.innerHTML;
      display.innerHTML = expression;
      button.classList.add("flash");
      setTimeout(() => {
         button.classList.remove("flash");
      }, "100");
   });
});

equalsButton.addEventListener("click", () => {
   equalsButton.classList.add("flash");
   setTimeout(() => {
      equalsButton.classList.remove("flash");
   }, "100");
});

numbers.forEach((number) => {
   numberArray.push(number.innerHTML);
   number.addEventListener("click", () => {
      console.log(number.innerHTML);
   });
});

deleteButton.addEventListener("click", () => {
   expression = "";
   display.innerHTML = "";
});

equalsButton.addEventListener("click", () => {
   display.innerHTML = eval(expression);
   expression = "";
});
