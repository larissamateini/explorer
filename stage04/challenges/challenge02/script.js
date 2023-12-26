const students = [
  {
    name: "Eduardo",
    test1: 6,
    test2: 8,
  },
  {
    name: "Olívia",
    test1: 7,
    test2: 9,
  },
  {
    name: "Marina",
    test1: 5,
    test2: 6,
  },
]

function average(Number1, Number2) {
  let total = (Number1 + Number2) / 2;
  return total;
}

let studentAverage;
let result;
for(let student of students) {
  studentAverage = average(student.test1, student.test2);
  if(studentAverage >= 7) {
    result = `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`
  } else {
    result = `Não foi dessa vez, ${student.name}! Tente novamente!`
  }

  alert(`
    A média do(a) aluno(a) ${student.name} é: ${studentAverage}
    ${result}
  `)
}