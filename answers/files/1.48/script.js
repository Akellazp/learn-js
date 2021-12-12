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
      value = leftOperandElement.value + rightOperandElement.value;
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
  setResult(value);
  setExpression(`${leftOperandElement.value}${operator}${rightOperandElement.value}`);
}

function onClear () {
  console.log('onClear')
  setExpression('');
}

switch (operatorValue) {
  case 'ADDITION' :
  case 'SUBTRACTION' :
  case 'MULTIPLICATION' :
  case 'EXPONENTIATION' :
  case 'DIVISION' :
  case 'MODULUS' :
  case 'ROOT' :
}
/*
+
-
*
**
/
%
**(1/)
*/