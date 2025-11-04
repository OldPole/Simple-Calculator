export const calculate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case 'x':
      return firstOperand * secondOperand;
    case '÷':
      if (secondOperand === 0) {
        return 'Error';
      }
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
};
