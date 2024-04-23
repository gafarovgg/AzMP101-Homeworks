const firstNum = document.querySelector(".firstnum");
const secondNum = document.querySelector(".secondnum");
const addition = document.querySelector(".addition");
const substract = document.querySelector(".substract");
const multiply = document.querySelector(".multiply");
const division = document.querySelector(".division");
const reset = document.querySelector(".reset");
const result = document.querySelector(".result");

addition.addEventListener("click", function () {
  let addition = +firstNum + +secondNum;
  result.textContent = addition;
});

substract.addEventListener("click", function () {
  let substract = firstNum.asNumber - secondNum.asNumber;
  result.textContent = substract;
});

multiply.addEventListener("click", function () {
  let multiply = firstNum.asNumber * secondNum.asNumber;
  result.textContent = multiply;
});

division.addEventListener("click", function () {
  let division = firstNum.asNumber / secondNum.asNumber;
  result.textContent = division;
});

reset.addEventListener("click", function () {
  firstNum.value = "";
  secondNum.value = "";
  result.textContent = "0";
});
