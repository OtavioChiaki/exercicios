// Faça um programa que imprima na tela a tabuada de um número
// qualquer 
// escolhido pelo usuário até o 10.

let tabuada = prompt ("informe um número de 1 a 10 para mostrar sua tabuada ")

console.log("Tabuada do " + tabuada + ":")
for (let i = 0; i <= 10; i++) {
    r = tabuada * i
    console.log(tabuada + "x" + i + " = " + r)

}
