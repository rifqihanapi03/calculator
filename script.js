const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
})

inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return;
  }
  currentNumber += dot;
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
})

const clearAll = () => {
  prevNumber = ''
  calculatorOperator = ''
  currentNumber = '0'
}

const calculator = () => {
  let result = ''
  switch(calculatorOperator) {
    case "+":
      result = parseFloat (prevNumber) + parseFloat (currentNumber)
      break;
    case "-":
      result = parseFloat (prevNumber) + parseFloat (currentNumber)
      break;
    case "*":
      result = parseFloat (prevNumber) + parseFloat (currentNumber)
      break;
    case "/":
      result = parseFloat (prevNumber) + parseFloat (currentNumber)
      break;
    default:
      return;
  }
  currentNumber = result;
  calculatorOperator = '';
}

const equalSign = document.querySelectorAll('.equal-sign');

equalSign.addEventListener('click', () => {
  calculator();
  updateScreen(currentNumber);
})

const inputOperator = (operator) => {
  if (calculatorOperator === '') {
    prevNumber = currentNumber
  }
  calculatorOperator = operator
  currentNumber = '0'
}

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  })
})


let prevNumber = '';
let currentNumber = '';
let calculatorOperator = '0';

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const calculatorScreen = document.querySelector('.calculator-screen');

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(event.target.value);
  });
});

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value), updateScreen(currentNumber);
  });
});

const numbers = document.querySelectorAll('.number');

numbers.forEach((numbers) => {
  numbers.addEventListener("click", (event) => {
    console.log(event.target.value);
  });
});
