let operator = '+';

function onLeftOperandChange(value) {
  console.log('onLeftOperandChange', value)
  leftOperandElement.value = value;
  setExpression(`${leftOperandElement.value}${operator}${rightOperandElement.value}`)
}

function onRightOperandChange(value) {
  console.log('onRightOperandChange', value)
  rightOperandElement.value = value;
  setExpression(`${leftOperandElement.value}${operator}${rightOperandElement.value}`)
}

function onOperatorChange(value) {
  console.log('onOperatorChange', value)
  switch (value) {
    case 'ADDITION' :
      operator = '+';
      break;
    case 'SUBTRACTION' :
      operator = '-';
      break;
    case 'MULTIPLICATION' :
      operator = '*';
      break;
    case 'EXPONENTIATION' :
      operator = '^';
      break;
    case 'DIVISION' :
      operator = '/';
      break;
    case 'MODULUS' :
      operator = '%';
      break;
    case 'ROOT' :
      operator = '√';
      break;
  }
  setExpression(`${leftOperandElement.value}${operator}${rightOperandElement.value}`)
}

function onSubmit () {
  console.log('onSubmit')
  switch (operator) {
    case '+' :
      value = Number(leftOperandElement.value) + Number(rightOperandElement.value);
      break;
    case '-' :
      value = leftOperandElement.value - rightOperandElement.value;
      break;
    case '*' :
      value = leftOperandElement.value * rightOperandElement.value;
      break;
    case '^' :
      value = leftOperandElement.value ** rightOperandElement.value;
      break;
    case '/' :
      value = leftOperandElement.value / rightOperandElement.value;
      break;
    case '%' :
      value = leftOperandElement.value % rightOperandElement.value;
      break;
    case '√' :
      value = leftOperandElement.value ** (1 / rightOperandElement.value);
      break;
  }
  setExpression(`${leftOperandElement.value}${operator}${rightOperandElement.value}`);
  setResult(value);
}

function onClear () {
  console.log('onClear')
}
