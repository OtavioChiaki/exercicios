// Escreva um programa que solicite o nome do usuário e lhe dê boas vindas, 
// exibindo uma mensagem pelo console.

// prompt() -> Recebe uma entrada digitada
let nome = prompt("Olá, digite seu nome: ")

// Concatenação
console.log("Seja bem vindo " + nome + "!!!");

let pontos = 100

// parseInt() -> Transforma o que está entre () em número inteiro.
let bonus =  parseInt( prompt("Quantos pontos você deseja somar?") )

// Adição -> num1 + num2
// Subtração -> num1 - num2
// Multiplicação -> num1 * num2
// Divisão -> num1 / num2

let pontuacaoTotal = pontos + bonus
console.log(pontuacaoTotal)

// parseFloat() -> Transforma o que está entre () em número com , (quebrado)
let notaAluno = parseFloat(prompt("Digite a nota do aluno: "))

console.log(notaAluno);

