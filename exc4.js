let nota1= parseFloat (prompt ("qual foi a sua primeira nota?"))
let nota2= parseFloat (prompt ("qual foi a sua segunda nota?"))
let nota3= parseFloat (prompt ("qual foi a sua terceira nota?"))
let nota4= parseFloat (prompt ("qual foi a sua quarta nota?"))

let nota0 = (nota1 + nota2 + nota3 + nota4)/4

if (nota0>=7) {
    alert ("APROVADO (/◕ヮ◕)/")
}

else if (nota0 <7&&nota0>= 5) {alert ("RECUPERAÇÃO ¯\_(ツ)_/¯")}

else {alert ("REPROVADO ( ･ั﹏･ั)")}