let operatorValue = 'ADDITTION';
let operator = '+';

function onLeftOperandChange(value) {
  console.log('onLeftOperandChange', value)
  leftOperandElement.value = value;
}

function onRightOperandChange(value) {
  console.log('onRightOperandChange', value)
  rightOperandElement.value = value;
}

function onOperatorChange(value) {
  console.log('onOperatorChange', value)
  operatorValue = value;
}

function onSubmit () {
  console.log('onSubmit')
  switch (operatorValue) {
    case 'ADDITION' :
      value = Number(leftOperandElement.value) + Number(rightOperandElement.value);
      operator = '+';
      break;
    case 'SUBTRACTION' :
      value = leftOperandElement.value - rightOperandElement.value;
      operator = '-';
      break;
    case 'MULTIPLICATION' :
      value = leftOperandElement.value * rightOperandElement.value;
      operator = '*';
      break;
    case 'EXPONENTIATION' :
      value = leftOperandElement.value ** rightOperandElement.value;
      operator = '^';
      break;
    case 'DIVISION' :
      value = leftOperandElement.value / rightOperandElement.value;
      operator = '/';
      break;
    case 'MODULUS' :
      value = leftOperandElement.value % rightOperandElement.value;
      operator = '%';
      break;
    case 'ROOT' :
      value = leftOperandElement.value ** (1 / rightOperandElement.value);
      operator = '√';
      break;
  }
  setExpression(`${leftOperandElement.value}${operator}${rightOperandElement.value}`);
  setResult(value);
}

function onClear () {
  console.log('onClear')
  setExpression('');
}
