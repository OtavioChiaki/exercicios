let numberone= parseFloat (prompt ("coloque o primeiro número"))
let numbertwo= parseFloat (prompt ("coloque o segundo número"))
let numberThree= parseFloat (prompt ("coloque o terceiro um número"))

if (numberone < numbertwo && numbertwo < numberThree) {
    alert ("em ordem crescente")
}
else if (numberone > numbertwo && numbertwo > numberThree) {
    alert ("em ordem decrescente")
}
else {
    alert ("não tem ordem")
}