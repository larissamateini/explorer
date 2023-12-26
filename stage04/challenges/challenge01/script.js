let numberOne = prompt("Digite o primeiro número:");
numberOne = Number(numberOne);
let numberTwo = prompt("Digite o segundo número:");
numberTwo = Number(numberTwo);

let sum = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let multi = numberOne * numberTwo;
let div = numberOne / numberTwo;
let restDiv = numberOne % numberTwo;

alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${sub}`);
alert(`A multiplicação dos dois números é: ${multi}`);
alert(`A divisão dos dois números é: ${div}`);
alert(`O resto da divisão dos dois números é: ${restDiv}`);

let oddOrEven;
let differentOrNot;

if(sum % 2 == 0) {
  oddOrEven = "par";
} else {
  oddOrEven = "ímpar";
}
if(numberOne == numberTwo) {
  differentOrNot = "iguais";
} else {
  differentOrNot = "diferentes";
}

alert(`A soma dos dois números é ${oddOrEven} : ${sum}.`);
alert(`Os números inseridos são ${differentOrNot}.`);