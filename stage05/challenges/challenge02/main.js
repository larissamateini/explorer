alert("Hello World!");

const sumFirstNumber = 3;
const sumSecondNumber = 7;
let sum = sumFirstNumber + sumSecondNumber;
alert(`O resultado da soma de ${sumFirstNumber} e ${sumSecondNumber} é ${sum}.`);

function NumberOrNot(A) {
  let result = typeof(A);
  return result
}
const isANumber = 10;
let answer = NumberOrNot(isANumber);
answer = String(answer);
if(answer == "number") {
  alert(`${isANumber} é um número.`);
} else {
  alert(`${isANumber} não é um número.`);
}

function StringOrNot(B) {
  let result = typeof(B);
  return result
}
const isAString = "text";
let answer2 = StringOrNot(isAString);
answer2 = String(answer2);
if(answer2 == "string") {
  alert(`${isAString} é uma string.`);
} else {
  alert(`${isAString} não é uma string.`);
}

function BooleanOrNot(C) {
  let result = typeof(C);
  return result
}
const isABoolean = true;
let answer3 = BooleanOrNot(isABoolean);
answer3 = String(answer3);
if(answer3 == "boolean") {
  alert(`${isABoolean} é um booleano.`);
} else {
  alert(`${isABoolean} não é um booleano.`);
}

const subFirstNumber = 9;
const subSecondNumber = 4;
let sub = subFirstNumber - subSecondNumber;
alert(`O resultado da subtração de ${subFirstNumber} e ${subSecondNumber} é ${sub}.`);

const multFirstNumber = 3;
const multSecondNumber = 7;
let mult = multFirstNumber * multSecondNumber;
alert(`O resultado da multiplicação de ${multFirstNumber} e ${multSecondNumber} é ${mult}.`);

const divFirstNumber = 10;
const divSecondNumber = 5;
let div = divFirstNumber / divSecondNumber;
alert(`O resultado da divisão de ${divFirstNumber} e ${divSecondNumber} é ${div}.`);

const isEven = 7;
if(isEven % 2 == 0) {
  alert(`${isEven} é um número par.`)
} else {
  alert(`${isEven} não é um número par.`)
}

const isOdd = 7;
if(isOdd % 2 == 0) {
  alert(`${isOdd} não é um número ímpar.`)
} else {
  alert(`${isOdd} é um número ímpar.`)
}