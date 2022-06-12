const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const inputNumber = (number) => {
  currentNumber = number;
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value), updateScreen(currentNumber);
  });
});

const numbers = document.querySelectorAll(".number");

numbers.forEach((numbers) => {
  numbers.addEventListener("click", (event) => {
    console.log(event.target.value);
  });
});
